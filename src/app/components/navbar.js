import React, { Component, Fragment } from 'react';
import { Layout, Menu, Breadcrumb, Icon, Row, Col, Dropdown, Button } from 'antd';
import { Switch, Route , Redirect} from 'react-router-dom';

const { Header, Content, Footer, Sider } = Layout;

export default class Navbar extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
          <Header style={{'backgroundColor':'#FFFFFF', position: 'fixed', width: '100%', borderBottom: '1px solid #ebf2f5', zIndex: "10" }} >
            <Row type="flex" justify="space-between" align="bottom" style={{height: '100%'}}>
              <Col span={20}>
                <a href='/'><img src='https://laviebirth.com/lavie.png' style={{height:"50px"}}/></a>
              </Col>
              <Col span={4}>
                {
                  this.props.authenticated ? 
                    <Fragment>
                      <a href='/logout'><Button type="primary" ghost>Sign Out</Button></a>
                    </Fragment>
                  :
                    <Fragment>
                      <a href='/login'><Button type="primary" ghost>Log In</Button></a>
                      <a href='/register'><Button type="primary" ghost style={{marginLeft: '20px'}}>Register</Button></a>
                    </Fragment>

                }
                
              </Col>
            </Row>
          </Header>
    )
  }
}