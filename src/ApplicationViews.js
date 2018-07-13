import { Route } from "react-router-dom";
import React, { Component } from "react";
import AnimalList from "./AnimalList";
import LocationList from "./LocationList";
import EmployeeList from "./EmployeeList";
import Animal from "./Animal";
import Employee from "./Employee";
import Location from "./Location";
import Login from "./Login";
export default class ApplicationViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null;
  render() {
    return (
      <React.Fragment>
        <Route
          exact
          path="/"
          render={props => {
            if (this.isAuthenticated()) {
              return <LocationList />;
            } else {
              return <Login />;
            }
          }}
        />
        <Route
          exact
          path="/animals"
          render={props => {
            if (this.isAuthenticated()) {
              return <AnimalList />;
            } else {
              return <Login />;
            }
          }}
        />
        <Route
          exact
          path="/employees"
          render={props => {
            if (this.isAuthenticated()) {
              return <EmployeeList />;
            } else {
              return <Login />;
            }
          }}
        />
        <Route path="/login" component={Login} />
        <Route
          path="/animals/:animalId"
          render={props => {
            return (
              <Animal animal={props.location.state.animal}>
                {props.location.state.animal.name}
                {props.location.state.animal.breed}
              </Animal>
            );
          }}
        />
        <Route
          path="/employees/:employeeId"
          render={props => {
            return (
              <Employee employee={props.location.state.employee}>
                {props.location.state.employee.name}
              </Employee>
            );
          }}
        />
        <Route
          path="/locations/:locationId"
          render={props => {
            return (
              <Location location={props.location.state.location}>
                {props.location.state.location.name}
              </Location>
            );
          }}
        />
      </React.Fragment>
    );
  }
}
