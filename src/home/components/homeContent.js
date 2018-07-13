import React, { Component, Fragment } from 'react';
import { Layout, Menu, Breadcrumb, Divider } from 'antd';
import PortfolioLeft from './portfolioleft.js';
import PortfolioRight from './portfolioright.js';
import Price from './price.js';
import Techstack from './techstack.js';

export default class HomeContent extends Component {
  render() {
    return (
      <Fragment>
        <div className="promo-video">
        <video src="https://d3hjue7omxs01q.cloudfront.net/Video/flex-promo.mp4" autoPlay loop playsInline="" poster="/marketing/bundles/flex/img/flex-promo-poster@2x.jpg">
          Uh oh! It looks like your browser doesn't support embedded videos,but worry not, for you can
          <a href="https://d3hjue7omxs01q.cloudfront.net/Video/flex-promo.mp4">download this video</a>
          and watch it with your favorite video player!
        </video>
      </div>
      <Divider />
      <div style={{ "width": "100%", "background-color": "#F6F6F6" }}>
      <div style={{ "max-width": "850px", "margin": "auto", paddingTop: "35px", paddingBottom: "20px" }}>
        <h1 className="title-text-small text-center">
          Take your ideas from localhost to the world
        </h1>
        <h2 className="title-text-large text-center">
          Bringing your idea to life is easier with the right tools. Deploy it into reality with a few lines of code.
        </h2>
      </div>
      </div>
      <Divider />
      <div style={{ "max-width": "850px", "margin": "auto", paddingTop: "35px", paddingBottom: "20px", "background-color": "#ffffff"  }}>
        <PortfolioLeft style={{paddingBottom: "20px"}}/>
        <PortfolioRight />
      </div>
      <Techstack />
      <div>
        <div>
          <h2>
            Built for developers.
            <br />
            Trusted by businesses.
          </h2>
        </div>
        <div>
        <Divider />
        </div>
      </div>
      <Price />
      </Fragment>
    );
  }
}