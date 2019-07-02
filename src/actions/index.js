import * as types from './../constants/ActionType';
import * as callApi from './../services/apiCaller';
import { LoginStore } from './login';

export const actLoginRequest = (data) => {
  return dispatch => {
    return callApi.NoAuth('wordpress-demo/wp-json/jwt-auth/v1/token', 'POST', data).then(res => {
      const { token } = res.data;
      LoginStore.setData('token', token);
      dispatch(actLogin(res.data));
      return token;
    }).catch(function (error) {
      alert('Username or Password incorrect');
      console.log(error);
    });
  }
}
export const actLogin = (data) => {
  return {
    type: types.USER_LOGIN,
    data
  }
}

//LOGOUT
export const actLogout = () => {
  return {
    type: types.USER_LOGOUT
  }
}

//SEARCH
export const actSearch = (strSearch) => {
  return {
    type: types.CHANGE_SEARCH,
    strSearch
  }
}

//SORT
export const actSort = (orderBy, orderDir) => {
  return {
    type: types.SORT_ITEM,
    orderBy,
    orderDir
  }
}

//ADD PRODUCT
export const actAddProductRequest = (product) => {
  return dispatch => {
    return callApi.call('wordpress-demo/wp-json/wc/v3/products', 'POST', product).then(res => {
      dispatch(actAddProduct(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actAddProduct = (product) => {
  return {
    type: types.ADD_PRODUCT,
    product
  }
}

//ADD IMAGES
export const actAddImagesRequest = (uploadImages) => {
  return dispatch => {
    return callApi.call('wordpress-demo/wp-json/wp/v2/media', 'POST', uploadImages).then(res => {
      dispatch(actAddImages(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actAddImages = (uploadImages) => {
  return {
    type: types.ADD_IMAGES,
    uploadImages
  }
}

//DELETE PRODUCT
export const actDeleteProductRequest = (id) => {
  return dispatch => {
    return callApi.call(`wordpress-demo/wp-json/wc/v3/products/${id}`, 'DELETE', null).then(res => {
      dispatch(actDeleteProduct(id));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actDeleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCT,
    id
  }
}
//SHOW PRODUCT

export const actFetchProductsRequest = () => {
  return dispatch => {
    return callApi.call('wordpress-demo/wp-json/wc/v3/products', 'GET', null).then(res => {
      dispatch(actFetchProducts(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  };
}

export const actFetchProducts = (products) => {
  return {
    type: types.FETCH_PRODUCTS,
    products
  }
}

//EDIT PRODUCT

export const actGetProductRequest = (id) => {
  return dispatch => {
    return callApi.call(`wordpress-demo/wp-json/wc/v3/products/${id}`, 'GET', null).then(res => {
      dispatch(actGetProduct(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actGetProduct = (product) => {
  return {
    type: types.EDIT_PRODUCT,
    product
  }
}

export const actUpdateProductRequest = (product) => {
  return async dispatch => {
    try {
      const res = await callApi.call(`wordpress-demo/wp-json/wc/v3/products/${product.id}`, 'PUT', product);
      dispatch(actUpdateProduct(res.data));
    }
    catch (error) {
      console.log(error.message);
    }
  }
}

export const actUpdateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product
  }
}

//SHOW CATEGORIES

export const actFetchCategoriesRequest = () => {
  return dispatch => {
    return callApi.call('wordpress-demo/wp-json/wc/v3/products/categories', 'GET', null).then(res => {
      dispatch(actFetchCategories(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  };
}

export const actFetchCategories = (categories) => {
  return {
    type: types.FETCH_CATEGORIES,
    categories
  }
}
//ADD CATEGORIES
export const actAddCategoryRequest = (category) => {
  return dispatch => {
    return callApi.call('wordpress-demo/wp-json/wc/v3/products/categories', 'POST', category).then(res => {
      dispatch(actAddCategory(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actAddCategory = (category) => {
  return {
    type: types.ADD_CATEGORY,
    category
  }
}

//DELETE CATEGORY
export const actDeleteCategoryRequest = (id) => {
  return dispatch => {
    return callApi.call(`wordpress-demo/wp-json/wc/v3/products/categories/${id}`, 'DELETE', null).then(res => {
      dispatch(actDeleteCategory(id));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actDeleteCategory = (id) => {
  return {
    type: types.DELETE_CATEGORY,
    id
  }
}

//EDIT CATEGORY

export const actGetCategoryRequest = (id) => {
  return dispatch => {
    return callApi.call(`wordpress-demo/wp-json/wc/v3/products/categories/${id}`, 'GET', null).then(res => {
      dispatch(actGetCategory(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actGetCategory = (category) => {
  return {
    type: types.EDIT_CATEGORY,
    category
  }
}

export const actUpdateCategoryRequest = (category) => {
  return async dispatch => {
    try {
      const res = await callApi.call(`wordpress-demo/wp-json/wc/v3/products/categories/${category.id}`, 'PUT', category);
      dispatch(actUpdateCategory(res.data));
    }
    catch (error) {
      console.log(error.message);
    }
  }
}

export const actUpdateCategory = (category) => {
  return {
    type: types.UPDATE_CATEGORY,
    category
  }
}

//SHOW CARTS

export const actFetchCartsRequest = () => {
  return dispatch => {
    return callApi.call('wordpress-demo/wp-json/wc/v3/orders', 'GET', null).then(res => {
      dispatch(actFetchCarts(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  };
}

export const actFetchCarts = (carts) => {
  return {
    type: types.FETCH_CART,
    carts
  }
}

//DELETE CARTS
export const actDeleteCartRequest = (id) => {
  return dispatch => {
    return callApi.call(`wordpress-demo/wp-json/wc/v3/orders/${id}`, 'DELETE', null).then(res => {
      dispatch(actDeleteCart(id));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actDeleteCart = (id) => {
  return {
    type: types.DELETE_CART,
    id
  }
}

//ADD CART
export const actAddCartRequest = (cart) => {
  return dispatch => {
    return callApi.call('wordpress-demo/wp-json/wc/v3/orders', 'POST', cart).then(res => {
      dispatch(actAddCart(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actAddCart = (cart) => {
  return {
    type: types.ADD_CART,
    cart
  }
}

//EDIT CART

export const actGetCartRequest = (id) => {
  return dispatch => {
    return callApi.call(`wordpress-demo/wp-json/wc/v3/orders/${id}`, 'GET', null).then(res => {
      dispatch(actGetCart(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actGetCart = (cart) => {
  return {
    type: types.EDIT_CART,
    cart
  }
}

export const actUpdateCartRequest = (cart) => {
  return async dispatch => {
    return callApi.call(`wordpress-demo/wp-json/wc/v3/orders/${cart.id}`, 'PUT', cart).then(res => {
      dispatch(actGetCart(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  }
}

export const actUpdateCart = (cart) => {
  return {
    type: types.UPDATE_CART,
    cart
  }
}

//VIEW CARTS

export const actViewCartsRequest = (id) => {
  return dispatch => {
    return callApi.call(`wordpress-demo/wp-json/wc/v3/orders/${id}`, 'GET', null).then(res => {
      dispatch(actViewCarts(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  };
}

export const actViewCarts = (cart) => {
  return {
    type: types.VIEW_CART,
    cart
  }
}

//VIEW CATEGORY

export const actViewCategoryRequest = (id) => {
  return dispatch => {
    return callApi.call(`wordpress-demo/wp-json/wc/v3/products/categories/${id}`, 'GET', null).then(res => {
      dispatch(actViewCarts(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  };
}

export const actViewCategory = (categories) => {
  return {
    type: types.VIEW_CATEGORY,
    categories
  }
}

//VIEW RELATED PRODUCT

export const actViewRelatedProductRequest = (id) => {
  return dispatch => {
    return callApi.call(`wordpress-demo/wp-json/wc/v3/products?include=${id}`, 'GET', null).then(res => {
      dispatch(actViewRelatedProduct(res.data));
    }).catch(error => {
      console.log(error.message);
    });
  };
}

export const actViewRelatedProduct = (relatedProduct) => {
  return {
    type: types.VIEW_RELATED_PRODUCT,
    relatedProduct
  }
}

//breadcrumb

export const actGoHome = () => {
	return {
    type : types.GO_HOME
	}
}

export const actGoProducts = (name, to) => {
	return {
		type : types.GO_PRODUCT,
		name, 
		to
	}
}

export const actGoProductItem = (name, to) => {
	return {
		type : types.GO_PRODUCT_ITEM,
		name, 
		to
	}
}

export const actGoCategories = (name, to) => {
	return {
		type : types.GO_CATEGORY,
		name, 
		to
	}
}

export const actGoCategoryItem = (name, to) => {
	return {
		type : types.GO_CATEGORY_ITEM,
		name, 
		to
	}
}

export const actGoAdmin = (name, to) => {
	return {
		type : types.GO_ADMIN,
		name, 
		to
	}
}

export const actGoAdminItem = (name, to) => {
	return {
		type : types.GO_ADMIN_ITEM,
		name, 
		to
	}
}

export const actGoOrder = (name, to) => {
	return {
		type : types.GO_ORDER,
		name, 
		to
	}
}

export const actGoOrderItem = (name, to) => {
	return {
		type : types.GO_ORDER_ITEM,
		name, 
		to
	}
}

export const actGoLogin = (name, to) => {
	return {
		type : types.GO_LOGIN,
		name, 
		to
	}
}

export const actGoLogout = (name, to) => {
	return {
		type : types.GO_LOGOUT,
		name, 
		to
	}
}
