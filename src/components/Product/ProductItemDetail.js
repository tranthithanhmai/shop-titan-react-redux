import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TabProductItemDetail from './TabProductItemDetail';
import RelatedProduct from './RelatedProduct';

class ProductItemDetail extends Component {

  render() {
    let { product } = this.props;
    let regularPrice = '';
    let images = [];
    let categories = [];
    let description = "";
    if (product.id) {
      images = product.images;
      categories = product.categories;
      description = product.description.replace(new RegExp(/<.*?>/, 'g'), '');
    }
    return (
      <div>
        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 mb-sm-40">
                <img 
                  alt="Single Product" 
                  src={images.length > 0 ? images[0].src : 'http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/Poster_4_flat.jpg'} 
                />
                <ul className="product-gallery">
                  {this.showImages(images)}
                </ul>
              </div>
              <div className="col-sm-6">
                <div className="row">
                  <div className="col-sm-12">
                    <h1 className="product-title font-alt">{product.name}</h1>
                  </div>
                </div>
                <div className="row mb-20">
                  <div className="col-sm-12">
                    <div className="price font-alt"><span className="amount">{regularPrice}  {product.price === '' ? 0 : product.price} $</span></div>
                  </div>
                </div>
                <div className="row mb-20">
                  <div className="col-sm-12">
                    <div className="description">
                      <p>Description: {description}</p>
                      <p>
                        SKU:{product.sku}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="row mb-20">
                  <div className="col-sm-12">
                    <div className="product_meta">Categories: {this.showCategory(categories)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <TabProductItemDetail product={product} />
          </div>
        </section>
        <hr className="divider-w" />
        <RelatedProduct />
      </div>
    );

  }
  showCategory(categories) {
    let xhtml = null;
    if (categories !== undefined) {
      if (categories.length > 0) {
        xhtml = categories.map((category, index) => {
          return (
            <Link to={`/shopping-cart-reactjs/products/categories/${category.id}`} key={index} style={{ marginRight: '10px' }} category={category.name}>{category.name}</Link>
          );
        });
      }
    }
    return xhtml;
  };
  showImages(images) {
    let xhtml = null;
    if (images !== undefined) {
      if (images.length > 0) {
        xhtml = images.map((image, index) => {
          return (
            <li key={index}>
              <img src={image.src} alt={image.name} style={{ width: '100%' }} />
            </li>
          );
        });
      } else {

        images = [
          {
            alt: "",
            date_created: "2019-05-16T03:22:32",
            date_created_gmt: "2019-05-16T03:22:32",
            date_modified: "2019-05-16T03:22:32",
            date_modified_gmt: "2019-05-16T03:22:32",
            id: 62,
            name: "hoodie_3_front.jpg",
            src: "http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg"
          },
          {
            alt: "",
            date_created: "2019-05-16T03:22:33",
            date_created_gmt: "2019-05-16T03:22:33",
            date_modified: "2019-05-16T03:22:33",
            date_modified_gmt: "2019-05-16T03:22:33",
            id: 63,
            name: "hoodie_3_back.jpg",
            src: "http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/Poster_4_flat.jpg"
          }
        ];
        xhtml = images.map((image, index) => {
          return (
            <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={index}>
              <img src={image.src} alt={image.name} style={{ width: '100%' }} />
            </div>
          );
        });
      }

    }
    return xhtml;
  };
}

export default ProductItemDetail;