import React from "react";

export default props => {
  return <li key={props.employee.id}>{props.employee.name}</li>;
};
