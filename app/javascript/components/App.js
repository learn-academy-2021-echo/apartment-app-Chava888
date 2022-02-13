import React, { Component } from "react";
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApartmentShow from "./pages/ApartmentShow";
import ApartmentNew from "./pages/ApartmentNew";
import ApartmentEdit from "./pages/ApartmentEdit";
import NotFound from "./pages/NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
    };
  }

  componentDidMount() {
    this.readApartment();
  }

  readApartment = () => {
    fetch("http://localhost:3000/apartments")
      .then((response) => response.json())
      //set the state with the data from the backend into the empty array
      .then((apartmentsArray) => this.setState({ apartments: apartmentsArray }))
      .catch((errors) => console.log("Apartment read errors", errors));
  };

  createApartment = (newApartment) => {
    fetch("http://localhost:3000/apartments", {
      //Convert an object to a string
      body: JSON.stringify(newApartment),
      //Specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json",
      },
      //HTTP verb so the correct endpoint is invoked on the server
      method: "POST",
    })
      .then((response) => response.json())
      .then((payload) => this.readApartment())
      .catch((errors) => console.log("Apartment create errors:", errors));
  };

  updateApartment = (apartment) => {
    fetch(`http://localhost:3000/apartments/${apartment.id}`, {
      //converting an object to a string
      body: JSON.stringify(apartment),
      //specify the info being sent in JSON and the info returning should be JSON
      headers: {
        "Content-Type": "application/json",
      },
      //HTTP verb so the correct endpoint is invoked on the server
      method: "PATCH",
    })
      .then((response) => response.json())
      .then((payload) => this.readApartment())
      .catch((errors) => console.log("Apartment update errors:", errors));
  };

  deleteApartment = (user_id, id) => {
    fetch(`http://localhost:3000/apartments/${id}`, {
      //Convert an object to a string
      body: JSON.stringify({ user_id, id }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((payload) => this.readApartment())
      .catch((errors) => console.log("delete errors:", errors));
  };

  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    return (
      <>
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route
              path="/apartmentsnew"
              render={(props) => (
                <ApartmentNew
                  createApartment={this.createApartment}
                  current_user={current_user}
                />
              )}
            />
            <Route
              path="/apartments/:id/edit"
              render={(props) => {
                let apartmentId = +props.match.params.id;
                let apartment = this.state.apartments.find(
                  (apartment) => apartment.id === apartmentId
                );
                return (
                  <ApartmentEdit
                    apartment={apartment}
                    current_user={current_user}
                    updateApartment={this.updateApartment}
                  />
                );
              }}
            />
            <Route
              path="/apartments/:id"
              render={(props) => {
                let apartmentId = +props.match.params.id;
                let apartment = this.state.apartments.find(
                  (apartment) => apartment.id === apartmentId
                );
                return (
                  <ApartmentShow
                    current_user={current_user}
                    apartment={apartment}
                    deleteApartment={this.deleteApartment}
                  />
                );
              }}
            />

            <Route
              path="/apartments"
              render={(props) => (
                <ApartmentIndex apartments={this.state.apartments} />
              )}
            />
            <Route exact path="/" component={Home} />

            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
