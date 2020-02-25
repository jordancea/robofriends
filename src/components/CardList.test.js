import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CardList from "./CardList";

it("should render the CardList component", () => {
  const mockRobots = [{ id: 1, name: "Test Name 2", email: "test@test.com" }];
  expect(toJson(shallow(<CardList robots={mockRobots} />))).toMatchSnapshot();
});
