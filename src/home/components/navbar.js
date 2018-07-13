import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

export default class Navbar extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }
  
  render() {
    return (
      <div>
        This is the Home component.
      </div>

    );
  }

}
