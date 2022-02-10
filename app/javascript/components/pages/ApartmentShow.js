import React, { Component } from "react";

class ApartmentShow extends Component {
  render() {
    let { apartment } = this.props;
    return (
      <>
        <h2>{`Details for Apartment: ${apartment.street}  ${apartment.city}   ${apartment.state}`}</h2>

        <li>{`Rental Price: $${apartment.monthly_rental_price}`}</li>
        <li>{`Number of Bedrooms: ${apartment.number_of_bedrooms}`}</li>
        <li>{`Number of Bathrooms: ${apartment.number_of_bedrooms}`}</li>
        <li>{`Pets Allowed: ${apartment.allow_pets ? "Yes" : "No"}`}</li>
        <li>{`Manager Name: ${apartment.manager_name}`}</li>
        <li>{`Contact Email: ${apartment.manager_contact_email}`}</li>
      </>
    );
  }
}

export default ApartmentShow;
