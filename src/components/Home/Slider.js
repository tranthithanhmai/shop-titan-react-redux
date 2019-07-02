import React, { Component } from 'react';

class Slider extends Component {
  render() {
    return (
      <section className="module bg-dark-30" data-background="./../../../assets/images/shop/slider3.jpg" style={{ backgroundImage: 'url(./../../../assets/images/shop/slider3.jpg)' }}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="titan-caption">
                <div className="caption-content">
                  <div className="font-alt mb-30 titan-title-size-1">This is Titan</div>
                  <div className="font-alt mb-30 titan-title-size-4"> Summer 2019</div>
                  <div className="font-alt mb-40 titan-title-size-1">Your online fashion destination</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Slider;
