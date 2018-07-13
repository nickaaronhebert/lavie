import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Dropdown, Icon, Card, Carousel, Divider } from 'antd';

import PortfolioLeft from './portfolioleft.js';
import PortfolioRight from './portfolioright.js';


export default class Portfolio extends React.Component {
    componentWillMount() { }

	render() {
		return (
			<div>
                <PortfolioLeft />
                <PortfolioRight />
			</div>
		)
	}
}
  