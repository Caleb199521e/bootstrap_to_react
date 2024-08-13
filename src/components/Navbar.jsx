import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active"
            exact
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/about"
            className="nav-link"
            activeClassName="active"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/"
            className="nav-link"
            activeClassName="active"
          >
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/services"
            className="nav-link"
            activeClassName="active"
          >
            Services
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/contact"
            className="nav-link"
            activeClassName="active"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
