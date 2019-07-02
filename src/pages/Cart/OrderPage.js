import React, { Component, Fragment } from 'react';
import Order from '../../components/Cart/Order';
import SliderCart from '../../components/Cart/SliderCart';

class OrderPage extends Component {
  render() {
    return (
      <Fragment>
        <SliderCart />
        <Order match={this.props.match} history={this.props.history} />
      </Fragment>
    );
  }
}

export default OrderPage;
