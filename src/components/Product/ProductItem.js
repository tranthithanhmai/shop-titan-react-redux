// import React, { Component } from 'react';

// class ProductItem extends Component {
//   render() {
//     return (
//       <div className="col-sm-6 col-md-3 col-lg-3">
//         <div className="shop-item">
//           <div className="shop-item-image"><img src="./../assets/images/shop/product-7.jpg" alt="Accessories Pack" />
//             <div className="shop-item-detail"><a className="btn btn-round btn-b">View Product</a></div>
//           </div>
//           <h4 className="shop-item-title font-alt"><a href="#">Accessories Pack</a></h4>£9.00
//         </div>
//       </div>
//     );
//   }

// }

// export default ProductItem;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
  render() {
    let { product } = this.props;
    let scrImg = product.images.length > 0 ? product.images[0].src : "http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg";
    let price = product.price === '' ? 0 : product.price;
    let regularPrice = (product.sale_price !== "") ? <span style={{ textDecoration: 'line-through', color: '#aaa' }}>{product.regular_price}$ </span> : '';
    return (
      <div className="col-sm-6 col-md-3 col-lg-3">
        <div className="shop-item">
          <div className="shop-item-image">
            <Link to={`/shopping-cart-reactjs/product/${product.id}`} target="_blank">
              <img className="card-img-top" src={scrImg} alt="Card Product" style={{ width: '100%', height: '300px' }} />
            </Link>
            <div className="shop-item-detail">
              <Link to={`/shopping-cart-reactjs/product/${product.id}`} target="_blank" product={product} className="btn btn-round btn-b">
                View Product
            </Link>
            </div>
          </div>
          <h4 className="shop-item-title font-alt">
            <Link to={`/shopping-cart-reactjs/product/${product.id}`} target="_blank" product={product} className="card-title">
              {product.name}
            </Link>
          </h4>
          <p className="card-text">{regularPrice} {price}$</p>
        </div>
      </div>
    );
  }
}

export default ProductItem;
