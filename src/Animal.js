import React from "react";

export default props => {
  return <li key={props.animal.id}>{props.animal.name}</li>;
};
