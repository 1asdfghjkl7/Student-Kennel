import React, { Component } from "react";
import Animal from "./Animal";
export default class AnimalList extends Component {
  state = {
    animals: [
      { id: 1, name: "Doodles", breed: "German Shepherd" },
      { id: 2, name: "Jack", breed: "Cocker Spaniel" },
      { id: 3, name: "Angus", breed: "Dalmatian" },
      { id: 4, name: "Henley", breed: "Carolina Retriever" },
      { id: 5, name: "Derkins", breed: "Pug" },
      { id: 6, name: "Checkers", breed: "Bulldog" }
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
        <ul>
          {this.state.animals.map(animal => (
            <Animal animal={animal} key={animal.id} />
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
