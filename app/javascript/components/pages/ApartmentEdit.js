import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class ApartmentEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateApartment: {
        street: this.props.apartment.street,
        city: this.props.apartment.city,
        state: this.props.apartment.state,
        manager_name: this.props.apartment.manager_name,
        manager_contact_email: this.props.apartment.manager_contact_email,
        monthly_rental_price: this.props.apartment.monthly_rental_price,
        number_of_bedrooms: this.props.apartment.number_of_bedrooms,
        number_of_bathrooms: this.props.apartment.number_of_bathrooms,
        allow_pets: this.props.apartment.allow_pets,
        user_id: this.props.current_user.id,
        id: this.props.apartment.id,
      },
      submitted: false,
    };
  }

  handleChange = (e) => {
    // destructuring form out of state
    let { updateApartment } = this.state;
    updateApartment[e.target.name] = e.target.value;
    // setting state to the updated form content
    this.setState({ updateApartment: updateApartment });
  };

  handleSubmit = () => {
    this.props.updateApartment(this.state.updateApartment);
    this.setState({ submitted: true });
  };

  render() {
    return (
      <>
        <h2>Edit Apartment</h2>
        <form>
          <label htmlFor="street">Street</label>
          <input
            name="street"
            value={this.state.updateApartment.street}
            placeholder={this.state.updateApartment.street}
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="city">City</label>
          <input
            name="city"
            value={this.state.updateApartment.city}
            placeholder={this.state.updateApartment.city}
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="state">State</label>
          <input
            name="state"
            value={this.state.updateApartment.state}
            placeholder={this.state.updateApartment.state}
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="manager_name">Manager Name</label>
          <input
            name="manager_name"
            value={this.state.updateApartment.manager_name}
            placeholder={this.state.updateApartment.manager_name}
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="manager_contact_email">Contact Email</label>
          <input
            name="manager_contact_email"
            value={this.state.updateApartment.manager_contact_email}
            placeholder={this.state.updateApartment.manager_contact_email}
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="monthly_rental_price">Monthly Price</label>
          <input
            name="monthly_rental_price"
            value={this.state.updateApartment.monthly_rental_price}
            placeholder={this.state.updateApartment.monthly_rental_price}
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="number_of_bedrooms">number_of_bedrooms</label>
          <input
            name="number_of_bedrooms"
            value={this.state.updateApartment.number_of_bedrooms}
            placeholder={this.state.updateApartment.number_of_bedrooms}
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="number_of_bathrooms">number_of_bathrooms</label>
          <input
            name="number_of_bathrooms"
            value={this.state.updateApartment.number_of_bathrooms}
            placeholder={this.state.updateApartment.number_of_bathrooms}
            type="text"
            onChange={this.handleChange}
          />
          <label htmlFor="allow_pets">Allow Pets</label>
          <input
            name="allow_pets"
            value={this.state.updateApartment.allow_pets}
            placeholder={this.state.updateApartment.allow_pets.toString()}
            type="text"
            onChange={this.handleChange}
          />

          <button type="button" onClick={this.handleSubmit}>
            Update Apartment
          </button>
        </form>
        {this.state.submitted && <Redirect to="/apartments" />}
      </>
    );
  }
}

export default ApartmentEdit;
