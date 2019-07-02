import { combineReducers } from 'redux';
import user from './user';
import breadcrumb from './breadcrumb';
import strSearch from './strSearch';
import sort from './sort';
import product from './product';
import itemEditing from './itemEditing';
import uploadImages from './uploadImages';
import categories from './categories';
import carts from './carts';

const appReducers = combineReducers({
	user,
	breadcrumb,
	strSearch,
	sort,
	product,
	itemEditing,
	uploadImages,
	categories,
	carts,
});

export default appReducers;