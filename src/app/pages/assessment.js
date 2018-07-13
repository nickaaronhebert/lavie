import React, { Component, Fragment } from 'react';
import {Row, Col, Card, Button} from 'antd';
import { PageContainer } from '../containers/_page';
import { AssessmentListContainer } from '../../assessment/containers/_assessmentList';


export default class Assessment extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  render() {
    
    return (
      <PageContainer >
        <AssessmentListContainer/>
      </PageContainer>
    )
  }
}


