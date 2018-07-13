import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default props => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <li className="card-title">{props.employee.name}</li>
        {
          <Link
            className="card-link"
            to={{
              pathname: `/employees/${props.employee.id}`,
              state: { employee: props.employee }
            }}
          >
            Details
          </Link>
        }
      </div>
    </div>
  );
};
