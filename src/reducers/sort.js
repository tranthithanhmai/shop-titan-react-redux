import * as types from './../constants/ActionType';
const defaultState = {
  orderBy: 'price',
  orderDir: 'desc'
}

const sort = (state = defaultState, action) => { // state = sort : { orderBy: 'name', orderDir: 'asc'}
  //action => store => appReducer => new State
  let { orderBy, orderDir } = action;
  switch (action.type) {
    case types.SORT_ITEM:
      return { orderBy, orderDir };
    default:
      return state;
  }
}

export default sort;