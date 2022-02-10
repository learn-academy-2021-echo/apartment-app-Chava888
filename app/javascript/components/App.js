import React, { Component } from "react";
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import apartments from "./components/MockData";
import ApartmentShow from "./pages/ApartmentShow";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: [],
    };
  }

componentDidMount(){
  this.readApartment()
}

readApartment = () => {
  fetch("http://localhost:3000/apartments")
  .then((response)=>(response.json())
  //set the state with the data from the backend into the empty array
  .then((apartmentsArray)=>this.setState({apartments:})
}


  render() {
    return (
      <>
        <Router>
          <Header {...this.props} />
          <Switch>
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
            {/* <Route path="/apartments/new" component={ApartmentNew} /> */}
            {/* <Route path="/apartments/:id/edit" component={ApartmentEdit} /> */}

            {/* <Route component={NotFound}/> */}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
