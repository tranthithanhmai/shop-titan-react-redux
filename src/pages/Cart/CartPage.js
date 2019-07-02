import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { actFetchCartsRequest, actGoOrder } from './../../actions/index';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';
import Cart from './../../components/Cart/Cart';
import SliderCart from '../../components/Cart/SliderCart';

class CartPage extends Component {
  componentDidMount() {
    this.props.actions.actFetchCartsRequest();
    this.props.actions.actGoOrder('Orders', '/shopping-cart-reactjs/shopping-cart');
  }

  render() {
    var { carts, token } = this.props;
    if (!token) {
      return <Redirect push to="/shopping-cart-reactjs/login" />
    } else {
      return (
        <Fragment>
          <SliderCart />
          <Cart match={this.props.match} carts={carts} onDeleteItem={this.onDeleteItem} />
        </Fragment>
      );
    }
  }
}
const mapStateToProps = state => {
  return {
    carts: state.carts,
    token: state.user.token
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      actFetchCartsRequest,
      actGoOrder
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
