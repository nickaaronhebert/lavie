import React, { Component, Fragment } from 'react';
import {Row, Col} from 'antd';
import { PageContainer } from '../containers/_page';
import { RegisterContainer } from '../../session/containers/_register';

export default class Register extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  render() {
    
    return (
      <PageContainer layout='navbar' >
        <Row type="flex" justify="center">
          <Col span={8} >
            <img style={{width: '100%'}} src='https://laviebirth.com/lavie.png'/>
          </Col>
        </Row>
        
        <Row type="flex" justify="center" >
          <Col span={8} style={{backgroundColor: 'white'}}>
            <RegisterContainer/>
          </Col>
        </Row>
      </PageContainer>
    )
  }
}


