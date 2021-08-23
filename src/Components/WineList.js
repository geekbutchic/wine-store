import React, { Component } from "react";
import Wine from "./Wine";
import Title from './Title';
import { wineProducts, detailProduct } from '../data'

export default class WineList extends Component {
  state={
    products: wineProducts,
  }
  render() {
    console.log(this.state.products);
    return (
      <React.Fragment>
        <div className="py-5">
        <div className="container">
        <Title name="Selezione" title="Di Vini"/>
          <div className="row">
          </div>
        </div>
        </div>
      </React.Fragment>
    );
  }
}
