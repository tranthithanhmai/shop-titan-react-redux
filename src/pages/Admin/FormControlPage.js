import React, { Component, Fragment } from 'react';
import Form from './../../components/Admin/Form';
import SliderAdmin from '../../components/Admin/SliderAdmin';

class FormControlPage extends Component {
  render() {
    var { history, match } = this.props;
    return (
     <Fragment>
       <SliderAdmin />
       <Form history={history} match={match} />
     </Fragment>
    );
  }
}

export default FormControlPage;
