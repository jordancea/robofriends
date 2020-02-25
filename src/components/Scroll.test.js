import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import Scroll from "./Scroll.js";

it("should render the Scroll wrapper component", () => {
  const mochSearchChange = jest.fn();
  const wrapper = shallow(
    <Scroll>
      <div>Test</div>
    </Scroll>
  );
  expect(toJson(wrapper)).toMatchSnapshot();
});
