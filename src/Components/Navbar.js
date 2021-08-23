import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-xl  bg-primary navbar-dark px-sm-5">
          <Link to="/">
              <h1 className="home">Home</h1>
          </Link>
          <ul className="navbar-nav align-items-center">
              <li className="nav-item ml-5">
                  <Link to="/" className="nav-link">
                      <h1>Vino Products</h1>
                  </Link>
              </li>
          </ul>
          <Link to="/cart" className="ml-auto">
              <button>
                  <i className="fas fa-cart-plus"/>
                  My Cart
              </button>
          </Link>
      </nav>
    );
  }
}
