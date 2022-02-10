import React, { Component } from "react";
import Home from "./pages/Home";
import ApartmentIndex from "./pages/ApartmentIndex";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import apartments from "./components/MockData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apartments: apartments,
    };
  }

  render() {
    return (
      <>
        <Router>
          <Header {...this.props} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/apartmentsindex" component={ApartmentIndex} />

            {/* <Route path="/apartments/new" component={ApartmentNew} /> */}
            {/* <Route path="/apartments/:id/edit" component={ApartmentEdit} /> */}
            {/* <Route path="/apartmentshow" component={ApartmentShow} /> */}
            {/* <Route component={NotFound}/> */}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
