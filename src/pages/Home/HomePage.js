import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Video from './../../components/Home/Video';
import ProductLists from '../../components/Product/ProductLists';
import Category from '../../components/Category/Category';
import Slider from '../../components/Home/Slider';

class HomePage extends Component {
  render() {
    let { token } = this.props;
    if (!token) {
      return <Redirect push to="/shopping-cart-reactjs/login" />
    } else {
      return (
        <Fragment>
          <Slider />
          <ProductLists />
          <Video />
          <Category />
        </Fragment>
      );
    }
  }
}

const mapStatetoProps = (state) => ({
  token: state.user.token
})

export default connect(mapStatetoProps, null)(HomePage);
