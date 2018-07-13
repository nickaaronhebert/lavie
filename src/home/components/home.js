import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Layout, Menu, Breadcrumb, Divider } from 'antd';
import Techstack from './techstack.js';
import '../styles/home.scss';
const { Header, Content, Footer } = Layout;

export default class Home extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
    }
  }
  render() {
    return (
      <Layout>
        <Header style={{ position: 'fixed', width: '100%', 'z-index': '100', backgroundColor: "#f5f5f5" }}>
          <div className="logo" style={{ position: 'fixed', width: '100px' }}>
            <img src="https://static0.twilio.com/marketing/bundles/archetype.alpha/img/logo-wordmark--red.svg" style={{ height: '40px' }}/>
          </div>
          <div style={{ float: "right" }}>
            { this.props.authenticated ? <a className="button" onClick={() => {this.props.history.push('/logout')}}>Logout</a> : [<a className="button" onClick={() => {this.props.history.push('/register')}}>Sign up</a>, <a className="button" onClick={() => {this.props.history.push('/login')}}>Login</a>]}
          </div>
          <div style={{ float: "right", color: "rgba(13,17,43,.8) !important"}}>
            <a href="a" style={{ paddingRight: "30px"}}>Products</a>
            <a href="a" style={{ paddingRight: "30px"}}>Pricing</a>
            <a href="a" style={{ paddingRight: "30px"}}>Customer Support</a>
            <a href="a" style={{ paddingRight: "30px"}}>Meth</a>
          </div>
        </Header>
        <Content style={{ padding: '0 0px', marginTop: 64, "background-color": "#ffffff" }}>
          {this.props.content}
        </Content>
        <Footer style={{ textAlign: 'center',  "background-color": "#0d112b", "text-align": "center" }}>
          <div>
            <ul className="item-list" style={{"margin-left": "-40px"}}>
              <li className="item-list"><a className="item-list-link">Legal</a></li>
              <li className="item-list"><a className="item-list-link">Privacy</a></li>
              <li className="item-list"><a className="item-list-link">crow.org</a></li>
              <li className="item-list"><a className="item-list-link">Press & Media</a></li>
              <li className="item-list"><a className="item-list-link">SIGNAL</a></li>
              <li className="item-list"><a className="item-list-link">Jobs</a></li>
            </ul>
          </div>
          <div className="item-list-link">
            Copyright © 2018 Dwarven Knowledge, LLC. All Rights Reserved.
          </div>
        </Footer>
      </Layout>
    );
  }
}
