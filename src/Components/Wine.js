import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";
import PropTypes from "prop-types";

export default class Wine extends Component {
  render() {
    const { id, year, title, img, price, region, inCart } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-3 col-lg-4 my-4">
        <div className="card">
          <div
            className="img-container p-3"
            onClick={() => console.log("CLICKED IMG CONTAINER")}
          >
            <Link to="/">
              <img src={img} alt="wine" className="card-img-top" />
            </Link>
            <button
              className="cart-btn"
              disabled={inCart ? true : false}
              onClick={() => {
                console.log("ADDED TO CART");
              }}
            >
              {inCart ? (
                <p className="text-capitalize mb-0" disabled>
                  {" "}
                  in cart
                </p>
              ) : (
                <i className="fas fa-heart" />
              )}
            </button>
          </div>
          {/* Footer Card */}
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">
              {title} / {year} / {region}
            </p>
            <h5 className="text-blue font-italic mb-0">
              <span className="mr-1">€{price}</span>
            </h5>
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

Wine.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    year: PropTypes.number,
    title: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number,
    region: PropTypes.string,
    info: PropTypes.string,
    inCart: PropTypes.bool,
  }).isRequired,
};

const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  &:hover {
    .card {
      border: 0.04rem solid rgba(0, 0, 0, 0.6);
      box-shadow: 2px 2px 5px 0px rgba(0, 0, 0, 0.2);
    }
    .card-footer {
      background: rgba(247, 247, 247);
    }
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
    transition: all 1s linear;
  }
  .cart-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    padding: 0.2rem 0.4rem;
    border: none;
    font-size: 2rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
    transition: all 1s linear;
  }
  .img-container:hover .cart-btn {
    transform: translate(0, 0);
  }
  .cart-btn:hover {
    color: red;
    cursor: pointer;
  }
`;
