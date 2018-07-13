import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Row, Col, Dropdown, Icon, Card, Carousel, Divider } from 'antd';

const styling = {
	color: "#171717",
	"background-color": "#FFFFFF"
};

let h1_style = {
	"text-transform": "uppercase",
	"font-weight": "500",
	"letter-spacing": ".081em",
	"color": "#f22f46",
	"padding-top": "40px"
};

export default class PortfolioLeft extends React.Component {
    componentWillMount() { }

	render() {
		return (
			<div style={ styling }>
				<Row style={ {"padding-bottom": "30px", "padding-top": "30px"}}>
                    <Col span={10}><img alt="example" src="https://cdn.dribbble.com/users/984185/screenshots/4181147/sign_up_-_800x600.jpg" style= {{ "width": "100%"}} /></Col>
                    <Col span={1}></Col>
					<Col span={12} style={{"textAlign": "center", "padding-left": "0px", "padding-right": "0px", "margin-right": "0px"}}>
						<h1 style={h1_style}>
							Lets gobble some cocks
						</h1>
						<h3>
							My favorite thing to do as a kid was to cobble dicks, my app helps you find yummy dicks to cobble.
						</h3>
						<h3> </h3>
					</Col>
                </Row>    
			</div>
		)
	}
}
  