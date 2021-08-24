import React, { Component } from "react";
import { wineProducts, detailProduct } from "./data";

const ProductContext = React.createContext();
//Provider
//Consumer

class ProductProvider extends Component {
  state = {
    //SET TO EMPTY ARRAY DUE TO NESTED OBJECT
    products: [],
    detailProduct: detailProduct,
    cart: [],
    modalOpen: false,
    modalProduct: detailProduct,
    cartSubTotal: 0,
    carTax: 0,
    carTotal: 0,
  };
  componentDidMount() {
    this.setProduct();
  }
  setProduct = () => {
    let tempProducts = [];
    wineProducts.forEach((item) => {
      //COPY ITEMS
      const singleItem = { ...item };
      tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
      return { products: tempProducts };
    });
  };
  getItem = (id) => {
    const product = this.state.products.find((item) => item.id === id);
    return product;
  };
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  };
  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    //ARRAY WITH METHOD -> PASS GET ITEM -> TO GET INDEX OF ITEM IN ARR
    const index = tempProducts.indexOf(this.getItem(id));
    //INDEX HOLDS SPECIFIC ITEM WITHIN ARR
    const product = tempProducts[index];
    //CHANGE VALUE OF ADD TO CART
    product.inCart = true;
    //CHANGE COUNT
    product.count = 1;
    const price = product.price;
    //FINAL COUNT
    product.total = price;

    this.setState(//SET STATE WITH NEW COUNT - DISABLE IN CART IF CLICKED
      () => {
        return { products: tempProducts, cart: [...this.state.cart, product] };
      },
      () => {
        console.log(this.state);
      }
    );
  };

  openModal = (id) => {
    //UTILITY METHOD GET ITEM
    //RUNS EVERY TIME MODAL OPEN IS CLICKED
    const product = this.getItem(id);
    this.setState(() => {
      return { modalProduct: product, modalOpen: true };
    });
  };

  closedModal = (id) => {
    //RUN CLOSE MODAL
    this.setState(() => {
        return {modalOpen: false}
    });
  };

  increment = (id) => {
    console.log('THIS IS INCREMENT');
  }

  decrement = (id) => {
      console.log('THIS IS DECREMENT');
  }

  render() {
    return (
      <ProductContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          //USED IN WINE.JS + WINE DETAILS.JS = OPEN MODAL
          openModal: this.openModal,
          closeModal: this.closedModal,
        }}
      >
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
