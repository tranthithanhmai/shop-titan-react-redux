import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Category from '../../components/Category/Category';
import CategoriesSlider from '../../components/Category/CategoriesSlider';

class CategoryPage extends Component {
  render() {
    let {token} = this.props;
    if(!token) {
      return <Redirect push to="/shopping-cart-reactjs/login" />
    } else {
      return (
        <Fragment>
          <CategoriesSlider />
          <Category />
        </Fragment>
      );
    }
  }
}
const mapStatetoProps = (state) => ({
  token : state.user.token
})

export default connect(mapStatetoProps, null)(CategoryPage);