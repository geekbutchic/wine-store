import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./Navbar.css";

export default class Navbar extends Component {
  render() {
    return (
      <NavWrapper className="navbar navbar-expand-screen navbar-dark px-sm-5">
        <Link to="/" className="home">
          <h1 className="home">HOME</h1>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/" className="nav-link">
              <h1 className="vino">VINO PRODUCTS</h1>
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <ButtonContainer>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            my cart
          </ButtonContainer>
        </Link>
      </NavWrapper>
    );
  }
}

const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 2.0rem;
border: 0.25rem solid var(--mainYellow);
color: var(--lightBlue);
border-radius: 0.5rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
margin: 0.2rem 0.5rem 0;
transition: all 0.5s ease-in-out;
&:hover {
    background:var(--mainRed)
}
&:focus{
    outline: none;
}
`;

const NavWrapper = styled.nav`
background: var(--mainBlue);
font-size: 1.3rem;
`
