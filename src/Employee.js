import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import "bootstrap/dist/css/bootstrap.min.css";

const Employee = ({ employee, children }) => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <h5 className="card-title">{children}</h5>
        {
          <Link
            className="card-link"
            to={{
              pathname: `/employees/${employee.id}`,
              state: { employee: employee }
            }}
          >
            Details
          </Link>
        }
        <a href="#" onClick={() => children.checkOutEmployee(employee.id)}>
          Delete
        </a>
      </div>
    </div>
  );
};

Employee.propTypes = {
  employee: PropTypes.object
}

export default Employee