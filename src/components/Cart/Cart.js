import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actDeleteCartRequest } from './../../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
import PaginationPage from './../Pagination/PaginationPage';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalRecords: "",
      totalPages: "",
      pageLimit: "",
      currentPage: "",
      startIndex: "",
      endIndex: ""
    };
  }

  onChangePage = data => {
    this.setState({
      pageLimit: data.pageLimit,
      totalPages: data.totalPages,
      currentPage: data.page,
      startIndex: data.startIndex,
      endIndex: data.endIndex
    });
  };

  onDeleteItem = (id) => {
    if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
      this.props.actions.actDeleteCartRequest(id);
    }
  }

  render() {
    let { carts } = this.props;
    let {
      pageLimit,
      startIndex,
      endIndex
    } = this.state;
    let rowsPerPage = [];
     //Pagination
   rowsPerPage = carts.slice(startIndex, endIndex + 1);
    return (
      <section className="module">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="module-title font-alt">Orders Management</h1>
            </div>
          </div>
          <hr className="divider-w pt-20" />
          <div className="row">
            <div className="col-sm-12 mb-10">
              <div className="pull-left">
                <h4><strong>List Orders Management</strong></h4>
              </div>
              <div className="pull-right">
                <Link
                  to="/shopping-cart-reactjs/shopping-cart/add"
                  type="button"
                  className="btn btn-info btn-round">
                  Create Order
              </Link>
              </div>
            </div>
            <div className="col-sm-12">
              <table className="table table-striped table-border checkout-table table-responsive">
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Address</th>
                    <th>Phone</th>
                    <th>Postcode</th>
                    <th>State</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.showCarts(rowsPerPage)}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
            <PaginationPage
                  totalRecords={carts.length}
                  pageLimit={pageLimit || 5}
                  initialPage={1}
                  pagesToShow={5}
                  onChangePage={this.onChangePage}
                />
            </div>
          </div>
        </div>
      </section>
    );
  }

  showCarts(carts) {
    let xhtml = null;
    if (carts !== null && carts.length > 0) {
      xhtml = carts.map((cart, index) => {
        return (
          <tr key={index}>
            <td>
              <h5 className="product-title font-alt">{cart.billing.first_name}</h5>
            </td>
            <td>
              <h5 className="product-title font-alt">{cart.billing.last_name}</h5>
            </td>
            <td>
              <h5 className="product-title font-alt">{cart.billing.address_1}</h5>
            </td>
            <td>
              <h5 className="product-title font-alt">{cart.billing.phone}</h5>
            </td>
            <td>
              <h5 className="product-title font-alt">{cart.billing.postcode}</h5>
            </td>
            <td>
              <h5 className="product-title font-alt">{cart.billing.state}</h5>
            </td>
            <td>
              <Link
                to={`/shopping-cart-reactjs/shopping-cart/view/${cart.id}`}
                type="button"
                className="btn btn-success btn-round btn-xs">
                View Cart
              </Link>
              <Link
                to={`/shopping-cart-reactjs/shopping-cart/edit/${cart.id}`}
                style={{ marginLeft: '5px' }}
                type="button"
                className="btn btn-primary btn-round btn-xs">
                Edit
              </Link>
              <button type="button" className="btn btn-danger btn-round btn-xs" style={{ marginLeft: '5px' }}
                onClick={() => this.onDeleteItem(cart.id)}>
                Delete
              </button>
            </td>
          </tr>
        );
      });
    }
    return xhtml;
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      actDeleteCartRequest
    }, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(Cart);