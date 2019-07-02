import React, { Component, Fragment } from 'react';
import FormLogout from '../../components/Login/FormLogout'
import SliderImage from '../../components/Login/SilderImage';

class LogoutPage extends Component {
  render() {
    return (
      <Fragment>
        <SliderImage />
        <FormLogout />
      </Fragment>
     
    );
  }
}

export default LogoutPage;