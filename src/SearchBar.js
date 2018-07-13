import React, { Component } from "react";
import APIManager from "./APIManager";

export default class SearchBar extends Component {
  componentDidMount() {
    APIManager.getSearchResults();
    // .then(employees =>
    //   this.setState({ employees: employees }));
  }

  render() {
    return <input type="text" />;
  }
}
