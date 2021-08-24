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
  getItem = (id) => {
      const product = this.state.products.find(item => item.id === id);
      return product;
  }
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {  
        return {detailProduct:product};
    })
  };
  addToCart = (id) => {
    console.log(`HELLO FROM ADD TO CART: ID IS ${id}`);
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
