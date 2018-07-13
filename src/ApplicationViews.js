import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./AnimalList";
import LocationList from "./LocationList";
import EmployeeList from "./EmployeeList";
import Animal from "./Animal";
import Employee from "./Employee";
import Location from "./Location";
export default class ApplicationViews extends Component {
  render() {
    return (
      <React.Fragment>
        <Route exact path="/" />
        <Route exact path="/locations" component={LocationList} />
        <Route exact path="/animals" component={AnimalList} />
        <Route exact path="/employees" component={EmployeeList} />
        <Route
          path="/animals/:animalId"
          render={props => {
            return <Animal animal={props.location.state.animal} />;
          }}
        />
        <Route
          path="/employees/:employeeId"
          render={props => {
            return <Employee employee={props.location.state.employee} />;
          }}
        />
        <Route
          path="/locations/:locationId"
          render={props => {
            return <Location location={props.location.state.location} />;
          }}
        />
      </React.Fragment>
    );
  }
}
