import React, { Component, Fragment } from 'react';
import Item from './Item';
import ListCategories from './ListCategories';
import PaginationPage from './../Pagination/PaginationPage';
import Add from './Add';

class Lists extends Component {
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

  render() {
    let {
      pageLimit,
      startIndex,
      endIndex
    } = this.state;
    let rowsPerPage = [];
    let { products } = this.props;
    //Pagination
    rowsPerPage = products.slice(startIndex, endIndex + 1);
    return (
      <Fragment>
        <section className="mt-70 mb-30">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h1 className="module-title font-alt">Products Management</h1>
              </div>
            </div>
            <hr className="divider-w pt-20" />
            <div className="row">
              <Add />
              <div className="col-sm-12">
                <table className="table table-striped table-border checkout-table">
                  <thead>
                    <tr className="tr-img">
                      <th>Images</th>
                      <th>Products</th>
                      <th>Price</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.showProducts(rowsPerPage)}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12">
                <PaginationPage
                  totalRecords={products.length}
                  pageLimit={pageLimit || 5}
                  initialPage={1}
                  pagesToShow={5}
                  onChangePage={this.onChangePage}
                />
              </div>
            </div>
          </div>
        </section>
        <ListCategories />
      </Fragment>
    );
  }

  showProducts(products) {
    let xhtml = null;
    if (products !== null && products.length > 0) {
      xhtml = products.map((product, index) => {
        return (
          <Item key={index}
            item={product}
            onDelete={this.props.onDelete}
            index={index}
          />
        );
      });
    }
    return xhtml;
  }
}

export default Lists;