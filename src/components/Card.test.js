import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Card from "./Card";

it("should render the Card component", () => {
  const wrapper = shallow(<Card />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
