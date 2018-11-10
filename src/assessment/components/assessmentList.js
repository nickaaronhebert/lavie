import React, { Component, Fragment } from 'react';
import {Row, Col, Card, Button, Icon, Divider, Table, Input} from 'antd';
const { TextArea } = Input;

const columns = [{
  title: 'Name!!!',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="#">{text}</a>,
}, {
  title: 'Status',
  dataIndex: 'status',
  key: 'status',
}, {
  title: 'Organization',
  dataIndex: 'organization',
  key: 'organization',
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href={"/assessments/" + record.key}>Continue</a>
      <Divider type="vertical" />
      <a href="#">Delete</a>
      <Divider type="vertical" />
      <a href="#" className="ant-dropdown-link">
        More actions <Icon type="down" />
      </a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'Security Assessment Report',
  status: 'IN PROGRESS',
  organization:'Intermountain Health Care',
  dueDate: '2018-04-21'
}, {
  key: '2',
  name: 'Cloud Solutions Report',
  status: 'IN PROGRESS',
  organization:'Intermountain Health Care',
  dueDate: '2018-04-21'
}, {
  key: '3',
  name: 'Risk Analysis Report',
  status: 'IN PROGRESS',
  organization:'Intermountain Health Care',
  dueDate: '2018-04-21'
}];

export default class AssessmentList extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    return (
      <Row type="flex" justify="center" style={{marginTop: '20px'}}>
        <Col span={20} >
          <Card title="Vendor Assessments" extra={<a href="#">Start New Assessment</a>} id='assessmentList' style={{ width: '100%' }}>
            <Table columns={columns} dataSource={data} style={{ width: '100%' }}/>
          </Card>
        </Col>
      </Row>
    )
  }
}

