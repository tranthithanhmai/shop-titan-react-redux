import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductItem from './ProductItem';
import { filter, includes, orderBy as funcOrderBy } from 'lodash';
import { actFetchProductsRequest, actGoProducts } from './../../actions/index';

class ProductLists extends Component {
  componentDidMount() {
    this.props.actions.actFetchProductsRequest();
    this.props.actions.actGoProducts('Product', '/shopping-cart-reactjs/product');
  }

  render() {
    let { strSearch, sort, products } = this.props;
    let { orderBy, orderDir } = sort;
    let itemsOrigin = (products !== null) ? [...products] : [];
    //Search
    products = filter(itemsOrigin, (product) => {
      return includes(product.name.toLowerCase(), strSearch.toLowerCase());
    });

    //Sort
    products = funcOrderBy(products, [orderBy], [orderDir]);

    return (
      <section className="module-small">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h2 className="module-title font-alt">Products</h2>
            </div>
          </div>
          <div className="row multi-columns-row">
            {this.showProducts(products)}
          </div>
        </div>
      </section>
    );
  }

  showProducts = (products) => {
    let xhtml = null;
    if (products !== null && products.length > 0) {
      xhtml = products.map((product, index) => {
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
    strSearch: state.strSearch,
    sort: state.sort,
    products: state.product
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      actFetchProductsRequest,
      actGoProducts
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductLists);