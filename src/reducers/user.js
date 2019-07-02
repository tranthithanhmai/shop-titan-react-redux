import * as types from './../constants/ActionType';
import { LoginStore } from './../actions/login';

let defaultState = {
	token: LoginStore.getData('token'),
	user_display_name: 'admin'
};

const user = (state = defaultState, action) => {
	switch (action.type) {
		case types.USER_LOGIN:
			state = action.data
			return state;
		case types.USER_LOGOUT:
			state.token = LoginStore.removeData('token' , '');
			state = state.token;
			return { ...state };
		default:
			return state;
	}
}

export default user;