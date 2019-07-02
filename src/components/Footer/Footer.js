import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="footer bg-dark">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <p className="copyright font-alt">© 2019&nbsp;<a href="index.html">TitaN</a>, All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

export default Footer;
