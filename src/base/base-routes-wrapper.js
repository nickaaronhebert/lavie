import React, { Component } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ConnectedRouter, Router } from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import matchPath from "react-router/matchPath";

import Logic from '../logic';

const actions = Logic.router.actions;


class RouteWrapper extends Component {
	constructor(props, context) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		const {
	      path,
	      exact,
	      component,
	      render,
	      routeId
	    } = this.props;
	    
	    const match = matchPath(
	      location.pathname, // global DOM variable
	      { path, exact }
	    )

	    if (!match) {
	      // Do nothing because the current
	      // location doesn't match the path prop.

	      return null
	    }

	    if (component) {
	    	this.props.resolveRoute({path, exact, routeId, match, location});
	      return React.createElement(component, { match })
	    }

	}
}

function mapStateToProps(state) {
  return {
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    resolveRoute: actions.resolveRoute
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RouteWrapper));