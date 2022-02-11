import React, { Component } from "react";
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ApartmentShow from "./pages/ApartmentShow";
import ApartmentNew from "./pages/ApartmentNew";

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

  render() {
    return (
      <>
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route
              path="/apartmentsnew"
              render={(props) => (
                <ApartmentNew createApartment={this.createApartment} />
              )}
            />
            <Route
              path="/apartments/:id"
              render={(props) => {
                let apartmentId = +props.match.params.id;
                let apartment = this.state.apartments.find(
                  (apartment) => apartment.id === apartmentId
                );
                return <ApartmentShow apartment={apartment} />;
              }}
            />

            <Route
              path="/apartments"
              render={(props) => (
                <ApartmentIndex apartments={this.state.apartments} />
              )}
            />
            <Route exact path="/" component={Home} />

            {/* <Route path="/apartments/:id/edit" component={ApartmentEdit} /> */}

            {/* <Route component={NotFound}/> */}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
