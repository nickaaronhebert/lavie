import React, { Component, Fragment } from 'react';
import {Row, Col, Card, Button, Steps, Icon, Tabs, Form, Input} from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;


class InitialScreen extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} layout={'vertical'}>

        <Card 
          title="Initial Contact Information" 
          extra={<a href="#">Last Saved: {new Date().toString()}</a>} 
          style={{ width: '100%', 'marginTop':'20px' }}
        >
          <strong>Company Information</strong>
          <Row>
            <Col span={10}>
              <FormItem
                label="Vendor Company Name"
              >
                {getFieldDecorator('vendorCompany', {
                  rules: [{
                    required: true, message: 'Please input your vendor company name!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="System Application Name"
              >
                {getFieldDecorator('systemName', {
                  rules: [{
                    required: true, message: 'Please input your system application name!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="System Application Version"
              >
                {getFieldDecorator('systemVersion', {
                  rules: [{
                    required: true, message: 'Please input your system application version!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="Assessment Submitted By"
              >
                {getFieldDecorator('submittedBy', {
                  rules: [{
                    required: true, message: 'Please input the submittors name!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={4}>
              
            </Col>
            <Col span={10}>
              <FormItem
                label="General Description/Purpose"
              >
                {getFieldDecorator('description', {
                  rules: [{
                    required: true, message: 'Please input a general description.'
                  }],
                })(
                  <TextArea />
                )}
              </FormItem>
              <FormItem
                label="Project Name & Number (If Applicable)"
              >
                {getFieldDecorator('description', {
                  rules: [{
                    required: true, message: 'Please input a general description.'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>

          </Row>
          <strong>Vendor Contact Information</strong>
          <Row>
            <Col span={10}>
              
              <FormItem
                label="Full Name"
              >
                {getFieldDecorator('vendorFullName', {
                  rules: [{
                    required: true, message: 'Please input the vendors full name!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="Job Title"
              >
                {getFieldDecorator('vendorJobTitle', {
                  rules: [{
                    required: true, message: 'Please input the vendors job title!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="Phone Number"
              >
                {getFieldDecorator('vendorPhone', {
                  rules: [{
                    required: true, message: 'Please input your phone number!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="Email"
              >
                {getFieldDecorator('vendorEmail', {
                  rules: [{
                    required: true, message: 'Please input your email!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={4}>
            </Col>
            <Col span={10}>
              <FormItem
                label="Address 1"
              >
                {getFieldDecorator('vendorAddress1', {
                  rules: [{
                    required: true, message: 'Please input the vendors address!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="Address 2"
              >
                {getFieldDecorator('vendorAddress2', {
                  rules: [{
                    required: false, message: 'Please input the vendors address!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="City"
              >
                {getFieldDecorator('vendorCity', {
                  rules: [{
                    required: true, message: 'Please input the vendors city!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="State"
              >
                {getFieldDecorator('state', {
                  rules: [{
                    required: true, message: 'Please input the vendors state!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="Zipcode"
              >
                {getFieldDecorator('vendorZipcode', {
                  rules: [{
                    required: true, message: 'Please input the vendors zipcode!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="Country"
              >
                {getFieldDecorator('vendorCountry', {
                  rules: [{
                    required: true, message: 'Please input the vendors country!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
            </Col>
            <Col span={4}>
              <Button type="primary" htmlType="submit" className="login-form-button" ghost>Previous Step</Button>
            </Col>
            <Col span={4} offset={16}>
              <Button 
                type="primary" 
                htmlType="submit" 
                className="login-form-button" 
                onClick={this.props.nextScreen()}>
                Next Step
              </Button>
            </Col>
          </Row>
        </Card>
      </Form>
    )
  }
}

const WrappedInitialScreenForm = Form.create()(InitialScreen);

export default WrappedInitialScreenForm;