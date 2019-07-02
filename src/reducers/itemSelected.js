import * as types from './../constants/ActionType';
const defaultState = {
  name: '',
  id: '',
  level: 0
}

const itemSelected = (state = defaultState, action) => {
  switch (action.type) {
    case types.ITEM_SELECTED:
      return action.item;
    case types.ITEM_UNSELECT:
      return defaultState;
    default:
      return state;
  }
}

export default itemSelected;