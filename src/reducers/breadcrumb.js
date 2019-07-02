import * as types from './../constants/ActionType';

let defaultState = [
	{ to: '/shopping-cart-reactjs/', name: 'Home' }
];

const breadcrumb = (state = defaultState, action) => {
	let { to, name } = action;
	switch (action.type) {
		case types.GO_HOME:
			state = [{ to: '/shopping-cart-reactjs/', name: 'Home' }];
			return [...state];
		case types.GO_PRODUCT:
			state[1] = { to, name };
			if (state.length > 2) state.splice(-1, 1);
			return [...state];
		case types.GO_PRODUCT_ITEM:
			if (state.length < 2) {
				state.push({ to: '/shopping-cart-reactjs/product', name: 'Product' }, { to, name });
			} else {
				state[2] = { to, name };
			}
			return [...state];
		case types.GO_CATEGORY:
			state[1] = { to, name };
			if (state.length > 2) state.splice(-1, 1);
			return [...state];
		case types.GO_CATEGORY_ITEM:
			if (state.length < 2) {
				state.push({ to: '/shopping-cart-reactjs/products/categories', name: 'Categories' }, { to, name });
			} else if (state.length === 3) {
				state.splice(1, 2)
				 state.push({ to: '/shopping-cart-reactjs/products/categories', name: 'Categories' }, { to, name });
			} else {
				state[2] = { to, name };
			}
			return [...state];
		case types.GO_ADMIN:
			state[1] = { to, name };
			if (state.length > 2) state.splice(-1, 1);
			return [...state];
		case types.GO_ADMIN_ITEM:
			if (state.length < 2) {
				state.push({ to: '/shopping-cart-reactjs/admin', name: 'Admin' }, { to, name });
			} else {
				state[2] = { to, name };
			}
			return [...state];
		case types.GO_ORDER:
			state[1] = { to, name };
			if (state.length > 2) state.splice(-1, 1);
			return [...state];
		case types.GO_ORDER_ITEM:
			if (state.length < 2) {
				state.push({ to: '/shopping-cart-reactjs/shopping-cart', name: 'Orders' }, { to, name });
			} else {
				state[2] = { to, name };
			}
			return [...state];
		case types.GO_LOGIN:
			state[1] = { to, name };
			if (state.length > 2) state.splice(-1, 1);
			return [...state];
		case types.GO_LOGOUT:
			state[1] = { to, name };
			if (state.length > 2) state.splice(-1, 1);
			return [...state];
		default:
			return state;
	}
}

export default breadcrumb;