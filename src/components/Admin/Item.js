import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Item extends Component {
  onDelete = (id) => {
    if (confirm('Bạn chắc chắn muốn xóa ?')) { //eslint-disable-line
      this.props.onDelete(id);
    }
  }
  render() {
    let { item } = this.props;
    let price = (item.price !== '') ? item.price : 0;
    let srcImg = (item.images && item.images.length) > 0 ? item.images[0].src : "http://192.168.1.198/wordpress-demo/wp-content/uploads/2019/05/poster_4_up.jpg";

    return (
      <tr className="tr-img">
        <td><img src={srcImg} alt={item.name} className="img-fluid z-depth-0" style={{ width: '100px' }} /></td>
        <td>
          <h5 className="product-title font-alt"><strong>{item.name}</strong></h5>
        </td>
        <td>
          <h5 className="product-title font-alt">{price}$</h5>
        </td>
        <td>
          <Link
            to={`/shopping-cart-reactjs/admin/edit/${item.id}`}
            className="btn btn-primary btn-round btn-xs"
            style={{ marginRight: '5px' }}
            id={item.id}
          >
            Edit
          </Link>

          <button
            type="button"
            className="btn btn-danger btn-round btn-xs"
            data-original-title="Remove item"
            onClick={() => this.onDelete(item.id)}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default Item;
