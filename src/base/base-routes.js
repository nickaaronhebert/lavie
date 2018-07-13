import React, { Component, Fragment } from 'react';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { ConnectedRouter, Router } from 'react-router-redux';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { sessionService } from 'redux-react-session';
import RouteWrapper from './base-routes-wrapper';
import * as pages from '../app/pages';

class Routes extends Component {
	constructor(props, context) {
		super(props);

		this.state = {
			
		}
	}

	render() {
		return (
			<div style={{height: '100%'}}>
				<Switch>
					<RouteWrapper 
						exact 
						path='/'
						component={pages.Home}
					/>
					<RouteWrapper 
						exact 
						path='/register'
						component={pages.Register}
					/>
					<RouteWrapper 
						exact 
						path='/login'
						component={pages.Login}
					/>
					<RouteWrapper 
						exact 
						path='/logout'
						component={pages.Logout}
						routeId='LOG_OUT'
					/>
					{
						this.props.session.authenticated ?
							<Fragment>
								<RouteWrapper 
									exact 
									path='/assessments'
									component={pages.Assessment}
								/>
								<RouteWrapper 
									exact 
									path='/assessments/:assessmentId'
									component={pages.AssessmentForm}
								/>
							</Fragment>
						:
						null
					}
					<Route>
						<span>Not Found</span>
					</Route>
				</Switch>

			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
		session: state.session
	};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    
  }, dispatch);
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));