import React, { Component } from 'react';

class SliderCart extends Component {
  render() {
    return (
      <section className="module bg-dark-30" data-background= "./../../../assets/images/shop/orders.jpg" style={{ backgroundImage: 'url(./../../../assets/images/shop/orders.jpg)'}}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1 className="module-title font-alt mb-0">ORDERS</h1>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default SliderCart;
