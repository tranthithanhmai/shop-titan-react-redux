import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Add extends Component {
  render() {
    return (
      <div className="col-sm-12 mb-10">
        <div className="pull-left">
          <h4><strong>List Products Management</strong></h4>
        </div>
        <div className="pull-right">
          <Link
            to="/shopping-cart-reactjs/admin/add"
            type="button"
            className="btn btn-info btn-round">
            Create Product
          </Link>
        </div>
      </div>
    );
  }
}

export default Add;