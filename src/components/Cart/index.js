//Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
//Internals
import './index.css';

class CartProducts extends Component {
  static propTypes = {
    addItemToCart: PropTypes.func.isRequired,
  };

  render() {
    return(
      <div>
        <h1 className="cart-title">Your cart is empty.</h1>
        <div className="items">
          {map(this.props.cartProducts, (product) => {
            <h1>{product.name}</h1>
          })}
        </div>
      </div>
    );
  }
}

export default CartProducts;
