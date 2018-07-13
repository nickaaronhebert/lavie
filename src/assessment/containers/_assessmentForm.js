import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { withRouter } from "react-router-dom";
import AssessmentForm from '../components/assessmentForm';

function mapStateTpProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({

  }, dispatch);
}

export const AssessmentFormContainer =  withRouter(connect(mapStateTpProps, mapDispatchToProps)(AssessmentForm));
