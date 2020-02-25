import React, { Component } from "react";

import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";

import "./MainPage.css";
import CounterButton from "../components/CounterButton";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { onSearchChange, isPending } = this.props;
    return (
      <div className="tc">
        <h1 className="f1">RoboFriends</h1>
        <CounterButton color="red" />
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          {isPending ? (
            <h1 className="loading">Loading</h1>
          ) : (
            <ErrorBoundry>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundry>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
