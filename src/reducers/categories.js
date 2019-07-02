import * as types from '../constants/ActionType';
var initialState = [];
var findIndex = (categories, id) => {
  var result = -1;
  categories.forEach((category, index) => {
    if (category.id === id) {
      result = index;
    }
  });
  return result;
}
const categories = (state = initialState, action) => {
  var index = -1;
  var { id, category } = action;
  switch (action.type) {
    case types.FETCH_CATEGORIES:
      state = action.categories;
      return [...state];
    case types.ADD_CATEGORY:
      state.push(category);
      return [...state];
    case types.DELETE_CATEGORY:
      index = findIndex(state, id);
      state.splice(index, 1);
      return [...state];
    case types.UPDATE_CATEGORY:
      index = findIndex(state, category.id);
      state[index] = categories;
      return [...state];
    default: return [...state];
  }
};

export default categories;