import React, { Component } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
import { ButtonContainer1, ButtonContainer2 } from "./Button";

export default class WineDetails extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {id, title, img, year, region, price, info, acclaim, specs, inCart } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                  <h1>Winemaker Notes</h1>
                  <div className="row">
                    <div className="col-10 mx-auto col-md-6 my-3">
                      <img src={img} className="img-fluid" alt="product"/>
                    </div>
                    <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                      <h1>{title} {year}</h1>
                      <h2 className="mt-4">{region} €{price}</h2>
                      <h4 className="text-capitalize font-weight-bold mt-3 mb-0">WINE NOTES:</h4>
                      <p className="text-muted lead mt-3">
                        {info}
                      </p>
                      <p className="text-muted lead mt-3">
                        {acclaim}
                      </p>
                      <p className="text-muted lead mt-3">
                        {specs}
                      </p>
                      <div className="">
                        <Link to="/">
                          <ButtonContainer1>
                            Back To Product
                          </ButtonContainer1>
                        </Link>
                        <ButtonContainer2
                        disabled={inCart?true:false }
                        onClick={() => {
                          value.addToCart(id)
                        }}   
                        >
                          {inCart? "inCart" : "add to cart"}
                        </ButtonContainer2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        }}
      </ProductConsumer>
    );
  }
}
