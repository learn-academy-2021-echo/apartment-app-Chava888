import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ApartmentNew extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newApartment: {
        street: "",
        city: "",
        state: "",
        manager_name: "",
        manager_contact_email: "",
        monthly_rental_price: "",
        number_of_bedrooms: "",
        number_of_bathrooms: "",
        allow_pets: "",
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    // destructuring form out of state
    let { newApartment } = this.state;
    newApartment[e.target.name] = e.target.value;
    // setting state to the updated form content
    this.setState({ newApartment: newApartment });
  };

  handleSubmit = () => {
    this.props.createApartment(this.state.newApartment);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <h2>Add Apartment</h2>
        <form>
          <label htmlFor="street">Street</label>
          <input
            name="street"
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="city">City</label>
          <input
            name="city"
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="state">State</label>
          <input
            name="state"
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="manager_name">Manager Name</label>
          <input
            name="manager_name"
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="manager_contact_email">Contact Email</label>
          <input
            name="manager_contact_email"
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="monthly_rental_price">Monthly Price</label>
          <input
            name="monthly_rental_price"
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="number_of_bedrooms">number_of_bedrooms</label>
          <input
            name="number_of_bedrooms"
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="number_of_bathrooms">number_of_bathrooms</label>
          <input
            name="number_of_bathrooms"
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="allow_pets">Allow Pets</label>
          <input
            name="allow_pets"
            placeholder=""
            type="text"
            onChange={this.handleChange}
          />

          <button name="submit" onClick={this.handleSubmit}>
            Create a New Apartment
          </button>
        </form>
        {this.state.submitted && <Redirect to="/apartments" />}
      </>
    );
  }
}

export default ApartmentNew;
