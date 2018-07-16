import React, { Component } from "react";
import Employee from "./Employee";
import APIManager from "./APIManager";

export default class EmployeeList extends Component {
  state = {
    employees: []
  };

  checkOutEmployee = employeeId => {
    // Delete the specified animal from the API
    fetch(`http://localhost:5002/employees/${employeeId}`, {
      method: "DELETE"
    })
      // When DELETE is finished, retrieve the new list of animals
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:5002/employees");
      })
      // Once the new array of animals is retrieved, set the state
      .then(a => a.json())
      .then(employeeList => {
        this.setState({
          employees: employeeList
        });
      });
  };

  componentDidMount() {
    APIManager.getEmployees().then(employees =>
      this.setState({ employees: employees })
    );
  }

  render() {
    return (
      <React.Fragment>
        {this.state.employees.map(employee => (
          <Employee
            key={employee.id}
            employee={employee}
            checkOutEmployee={this.checkOutEmployee}
          >
            {employee.name}
          </Employee>
        ))}
      </React.Fragment>
    );
  }
}
