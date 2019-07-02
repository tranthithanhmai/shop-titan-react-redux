import React, { Component } from 'react';

class Video extends Component {
  render() {
    return (
      <section className="module module-video bg-dark-30" style={{backgroundImage: 'url("./../assets/images/shop/video.jfif")'}}>
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-sm-offset-3">
              <h2 className="module-title font-alt mb-0">Be inspired. Get ahead of trends.</h2>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Video;
