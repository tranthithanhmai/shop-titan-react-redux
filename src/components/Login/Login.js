import React, { Component } from 'react';
import { actLoginRequest, actGoLogin } from './../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    this.props.actions.actGoLogin('Login', '/shopping-cart-reactjs/login');
  }

  handleChange = (event) => {
    const target = event.target;    // input selectbox
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    let { username, password } = this.state;
    let { history } = this.props;
    let data = {
      username,
      password
    }
    await this.props.actions.actLoginRequest(data);
    history.goBack();
  }

  render() {
    let { username, password } = this.state;
    const { token } = this.props;
    if (token) {
      return <Redirect to="/shopping-cart-reactjs/logout" />
    } else {
      return (
        <section className="module">
          <div className="container">
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <h2 className="module-title font-alt">LOGIN</h2>
                <div className="module-subtitle font-serif" />
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-sm-offset-3">
                <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label className="sr-only" htmlFor="name">Username</label>
                    <input className="form-control" type="text" name="username" value={username} onChange={this.handleChange} placeholder="Username*" required="required" data-validation-required-message="Please enter Username." />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="form-group">
                    <label className="sr-only" htmlFor="email">Password</label>
                    <input className="form-control" type="password" name="password" value={password} onChange={this.handleChange} placeholder="Password*" required="required" data-validation-required-message="Please enter Password." />
                    <p className="help-block text-danger" />
                  </div>
                  <div className="text-center">
                    <button className="btn btn-block btn-round btn-d" type="submit">Login</button>
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
      actLoginRequest,
      actGoLogin
    }, dispatch)
  }
}

const mapStatetoProps = (state) => ({
  token: state.user.token
})

export default connect(mapStatetoProps, mapDispatchToProps)(Login);