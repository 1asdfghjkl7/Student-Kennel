import React from "react";

export default props => {
  return <li key={props.location.id}>{props.location.name}</li>;
};
