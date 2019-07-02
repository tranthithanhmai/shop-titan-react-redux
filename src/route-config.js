import React from 'react';

import HomePage from './pages/Home/HomePage';
import LoginPage from './pages/Login/LoginPage';
import AdminPage from './pages/Admin/AdminPage';
import CartPage from './pages/Cart/CartPage';
import OrderPage from './pages/Cart/OrderPage';
import ProductListsPage from './pages/Product/ProductListsPage';
import ProductItemPage from './pages/Product/ProductItemPage';
import CategoryPage from './pages/Category/CategoryPage';
import ProductListCategoryPage from './pages/Category/ProductListCategoryPage';
import FormControlPage from './pages/Admin/FormControlPage';
import ViewOrderPage from './pages/Cart/ViewOrderPage';
import FormCategoryPage from './pages/Admin/FormCategoryPage';
import LogoutPage from './pages/Login/LogoutPage';


const routes = [
  { 
    path: '/shopping-cart-reactjs/',
    exact: true,
    main: ({match}) => <HomePage match = {match} />
},
{ 
    path: '/',
    exact: true,
    main: ({match}) => <HomePage match = {match} />
},
{ 
    path: '/shopping-cart-reactjs/product',
    exact: true,
    main: ({match}) => <ProductListsPage match = {match} />
},
{ 
    path: "/shopping-cart-reactjs/product/:id",
    exact: true,
    main: ({match}) => <ProductItemPage match={match} />

},
{ 
    path: '/shopping-cart-reactjs/products/categories',
    exact: true,
    main: ({match, history}) => <CategoryPage match = {match} history ={history} />
},
{ 
    path: "/shopping-cart-reactjs/products/categories/:id",
    exact: true,
    main: ({match, history}) => <ProductListCategoryPage match={match} history ={history} />

},
{ 
    path: '/shopping-cart-reactjs/admin',
    exact: true,
    main: ({match, history}) => <AdminPage match = {match}  history = {history} />
},

{ 
    path: '/shopping-cart-reactjs/admin/add',
    exact: true,
    main: ({ match, history }) => <FormControlPage match = {match} history = {history}  />
},
{ 
    path: '/shopping-cart-reactjs/admin/add-category',
    exact: true,
    main: ({ match, history }) => <FormCategoryPage match = {match} history = {history}  />
},
{ 
    path: '/shopping-cart-reactjs/admin/edit/:id',
    exact: true,
    main: ({ match , history }) => <FormControlPage match = {match} history = {history}  />
},
{ 
    path: '/shopping-cart-reactjs/admin/edit-category/:id',
    exact: true,
    main: ({ match , history }) => <FormCategoryPage match = {match} history = {history}  />
},
{ 
    path: '/shopping-cart-reactjs/shopping-cart',
    exact: true,
    main: ({match}) => <CartPage match = {match}  />
},
{ 
    path: '/shopping-cart-reactjs/shopping-cart/add',
    exact: true,
    main: ({ match , history }) => <OrderPage match = {match}  history = {history}  />
},
{ 
    path: '/shopping-cart-reactjs/shopping-cart/edit/:id',
    exact: true,
    main: ({ match , history }) => <OrderPage match = {match}  history = {history}  />
},
{ 
    path: '/shopping-cart-reactjs/shopping-cart/view/:id',
    exact: true,
    main: ({ match , history }) => <ViewOrderPage match = {match}  history = {history}  />
},
{ 
    path: '/shopping-cart-reactjs/login',
    exact: true,
    main: ({ history }) => <LoginPage history = {history}  />
},
{ 
    path: '/shopping-cart-reactjs/logout',
    exact: true,
    main: () => <LogoutPage />
}
];

export default routes;