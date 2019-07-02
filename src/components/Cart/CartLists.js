import React, { Component } from 'react';

class CartLists extends Component {
  onClickBack = () => {
    let { history } = this.props;
    history.goBack();
  }

  render() {
    let { cart } = this.props;
    return (
      <section className="module">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h1 className="module-title font-alt">View Cart</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 mb-10">
              <div className="pull-left">
                <h4><strong>List Products of Key Order: {cart.order_key}</strong></h4>
              </div>
              <div className="pull-right">
                <button className="btn btn-light" onClick={this.onClickBack}>Back</button>
              </div>
            </div>
          </div>
          <hr className="divider-w pt-20" />
          <div className="row">
            <div className="col-sm-12">
              <table className="table table-striped table-border checkout-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  {this.showCart(cart)}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={3}>
                      <h5 className="product-title font-alt">Subtotal</h5>
                    </td>
                    <td>
                      <h5 className="product-title font-alt"><strong>{cart.total}</strong></h5>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    );
  }

  showCart(cart) {
    let xhtml = null;
    if (cart !== null && cart.line_items) {
      let items = cart.line_items
      if (items !== null && items.length > 0) {
        xhtml = items.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <h5 className="product-title font-alt">{item.name}</h5>
              </td>
              <td>
                <h5 className="product-title font-alt">{item.price}</h5>
              </td>
              <td>
                <h5 className="product-title font-alt">{item.quantity}</h5>
              </td>
              <td>
                <h5 className="product-title font-alt">{item.subtotal}</h5>
              </td>
            </tr>
          );
        });
      }
    }
    return xhtml;
  }
}
export default CartLists;
