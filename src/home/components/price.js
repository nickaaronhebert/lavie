import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { Card } from 'antd';

export default class Price extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div>
          <h1 style={{ "text-transform": "uppercase" }}>
            Software Price
          </h1>
        </div>
        <div style={{ display: "inline-block"}}>
          <Card style={{ width: 375, display: "inline-block" }}>
          <div style={{ "text-transform": "uppercase", "font-size": "28px", "padding-bottom": "20px", "padding-left": "40px" }}>Monthly</div>
            <div style={{ display: "inline-block", "padding-left": "40px" }}>
              <div style={{ "font-size": "48px", display: "inline-block" }}>
                $59
              </div>
              <div style={{ display: "inline-block" }}>
                / month
              </div>
            </div>
            <div style={{"padding-bottom": "10px"}}>$49 / month each additional inspector</div>
            <div>TODO?</div>
          </Card>
          <Card style={{ width: 270, display: "inline-block" }}>
            <div style={{ "text-transform": "uppercase", "font-size": "28px", "padding-bottom": "20px", "padding-left": "40px" }}>Annual</div>
            <div style={{ display: "inline-block", "padding-left": "40px" }}>
              <div style={{ "font-size": "48px", display: "inline-block" }}>
                $49
              </div>
              <div style={{ display: "inline-block" }}>
                / month
              </div>
            </div>
            <div style={{"padding-bottom": "10px"}}>$39 / month each additional inspector</div>
            <div>TODO?</div>
          </Card>
        </div>
      </div>
    );
  }
}

