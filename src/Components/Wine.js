import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../context";

export default class Wine extends Component {
  render() {
    const { id, title, img, price, region, inCart } = this.props.product;
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
            />
            {inCart ? (
              <p className="text-capitalize mb-0" disabled>
                {" "}
                in inCart
              </p>
            ) : (
              <i className="fas fa-cart-plus" />
            )}
          </div>
        </div>
      </ProductWrapper>
    );
  }
}

const ProductWrapper = styled.div``;
