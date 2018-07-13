import React, { Component, Fragment } from 'react';
import { Switch, Route , Redirect} from 'react-router-dom';
import { message, Button, Layout } from 'antd';
import Sidebar from './sidebar';
import Navbar from './navbar';

const { Header, Content, Footer, Sider } = Layout;

export default class Page extends Component {
  constructor(props, context) {
    super(props);

    this.state = {

    }
  }

  renderLayout() {
    switch(this.props.layout) {
      case 'sidebar': 
        return <Sidebar/>
        break;
      case 'navbar':
        return <Navbar/>
      default: 
        return null;

    }
  }

  render() {
  	return (
  		<Layout style={{ minHeight: '100%' }}>
        <Navbar authenticated={this.props.sessionStore.authenticated} logout={this.props.logout}/>
        <Content style={{ marginTop: 64 }}>
          {this.props.children}
        </Content>
        
      </Layout>
  	)
  }
}


