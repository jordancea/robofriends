import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import SearchBox from "./SearchBox.js";

it("should render the SearchBox component", () => {
  const mochSearchChange = jest.fn();
  const wrapper = shallow(<SearchBox searchChange={mochSearchChange} />);
  expect(toJson(wrapper)).toMatchSnapshot();
});
