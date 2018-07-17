import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Employee = ({ employee, children, checkOutEmployee }) => {
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
        <a href="#" onClick={() => checkOutEmployee(employee.id)}>
          Delete
        </a>
      </div>
    </div>
  );
};

Employee.propTypes = {
  employee: PropTypes.object,
  employee: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })
};

export default Employee;
