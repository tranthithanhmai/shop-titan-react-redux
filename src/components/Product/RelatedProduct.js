import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actViewRelatedProductRequest } from './../../actions/index';
import ProductItem from '././/ProductItem';

class RelatedProduct extends Component {
  componentDidUpdate(){
    let { product } = this.props;
    if(product) {
      let arrId = product.join(',');
      this.props.actions.actViewRelatedProductRequest(arrId);
    }
  }
  render() {
    let { relatedProduct } = this.props;
    return (
      <section className="module-small">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <h2 className="module-title font-alt">Related Products</h2>
          </div>
        </div>
        <div className="row multi-columns-row">
        {this.showRelatedProducts(relatedProduct)}
        </div>
      </div>
    </section>
    );
  }

  showRelatedProducts(relatedProduct) {
    let xhtml = null;
    if (relatedProduct !== null && relatedProduct.length > 0) {
      xhtml = relatedProduct.map((product, index) => {
        return (
          <ProductItem key={index} product={product} />
        );
      });
    }
    return xhtml;
  }
}
const mapStateToProps = state => {
  return {
    product: state.itemEditing.related_ids,
    relatedProduct: state.product
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({
      actViewRelatedProductRequest
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RelatedProduct);
