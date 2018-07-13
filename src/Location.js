import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

export default props => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <li className="card-title">{props.location.name}</li>
        {
          <Link
            className="card-link"
            to={{
              pathname: `/locations/${props.location.id}`,
              state: { location: props.location }
            }}
          >
            Details
          </Link>
        }
      </div>
    </div>
  );
};
