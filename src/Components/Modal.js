import React, { Component } from "react";
import styled from "styled-components";
import { ProductConsumer } from "../context";
import { ButtonContainer1, ButtonContainer2 } from "./Button";
import { Link } from "react-router-dom";

export default class Modal extends Component {
  render() {
    return (
      <ProductConsumer>
        {(value) => {
          //CONTEXT.JS S0ME MODAL PROPERTIES EXIST
          const { modalOpen, closeModal } = value;
          const { img, title, price } = value.modalProduct;
          if (!modalOpen) {
            return null;
          } else {
            return (
              <ModalContainer>
                <div className="container">
                  <div className="row">
                    <div
                      id="modal"
                      className="column-8 mx-auto col-md-6 col-lg-4 text-center text-capitalize p-5"
                    >
                      <h4>{title}: added to cart!</h4>
                      <img src={img} className="img-fluid" alt="product" />
                      <h4>{title}</h4>
                      <h5 className="">price : €{price}</h5>
                      <Link to="/">
                        <ButtonContainer1 onClick={() => closeModal()}>
                          back to store
                        </ButtonContainer1>
                      </Link>
                      <Link to="/cart">
                        <ButtonContainer2 onClick={() => closeModal()}>
                          proceed to cart
                        </ButtonContainer2>
                      </Link>
                    </div>
                  </div>
                </div>
              </ModalContainer>
            );
          }
        }}
      </ProductConsumer>
    );
  }
}

//STYLED COMPONENTS
//0 TAKES UP WHOLE SCREEN
const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  #modal {
    background: var(--mainWhite);
  }
`;
