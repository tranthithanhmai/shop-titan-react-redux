import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import Login from './../../components/Login/Login';
import SliderImage from '../../components/Login/SilderImage';

class LoginPage extends Component {
  render() {
    let { history } = this.props;
    return (
      <Fragment>
        <SliderImage />
        <Login history = { history } />
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, null)(LoginPage);