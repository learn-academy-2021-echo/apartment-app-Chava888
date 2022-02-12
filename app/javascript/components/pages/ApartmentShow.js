import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class ApartmentShow extends Component {
  render() {
    let { apartment, current_user } = this.props;
    console.log(current_user);
    return (
      <>
        <h2>{`Details for Apartment: ${apartment.street}  ${apartment.city}   ${apartment.state}`}</h2>

        <li>{`Rental Price: $${apartment.monthly_rental_price}`}</li>
        <li>{`Number of Bedrooms: ${apartment.number_of_bedrooms}`}</li>
        <li>{`Number of Bathrooms: ${apartment.number_of_bedrooms}`}</li>
        <li>{`Pets Allowed: ${apartment.allow_pets ? "Yes" : "No"}`}</li>
        <li>{`Manager Name: ${apartment.manager_name}`}</li>
        <li>{`Contact Email: ${apartment.manager_contact_email}`}</li>
        <NavLink to={`/apartments/${apartment.id}/edit`}>
          <button>Edit Apartment</button>
        </NavLink>
        <NavLink to="/apartments">
          <button
            onClick={() =>
              this.props.deleteApartment(current_user.id, apartment.id)
            }
          >
            Delete Apartment
          </button>
        </NavLink>
      </>
    );
  }
}

export default ApartmentShow;
