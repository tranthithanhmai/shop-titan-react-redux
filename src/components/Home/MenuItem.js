import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menus = [
	{ to: '/shopping-cart-reactjs/', exact: true, name: 'Home' },
	{ to: '/shopping-cart-reactjs/product', name: 'Product' },
	{ to: '/shopping-cart-reactjs/products/categories', name: 'Category' },
	{ to: '/shopping-cart-reactjs/admin', name: 'Admin' },
	{ to: '/shopping-cart-reactjs/shopping-cart', name: 'Orders' },
	{ to: '/shopping-cart-reactjs/login', name: 'Login' }
];

const MenuLink = ({ menu }) => {
	return (
		<Route
			path={menu.to}
			exact={menu.exact}
			children=
			{
				({ match }) => {
					let active = (match !== null) ? "active" : "";
					var name = menu.name;
					if (name === 'Login') {
						name = <i className="fa fa-sign-in" aria-hidden="true"></i>;
					} else {
						name = menu.name;
					}
					return (
						<li>
							<Link to={menu.to} className={active}>
								{name}
							</Link>
						</li>
					)
				}
			}
		/>
	)
}

class MenuItem extends Component {

  showMenus(menus) {
		let xhtml = null;

		if (menus.length > 0) {
			xhtml = menus.map((menu, index) => {
				return (
					<MenuLink menu={menu} key={index} />
				);
			});
		}

		return xhtml;
	}
  render() {
    return (
      <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
        <div className="container">
          <div className="navbar-header">
            <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse"><span className="sr-only">Toggle navigation</span><span className="icon-bar" /><span className="icon-bar" /><span className="icon-bar" /></button><a className="navbar-brand" href="index.html">Titan</a>
          </div>
          <div className="collapse navbar-collapse" id="custom-collapse">
            <ul className="nav navbar-nav navbar-right">
            {this.showMenus(menus)}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default MenuItem;
