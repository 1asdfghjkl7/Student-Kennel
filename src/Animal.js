import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Animal = ({ children, animal, checkOutAnimal }) => {
  return (
    <div className="card" style={{ width: `18rem` }}>
      <div className="card-body">
        <h5 className="card-title">{children}</h5>
        <p className="card-text">{children.breed}</p>
        {
          <Link
            className="card-link"
            to={{
              pathname: `/animals/${animal.id}`,
              state: { animal: animal }
            }}
          >
            Details
          </Link>
        }
        <a href="#" onClick={() => checkOutAnimal(animal.id)}>
          Delete
        </a>
      </div>
    </div>
  );
};
export default Animal;
