import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import Page from '../components/page';
import Logic from '../../logic';

const actions = Logic.session.actions;

function mapStateToProps(state) {
  return {
  	session: state.containers.session,
  	sessionStore: state.session
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  	logout: actions.sessionLogout
  }, dispatch);
}

export const PageContainer =  withRouter(connect(mapStateToProps, mapDispatchToProps)(Page));
