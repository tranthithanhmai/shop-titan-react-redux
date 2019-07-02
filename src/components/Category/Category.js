import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { actFetchCategoriesRequest, actGoCategories } from './../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Category extends Component {

  componentDidMount() {
    this.props.actions.actFetchCategoriesRequest();
    this.props.actions.actGoCategories('Categories', '/shopping-cart-reactjs/products/categories');
  }

  render() {
    let { categories } = this.props;
    return (
      <section className="module">
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h2 className="module-title font-alt">Categories</h2>
            </div>
          </div>
          <div className="row">
            {this.showCategories(categories)}
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
          <div className="col-xs-4 col-sm-3 col-md-3 col-lg-2" key={index}>
            <div className="ex-product">
              <img 
                style={{ width: '100px', height: '100px' }} 
                alt={category.name} 
                src={category.image === null ? 'http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/hoodie_4_front.jpg' : category.image.src} 
              />
              <h4 className="shop-item-title font-alt">
                <Link to={`/shopping-cart-reactjs/products/categories/${category.id}`} category={category}>
                  {category.name}
                </Link>
              </h4>
            </div>
          </div>
        );
      });
    }
    return xhtml;
  }
}
const mapStateToProps = state => {
  return {
    categories: state.categories
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    actions: bindActionCreators({
      actFetchCategoriesRequest,
      actGoCategories
    }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);

