import React, { Component } from "react";
import { wineProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    products: wineProducts,
    detailProduct: detailProduct,
  };
  handleDetail = () => {
    console.log("HELLO FROM DETAIL");
  };
  addToCart = () => {
    console.log("ADD TO CART");
  };
  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
