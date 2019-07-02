import React, { Component } from 'react';

class TabProductItemDetail extends Component {
  render() {
    let { product } = this.props;
    let description = "";
    if (product.id) {
      description = product.description.replace(new RegExp(/<.*?>/, 'g'), '');
    }
    return (
      <div className="row mt-70">
        <div className="col-sm-12">
          <ul className="nav nav-tabs font-alt" role="tablist">
            <li className="active"><a href="#description" data-toggle="tab"><span className="icon-tools-2" />Description</a></li>
            <li><a href="#reviews" data-toggle="tab"><span className="icon-tools-2" />Reviews</a></li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane active" id="description">
              <p>{description}</p>
            </div>
            <div className="tab-pane" id="reviews">
              <p>There are no reviews yet.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TabProductItemDetail;
