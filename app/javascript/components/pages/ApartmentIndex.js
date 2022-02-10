import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ApartmentIndex extends Component {
  render() {
    let apartments = this.props.apartments;

    return (
      <>
        <h2>Apartment List</h2>
        <div>
          {apartments.map((apartment) => {
            return (
              <NavLink to={`/apartments/${apartment.id}`} key={apartment.id}>
                <p>{`Apartment Location: ${apartment.street}  ${apartment.city}   ${apartment.state}`}</p>
              </NavLink>
            );
          })}
        </div>
      </>
    );
  }
}

export default ApartmentIndex;
