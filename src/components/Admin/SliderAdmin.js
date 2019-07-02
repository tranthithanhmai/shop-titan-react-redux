import React, { Component } from 'react';

class SliderAdmin extends Component {
  render() {
    return (
      <section className="module bg-dark-30" data-background= "./../../../assets/images/shop/admin.jfif" style={{ backgroundImage: 'url(./../../../assets/images/shop/admin.jfif)'}}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h1 className="module-title font-alt mb-0">ADMIN</h1>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default SliderAdmin;
