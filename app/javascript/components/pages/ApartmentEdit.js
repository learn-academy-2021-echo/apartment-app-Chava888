import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ApartmentEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newApartment: {
        street: this.props.aparment.street,
        city: "",
        state: "",
        manager_name: "",
        manager_contact_email: "",
        monthly_rental_price: "",
        number_of_bedrooms: "",
        number_of_bathrooms: "",
        allow_pets: "",
        user_id: this.props.current_user.id,
      },
      submitted: false,
    };
  }

  render() {
    return (
      <>
        <h2>Edit Apartment</h2>
        <form>
          <label htmlFor="street">Street</label>
          <input
            name="street"
            value={this.state.newApartment.street}
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="city">City</label>
          <input
            name="city"
            value={this.state.newApartment.city}
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="state">State</label>
          <input
            name="state"
            value={this.state.newApartment.state}
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="manager_name">Manager Name</label>
          <input
            name="manager_name"
            value={this.state.newApartment.manager_name}
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="manager_contact_email">Contact Email</label>
          <input
            name="manager_contact_email"
            value={this.state.newApartment.manager_contact_email}
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="monthly_rental_price">Monthly Price</label>
          <input
            name="monthly_rental_price"
            value={this.state.newApartment.monthly_rental_price}
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="number_of_bedrooms">number_of_bedrooms</label>
          <input
            name="number_of_bedrooms"
            value={this.state.newApartment.number_of_bedrooms}
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="number_of_bathrooms">number_of_bathrooms</label>
          <input
            name="number_of_bathrooms"
            value={this.state.newApartment.number_of_bathrooms}
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="allow_pets">Allow Pets</label>
          <input
            name="allow_pets"
            value={this.state.newApartment.allow_pets}
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />

          <button type="button" onClick={this.handleSubmit}>
            Create a New Apartment
          </button>
        </form>
        {this.state.submitted && <Redirect to="/apartments" />}
      </>
    );
  }
}

export default ApartmentEdit;
