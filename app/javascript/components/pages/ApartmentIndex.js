import React, { Component } from "react";
import apartments from "../components/MockData";

class ApartmentIndex extends Component {
  render() {
    let data = apartments;

    return (
      <>
        <h2>Apartment List</h2>
        <div>
          {data.map((apartment, index) => {
            return (
              <ul key={index}>
                <li>{`Apartment Location: ${apartment.street}  ${apartment.city}   ${apartment.state}`}</li>
                {/* <li>{`Apartment Rental Price: $${apartment.manager_rental_price}`}</li>
                <li>{`Apartment Number of Bedrooms: ${apartment.number_of_bedrooms}`}</li>
                <li>{`Apartment Number of Bathrooms: ${apartment.number_of_bedrooms}`}</li>
                <li>{`Pets Allowed: ${
                  apartment.allow_pets ? "Yes" : "No"
                }`}</li>
                <li>{`Manager Name: ${apartment.manager_name}`}</li>
                <li>{`Contact Email: ${apartment.manager_contact_email}`}</li> */}
              </ul>
            );
          })}
        </div>
      </>
    );
  }
}

export default ApartmentIndex;
