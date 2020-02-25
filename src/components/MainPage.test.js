import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import MainPage from "./MainPage.js";

let wrapper;
beforeEach(() => {
  const mockProps = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: false
  };
  wrapper = shallow(<MainPage {...mockProps} />);
});

it("should render the MainPage component", () => {
  expect(toJson(wrapper)).toMatchSnapshot();
});

it("should filters robots corretcly", () => {
  expect(wrapper.instance().filterRobots()).toEqual([]);
  const mockProps2 = {
    onRequestRobots: jest.fn(),
    robots: [
      {
        id: 3,
        name: "John",
        email: "john@gmail.com"
      }
    ],
    searchField: "john",
    isPending: false
  };
  const wrapper2 = shallow(<MainPage {...mockProps2} />);
  expect(wrapper2.instance().filterRobots().length).toEqual(1);
});

it("should show loading", () => {
  const mockProps3 = {
    onRequestRobots: jest.fn(),
    robots: [],
    searchField: "",
    isPending: true
  };
  const wrapper3 = shallow(<MainPage {...mockProps3} />);
  expect(wrapper3.find("h1.loading").length).toEqual(1);
});
