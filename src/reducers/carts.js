import * as types from '../constants/ActionType';
var initialState = [];

var findIndex = (carts, id) => {
  var result = -1;
  carts.forEach((cart, index) => {
    if (cart.id === id) {
      result = index;
    }
  });
  return result;
}

const carts = (state = initialState, action) => {
  var index = -1;
  var { id, cart } = action;

  switch (action.type) {
    case types.FETCH_CART:
      state = action.carts;
      return [...state];
    case types.DELETE_CART:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];
    case types.ADD_CART:
      state.push(action.cart);
      return [...state];
    case types.UPDATE_CART:
      index = findIndex(state, cart.id);
      state[index] = carts;
      return [...state];
    default: return [...state];
  }
};

export default carts;