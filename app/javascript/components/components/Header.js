import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route,
    } = this.props;

    console.log("logged_in", logged_in);
    console.log("current_user", current_user);
    console.log("new_user_route", new_user_route);
    console.log("sign_in_route", sign_in_route);
    console.log("sign_out_route", sign_out_route);

    return (
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/apartments">Apartments</NavLink>
          </li>

          {!logged_in && (
            <li>
              <a href={new_user_route}>Register</a>
            </li>
          )}
          {!logged_in && (
            <li>
              <a href={sign_in_route}>Log In</a>
            </li>
          )}
          {logged_in && (
            <li>
              <a href={sign_out_route}>Log Out</a>
            </li>
          )}
        </ul>
      </nav>
    );
  }
}

export default Header;
