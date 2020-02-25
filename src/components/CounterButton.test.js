import React from "react";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";
import CounterButton from "./CounterButton";

it("should render the CounterButton component", () => {
  const mockColor = "red";
  expect(
    toJson(shallow(<CounterButton color={mockColor} />))
  ).toMatchSnapshot();
});

it("should correctly increment the CounterButton component", () => {
  const mockColor = "red";
  const wrapper = shallow(<CounterButton color={mockColor} />);
  wrapper.find('[id="counter"]').simulate("click"); //simulate click event on the button
  expect(wrapper.state()).toEqual({ count: 2 });
  expect(wrapper.props().color).toEqual("red");
});
