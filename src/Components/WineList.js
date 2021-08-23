import React, { Component } from "react";
import Wine from "./Wine";
import Title from "./Title";
import { ProductConsumer } from "../context";

export default class WineList extends Component {
  render() {
    // console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Selezione" title="Di Vini" />
            <div className="row">
              <ProductConsumer>
                {(value) => {
                  return value.products.map((product) => {
                    return <Wine key={product.id} product={product} />;
                  });
                }}
              </ProductConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
