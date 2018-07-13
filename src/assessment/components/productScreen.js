import React, { Component, Fragment } from 'react';
import {Row, Col, Card, Button, Steps, Icon, Tabs, Form, Input} from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;


class ProductScreen extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} layout={'vertical'}>

        <Card 
          title="Initial Product Information" 
          extra={<a href="#">Last Saved: {new Date().toString()}</a>} 
          style={{ width: '100%', 'marginTop':'20px' }}
        >
          <strong>Product Information</strong>
          <Row>
            <Col span={24}>
              <FormItem
                label="Describe the function or purpose of the system and information processed."
              >
                {getFieldDecorator('systemPurpose', {
                  rules: [{
                    required: true, message: 'Please input system process here!'
                  }],
                })(
                  <TextArea />
                )}
              </FormItem>
              <FormItem
                label="Describe the processing flow of the application from system input to system output."
              >
                {getFieldDecorator('systemFlow', {
                  rules: [{
                    required: true, message: 'Please input your system flow!'
                  }],
                })(
                  <TextArea />
                )}
              </FormItem>
              <FormItem
                label="List user organizations (Internal and External) and type of data and processing provided."
              >
                {getFieldDecorator('systemOrganizations', {
                  rules: [{
                    required: true, message: 'Please input your system organizations!'
                  }],
                })(
                  <Input />
                )}
              </FormItem>
              <FormItem
                label="List all applications supported by the syste, Describe each application's function and information processed."
              >
                {getFieldDecorator('systemApplications', {
                  rules: [{
                    required: true, message: 'Please input the system applications!'
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

const WrappedInitialScreenForm = Form.create()(ProductScreen);

export default WrappedInitialScreenForm;

