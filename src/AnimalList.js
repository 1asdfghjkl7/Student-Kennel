import React, { Component } from "react";

export default class LocationList extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
          {this.props.intersection.map(inter => {
            const currentAnimal = inter.animalId - 1;
            const currentOwner = inter.ownerId - 1;
            return (
              <div>
                <p>
                  {this.props.animals[currentAnimal].name}{" "}
                  {this.props.owners[currentOwner].name}
                </p>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
