import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Products from './../../components/Product/Products';

class ProductListsPage extends Component {
  render() {
    let {token} = this.props;
    if(!token) {
      return <Redirect push to="/shopping-cart-reactjs/login" />
    } else {
      return (
        <Products />
      );
    }
  }
}

const mapStatetoProps = (state) => ({
		token : state.user.token
})

export default connect(mapStatetoProps, null)(ProductListsPage);