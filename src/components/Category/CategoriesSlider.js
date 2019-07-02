import React, { Component } from 'react';

class CategoriesSlider extends Component {
  render() {
    return (
      <section className="module bg-dark-30" data-background="./../../../assets/images/shop/slider1.jpg" style={{ backgroundImage: 'url(./../../../assets/images/shop/slider1.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h2 className="module-title font-alt">Shop Categories</h2>
              <div className="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like
              these sweet mornings of spring which I enjoy with my whole heart.</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CategoriesSlider;
