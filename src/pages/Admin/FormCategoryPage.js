import React, { Component, Fragment } from 'react';
import FormCategory from '../../components/Admin/FormCategory';
import SliderAdmin from '../../components/Admin/SliderAdmin';

class FormCategoryPage extends Component {
  render() {
    var { history, match } = this.props;
    return (
     <Fragment>
       <SliderAdmin />
       <FormCategory history={history} match={match} />
     </Fragment>
    );
  }
}

export default FormCategoryPage;
