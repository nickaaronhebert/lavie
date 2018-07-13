import React, { Component, Fragment } from 'react';
import {Row, Col} from 'antd';
import { LoginContainer } from '../../session/containers/_login';
import { PageContainer } from '../containers/_page';

export default class Login extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  render() {
  	
  	return (
  		<PageContainer layout='navbar' >
  			<Row type="flex" justify="center" style={{marginTop: '100px'}}>
  				<Col span={8} >
  					<img style={{width: '100%'}} src='https://laviebirth.com/lavie.png'/>
  				</Col>
  			</Row>
  			
  			<Row type="flex" justify="center" >
  				<Col span={8} style={{backgroundColor: 'white'}}>
  					<LoginContainer/>
  				</Col>
  			</Row>
			</PageContainer>
  	)
  }
}


