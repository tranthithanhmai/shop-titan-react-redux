import React, { Component } from 'react';
import { actLogout, actGoLogout } from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

class FormLogout extends Component {
  componentDidMount() {
    this.props.actions.actGoLogout('Logout', '/shopping-cart-reactjs/logout');
  }
  handleLogout = (event) => {
    event.preventDefault();
    this.props.actions.actLogout();
  }

  render() {
    let { user } = this.props;
    if (!user.token) {
      return <Redirect push to="/shopping-cart-reactjs/login" />
    } else {
      return (
        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">LOGOUT</h2>
                <div className="module-subtitle font-serif" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <form onSubmit={this.handleLogout}>
                  <div className="form-group">
                    <h5>Username: <strong>{user.user_display_name}</strong>
                    </h5></div>
                  <div className="text-center">
                    <button className="btn btn-block btn-round btn-d" type="submit">Logout</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    actions: bindActionCreators({
      actLogout,
      actGoLogout
    }, dispatch)
  }
}

const mapStatetoProps = state => {
  return {
    user: state.user
  }

}

export default connect(mapStatetoProps, mapDispatchToProps)(FormLogout);