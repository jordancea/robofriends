import * as types from "./constants";
import * as actions from "./actions";
import fetchMock from "fetch-mock";
import configureStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

const middlewares = [thunkMiddleware];
const mockStore = configureStore(middlewares);

describe("setSearchField", () => {
  const text = "test";
  it("should create action to search robots", () => {
    expect(actions.setSearchField(text)).toEqual({
      type: types.CHANGE_SEARCHFIELD,
      payload: text
    });
  });
});

describe("requestRobots", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("handles requesting robots API - SUCCESS", () => {
    fetchMock
      .mock("https://jsonplaceholder.typicode.com/users", {
        body: { robots: [{ id: 2, name: "John", email: "john@gmail.com" }] },
        headers: { "content-type": "application/json" }
      })
      .sandbox();

    const expectedActions = [
      { type: types.REQUEST_ROBOTS_PENDING },
      {
        type: types.REQUEST_ROBOTS_SUCCESS,
        payload: { robots: [{ id: 2, name: "John", email: "john@gmail.com" }] }
      }
    ];

    const initialState = {
      robots: [],
      isPending: false
    };
    const store = mockStore(initialState);

    return store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("handles requesting robots API - FAIL", () => {
    fetchMock
      .mock("https://jsonplaceholder.typicode.com/users", {
        status: 400
      })
      .sandbox();

    const expectedActions = [
      { type: types.REQUEST_ROBOTS_PENDING },
      {
        type: types.REQUEST_ROBOTS_FAILED,
        payload: {
          error: "error"
        }
      }
    ];

    const initialState = {
      robots: [],
      isPending: false
    };
    const store = mockStore(initialState);

    return store.dispatch(actions.requestRobots()).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
