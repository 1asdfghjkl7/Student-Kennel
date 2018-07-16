import React, { Component } from "react";
import Animal from "./Animal";
import APIManager from "./APIManager";
export default class AnimalList extends Component {
  state = {
    animals: []
  };

  checkOutAnimal = animalId => {
    // Delete the specified animal from the API
    fetch(`http://localhost:5002/animals/${animalId}`, {
      method: "DELETE"
    })
      // When DELETE is finished, retrieve the new list of animals
      .then(() => {
        // Remember you HAVE TO return this fetch to the subsequenet `then()`
        return fetch("http://localhost:5002/animals");
      })
      // Once the new array of animals is retrieved, set the state
      .then(a => a.json())
      .then(animalList => {
        this.setState({
          animals: animalList
        });
      });
  };

  componentDidMount() {
    APIManager.getAnimals().then(animals =>
      this.setState({ animals: animals })
    );
  }

  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.animals.map(animal => (
            <Animal
              key={animal.id}
              animal={animal}
              checkOutAnimal={this.checkOutAnimal}
            >
              {animal.name}
            </Animal>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}
