import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ProductItem from './ProductItem';
import { filter, includes, orderBy as funcOrderBy } from 'lodash';
import { actFetchProductsRequest, actGoProducts } from './../../actions/index';
import PaginationPage from '../Pagination/PaginationPage';
import Sort from './Sort';
import Search from './Search';

class Products extends Component {

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
  componentDidMount() {
    this.props.actions.actFetchProductsRequest();
    this.props.actions.actGoProducts('Product', '/shopping-cart-reactjs/product');
  }

  render() {
    let {
      pageLimit,
      startIndex,
      endIndex
    } = this.state;
    let rowsPerPage = [];
    let { strSearch, sort, products } = this.props;
    let { orderBy, orderDir } = sort;
    let itemsOrigin = (products !== null) ? [...products] : [];
    //Search
    products = filter(itemsOrigin, (product) => {
      return includes(product.name.toLowerCase(), strSearch.toLowerCase());
    });

    //Sort
    products = funcOrderBy(products, [orderBy], [orderDir]);

    //Pagination
    rowsPerPage = products.slice(startIndex, endIndex + 1);

    return (
      <Fragment>
        <section className="module bg-dark-30" data-background="./../assets/images/shop/product.jpg" style={{ backgroundImage: 'url(./../assets/images/shop/product.jpg)' }}>
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">Shop Products</h2>
                <div className="module-subtitle font-serif">A wonderful serenity has taken possession of my entire soul, like
                these sweet mornings of spring which I enjoy with my whole heart.</div>
              </div>
            </div>
          </div>
        </section>
        <section className="module-small">
          <div className="container">
            <Sort />
            <Search />
          </div>
        </section>
        <hr className="divider-w" />
        <section className="module-small">
          <div className="container">
            <div className="row multi-columns-row">
              {this.showProducts(rowsPerPage)}
            </div>
            <div className="row">
              <div className="col-sm-12">
                <PaginationPage
                  totalRecords={products.length}
                  pageLimit={pageLimit || 8}
                  initialPage={1}
                  pagesToShow={8}
                  onChangePage={this.onChangePage}
                />
              </div>
            </div>
          </div>
        </section>
      </Fragment>
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

export default connect(mapStateToProps, mapDispatchToProps)(Products);