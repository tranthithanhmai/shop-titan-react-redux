import React, { Component } from 'react';
import PaginationPage from '../Pagination/PaginationPage';
import { connect } from 'react-redux';
import {
  actFetchCategoriesRequest
} from './../../actions/index';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

class ListCategories extends Component {
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

  componentDidMount() {
    this.props.actions.actFetchCategoriesRequest();
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
    let { categories } = this.props;
    let rowsPerPage = [];
    //Pagination
    rowsPerPage = categories.slice(startIndex, endIndex + 1);
    return (
      <section className="mt-50 mb-50">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 text-center">
              <h1 className="module-title font-alt">Categories Management</h1>
            </div>
          </div>
          <hr className="divider-w pt-20" />
          <div className="row">
            <div className="col-sm-12 mb-10">
              <div className="pull-left">
                <h4><strong>List Categories Management</strong></h4>
              </div>
              <div className="pull-right">
                <Link
                  to="/shopping-cart-reactjs/admin/add-category"
                  type="button"
                  style={{ marginRight: '10px' }}
                  className="btn btn-info btn-round">
                  Create Category
              </Link>
              </div>
            </div>
            <div className="col-sm-12">
              <table className="table table-striped table-border checkout-table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Slug</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {this.showCategories(rowsPerPage)}
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <PaginationPage
                totalRecords={categories.length}
                pageLimit={pageLimit || 5}
                initialPage={1}
                pagesToShow={5}
                onChangePage={this.onChangePage}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  showCategories(categories) {
    let xhtml = null;
    if (categories !== null && categories.length > 0) {
      xhtml = categories.map((category, index) => {
        return (
          <tr key={index}>
            <td>
              <h5 className="product-title font-alt">{category.name}</h5>
            </td>
            <td>
              <h5 className="product-title font-alt">{category.slug}</h5>
            </td>
            <td>
              <Link
                to={`/shopping-cart-reactjs/admin/edit-category/${category.id}`}
                className="btn btn-primary btn-round btn-xs"
                style={{ marginRight: '5px' }}
                id={category.id}
              >
                Edit
              </Link>
            </td>
          </tr>
        );
      });
    }
    return xhtml;
  }
}

const mapStateToProps = state => {
  return {
    categories: state.categories
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      actFetchCategoriesRequest,
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ListCategories);