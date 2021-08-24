import React, { Component } from "react";
import { wineProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {//SET TO EMPTY ARRAY DUE TO NESTED OBJECT
    products: [],
    detailProduct: detailProduct,
  };
  componentDidMount () {
    this.setProduct();
  }
  setProduct = () => { 
      let tempProducts = [];
      wineProducts.forEach(item => {//COPY ITEMS
          const singleItem = {...item};
          tempProducts = [...tempProducts, singleItem];
      })
      this.setState(() => {
          return {products: tempProducts}
      })
  }
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
