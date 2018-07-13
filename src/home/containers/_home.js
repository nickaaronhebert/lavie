import Home from '../components/home';
import * as HomeActions from '../home-actions';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import * as sessionActions from '../../session/session-actions';

function mapStateTpProps(state) {
  return {
    home: state.containers.homeReducer,
    authenticated: state.containers.session.authenticated
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getHome: HomeActions.getHome,
    logout: sessionActions.sessionLogout
  }, dispatch)
}

export const HomeComponent =  withRouter(connect(mapStateTpProps, mapDispatchToProps)(Home));
