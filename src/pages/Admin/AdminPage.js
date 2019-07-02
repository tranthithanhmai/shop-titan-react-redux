import React, { Component, Fragment } from 'react';
import Lists from './../../components/Admin/Lists';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actFetchProductsRequest, actDeleteProductRequest, actGoAdmin } from './../../actions/index';
import { Redirect } from 'react-router-dom';
import SliderAdmin from '../../components/Admin/SliderAdmin';

class AdminPage extends Component {
  componentDidMount() {
    this.props.actions.actFetchProductsRequest();
    this.props.actions.actGoAdmin('Admin', '/shopping-cart-reactjs/admin');
  }

  onDelete = (id) => {
    this.props.actions.actDeleteProductRequest(id);
  }

  render() {
    var { products, token } = this.props;
    if (!token) {
      return <Redirect push to="/shopping-cart-reactjs/login" />
    } else {
      return (
        <Fragment>
          <SliderAdmin />
          <Lists products={products} onDelete={this.onDelete} />
        </Fragment>

      );
    }
  }
}

const mapStateToProps = state => {
  return {
    products: state.product,
    token: state.user.token
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({
      actFetchProductsRequest,
      actDeleteProductRequest,
      actGoAdmin
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);