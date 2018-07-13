import React, { Fragment, Component } from 'react';
import { Divider, Row, Col, List } from 'antd';

const data = [
  'Racing car sprays burning fuel into crowd.',
  'Japanese princess to wed commoner.',
  'Australian walks 100km after outback crash.',
  'In Other News, David Likes Men.',
  'Los Angeles battles huge wildfires.',
];

export default class Faq extends Component {
  render() {
    return <Fragment>
      <center><h1>Frequently Asked Questions</h1></center>
      <Divider />
      <Row gutter={8} style={{paddingTop: '20px', marginLeft: '0px', marginRight: '0px'}}>
        <Col span={4}></Col>
        <Col span={8}>
          <List
            style={{ padding: '10px'}}
            header={<center><h2>Header</h2></center>}
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </Col>
        <Col span={8}>
          <List
            style={{ padding: '10px'}}
            header={<center><h2>Header</h2></center>}
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </Col>
        <Col span={4}></Col>
      </Row>
      <Row gutter={8} style={{paddingTop: '20px', paddingBottom: '20px', marginLeft: '0px', marginRight: '0px'}}>
        <Col span={4}></Col>
        <Col span={8}>
          <List
            style={{ padding: '10px'}}
            header={<center><h2>Header</h2></center>}
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </Col>
        <Col span={8}>
          <List
            style={{ padding: '10px'}}
            header={<center><h2>Header</h2></center>}
            dataSource={data}
            renderItem={item => (<List.Item>{item}</List.Item>)}
          />
        </Col>
        <Col span={4}></Col>
      </Row>
    </Fragment>
  }
}