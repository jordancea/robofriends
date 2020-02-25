import * as types from "./constants";
import * as reducers from "./reducers";

describe("searchRobots", () => {
  const initialStateSearch = {
    searchField: ""
  };

  it("should return initial state", () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({ searchField: "" });
  });

  it("should handle CHANGE_SEARCHFIELD", () => {
    expect(
      reducers.searchRobots(initialStateSearch, {
        type: types.CHANGE_SEARCHFIELD,
        payload: "test"
      })
    ).toEqual({
      searchField: "test"
    });
  });
});

describe("requestRobots", () => {
  const initialStateRobots = {
    robots: [],
    isPending: false
  };

  it("should return initial state", () => {
    expect(reducers.requestRobots(undefined, {})).toEqual(initialStateRobots);
  });

  it("should handle REQUEST_ROBOTS_PENDING", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: types.REQUEST_ROBOTS_PENDING
      })
    ).toEqual({
      robots: [],
      isPending: true
    });
  });

  it("should handle REQUEST_ROBOTS_FAILED", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: types.REQUEST_ROBOTS_FAILED,
        payload: "error"
      })
    ).toEqual({
      robots: [],
      isPending: false,
      error: "error"
    });
  });

  it("should handle REQUEST_ROBOTS_SUCCESS", () => {
    expect(
      reducers.requestRobots(initialStateRobots, {
        type: types.REQUEST_ROBOTS_SUCCESS,
        payload: [{ id: 3, name: "Jonh", email: "john@gmail.com" }]
      })
    ).toEqual({
      robots: [{ id: 3, name: "Jonh", email: "john@gmail.com" }],
      isPending: false
    });
  });
});
