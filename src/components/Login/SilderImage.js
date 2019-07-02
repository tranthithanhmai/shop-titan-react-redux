import React, { Component } from 'react';
import { connect } from 'react-redux';

class SliderImage extends Component {
  render() {
    const { token } = this.props;
    return (
      <section className="module bg-dark-30" data-background= "./../assets/images/section-login.jpg" style={{ backgroundImage: 'url(./../assets/images/section-login.jpg)'}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h1 className="module-title font-alt mb-0">{token ? 'LOGOUT' : 'LOGIN'}</h1>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    token: state.user.token
  }
}
export default connect(mapStateToProps, null)(SliderImage);
