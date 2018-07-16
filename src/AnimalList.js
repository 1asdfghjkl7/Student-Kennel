import React, { Component } from "react";
import Animal from "./Animal";
import APIManager from "./APIManager";
export default class AnimalList extends Component {
  state = {
    animals: []
  };

  addAnimal = () => {
    const inputName = document.getElementById("inputName").value;
    const inputBreed = document.getElementById("inputBreed").value;

    const animalObject = {
      name: inputName,
      breed: inputBreed
    };
    fetch("http://localhost:5002/animals", {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify(animalObject)
    })
      .then(() => {
        console.log("haw");
        return fetch("http://localhost:5002/animals");
      })
      .then(a => a.json())
      .then(animalList => {
        this.setState({
          animals: animalList
        });
        console.log("boi");
      });
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
        <form action="">
          <input id="inputName" type="text" />
          <input id="inputBreed" type="text" />
          <button
            onClick={() => {
              this.addAnimal();
            }}
          >
            Submit
          </button>
        </form>
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
