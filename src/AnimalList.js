import React, { Component } from "react";
import Animal from "./Animal";
export default class AnimalList extends Component {
  state = {
    animals: [
      { id: 1, name: "Doodles" },
      { id: 2, name: "Jack" },
      { id: 3, name: "Angus" },
      { id: 4, name: "Henley" },
      { id: 5, name: "Derkins" },
      { id: 6, name: "Checkers" }
    ],
    owners: [
      { id: 1, name: "Ryan Tanay" },
      { id: 2, name: "Emma Beaton" },
      { id: 3, name: "Dani Adkins" },
      { id: 4, name: "Adam Oswalt" },
      { id: 5, name: "Fletcher Bangs" },
      { id: 6, name: "Angela Lee" }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <ul>{this.state.animals.map(animal => <Animal animal={animal} />)}</ul>
      </React.Fragment>
    );
  }
}
