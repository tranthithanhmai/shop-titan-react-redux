import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import routes from './route-config';
import Menu from './components/Home/Menu';
import Footer from './components/Footer/Footer';
import './components/Home/Header.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Menu />
        {this.showRoute(routes)}
        <Footer />
      </Router>
    );
  }

  showRoute(routes) {
    let xhtml = null;
    if (routes.length > 0) {
      xhtml = routes.map((route, index) => {
        return (
          <Route key={index} exact={route.exact} path={route.path} component={route.main} />
        );
      });
    }

    return <Switch>{xhtml}</Switch>;
  }
}

export default App;
