import React, { Component, Fragment } from 'react';
import {Row, Col, Card, Button} from 'antd';
import { PageContainer } from '../containers/_page';
import {AssessmentFormContainer} from '../../assessment/containers/_assessmentForm';
export default class AssessmentForm extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  render() {
    debugger;
    return (
      <PageContainer layout='navbar' >
        <AssessmentFormContainer/>
      </PageContainer>
    )
  }
}


