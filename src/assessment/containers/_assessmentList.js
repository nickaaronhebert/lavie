import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import AssessmentList from '../components/assessmentList';

function mapStateTpProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export const AssessmentListContainer =  withRouter(connect(mapStateTpProps, mapDispatchToProps)(AssessmentList));
