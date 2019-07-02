import React, { Component, Fragment } from 'react';
import ListProductCategory from '../../components/Category/ListProductCategory';
import CategoriesSlider from '../../components/Category/CategoriesSlider';

class ProductListCategoryPage extends Component {
  render() {
    let { match, history } = this.props;
    return (
      <Fragment>
        <CategoriesSlider />
        <ListProductCategory match={match} history={history} />
      </Fragment>

    );
  }
}

export default ProductListCategoryPage;
