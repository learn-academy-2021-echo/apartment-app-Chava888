// import React, { Component } from "react";
import { NavLink } from "react-router-dom";

// class Header extends Component {
//   render() {
//     const {
//       logged_in,
//       current_user,
//       new_user_route,
//       sign_in_route,
//       sign_out_route,
//     } = this.props;

// console.log("logged_in", logged_in);
// console.log("current_user", current_user);
// console.log("new_user_route", new_user_route);
// console.log("sign_in_route", sign_in_route);
// console.log("sign_out_route", sign_out_route);

//     return (
//       <nav>
//         <ul>
//           <li>
//             <NavLink to="/">Home</NavLink>
//           </li>
//           {logged_in && (
//             <li>
//               <NavLink to="/apartments">Apartments</NavLink>
//             </li>
//           )}

//           {!logged_in && (
//             <li>
//               <a href={new_user_route}>Register</a>
//             </li>
//           )}
//           {!logged_in && (
//             <li>
//               <a href={sign_in_route}>Log In</a>
//             </li>
//           )}
//           {logged_in && (
//             <li>
//               <NavLink to="/apartmentsnew">Add Apartment</NavLink>
//             </li>
//           )}
//           {logged_in && (
//             <li>
//               <a href={sign_out_route}>Log Out</a>
//             </li>
//           )}
//         </ul>
//       </nav>
//     );
//   }
// }

// export default Header;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";

const Header = (props) => {
  const {
    logged_in,
    current_user,
    new_user_route,
    sign_in_route,
    sign_out_route,
  } = props;

  const pages = [
    ["List of Apartments", "/apartments"],
    ["Add Apartment", "/apartmentsnew"],
  ];
  const settings = [
    ["Register", new_user_route],
    ["Log In", sign_in_route],
  ];
  const logout = ["Logout", sign_out_route];

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" style={{ backgroundColor: "#004526" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
          >
            <NavLink className="Header-link" to="/">
              Home
            </NavLink>
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {logged_in &&
                pages.map((page) => (
                  <MenuItem key={page[0]} onClick={handleCloseNavMenu}>
                    <NavLink to={page[1]}>
                      <Typography textAlign="center">{page[0]}</Typography>
                    </NavLink>
                  </MenuItem>
                ))}
            </Menu>
          </Box>

          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
          >
            <NavLink className="Header-link" to="/">
              Home
            </NavLink>
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {logged_in &&
              pages.map((page) => (
                <Button
                  key={page[0]}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  <NavLink className="Header-link" to={page[1]}>
                    {page[0]}
                  </NavLink>
                </Button>
              ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="apartment interior"
                  src="https://images.unsplash.com/photo-1499916078039-922301b0eb9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2360&q=80"
                />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {!logged_in &&
                settings.map((setting) => (
                  <MenuItem key={setting[0]} onClick={handleCloseUserMenu}>
                    <a className="Header-user" href={setting[1]}>
                      <Typography textAlign="center">{setting[0]}</Typography>
                    </a>
                  </MenuItem>
                ))}
              {logged_in && (
                <MenuItem key={logout[0]}>
                  <a className="Header-user" href={logout[1]}>
                    <Typography textAlign="center">{logout[0]}</Typography>
                  </a>
                </MenuItem>
              )}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
