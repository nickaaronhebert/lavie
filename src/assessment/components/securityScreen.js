import React, { Component, Fragment } from 'react';
import {Row, Col, Card, Button, Steps, Icon, Tabs, Form, Input, Radio} from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
const RadioGroup = Radio.Group;


class SecurityScreen extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} layout={'vertical'}>

        <Card 
          title="Security Specs" 
          extra={<a href="#">Last Saved: {new Date().toString()}</a>} 
          style={{ width: '100%', 'marginTop':'20px' }}
        >
          <strong>Security Information</strong>
          <Row>
            <Col span={24}>
              <FormItem
                label="For your cloud environment - Is virus detection and elimination software installed?"
              >
                {getFieldDecorator('virusSoftwareInstalled', {
                  rules: [{
                    required: true, message: 'Please input your answer!'
                  }],
                })(
                  <RadioGroup>
                    <Radio value="true">Yes</Radio><br/>
                    <Radio value="false">No</Radio><br/>
                  </RadioGroup>
                )}
              </FormItem>
              <FormItem
                label="What solution?"
              >
                {getFieldDecorator('virusSoftwareInstalled', {
                  rules: [{
                    required: true, message: 'Please input your answer!'
                  }],
                })(
                  <Input/>
                )}
              </FormItem>

              <FormItem
                label="Are integrity verification programs used by applications to look for evidence of data tampering, errors, and omissions?"
              >
                {getFieldDecorator('verificationPrograms', {
                  rules: [{
                    required: true, message: 'Please input your answer!'
                  }],
                })(
                  <RadioGroup>
                    <Radio value="true">Yes</Radio><br/>
                    <Radio value="false">No</Radio><br/>
                  </RadioGroup>
                )}
              </FormItem>
              <FormItem
                label="Explain:"
              >
                {getFieldDecorator('verificationProgramsExplained', {
                  rules: [{
                    required: true, message: 'Please input your answer!'
                  }],
                })(
                  <Input/>
                )}
              </FormItem>

              <FormItem
                label="Does all encryption (data in motion and data at rest) use currently NIST-approved algorithms?"
              >
                {getFieldDecorator('nistApprovedEncryption', {
                  rules: [{
                    required: true, message: 'Please input your answer!'
                  }],
                })(
                  <RadioGroup>
                    <Radio value="true">Yes</Radio><br/>
                    <Radio value="false">No</Radio><br/>
                  </RadioGroup>
                )}
              </FormItem>
              <FormItem
                label="Explain"
              >
                {getFieldDecorator('nistApprovedEncryptionExplained', {
                  rules: [{
                    required: true, message: 'Please input your answer!'
                  }],
                })(
                  <Input/>
                )}
              </FormItem>

              <FormItem
                label="Is system performance monitoring used to analyze system performance logs in real time?"
              >
                {getFieldDecorator('systemPerformanceMonitoring', {
                  rules: [{
                    required: true, message: 'Please input your answer!'
                  }],
                })(
                  <RadioGroup>
                    <Radio value="true">Yes</Radio><br/>
                    <Radio value="false">No</Radio><br/>
                  </RadioGroup>
                )}
              </FormItem>
              <FormItem
                label="How does this solution monitor availability problems, active attacks, and system/network slowdowns and crashes?"
              >
                {getFieldDecorator('systemPerformanceMonitoringExplained', {
                  rules: [{
                    required: true, message: 'Please input your answer!'
                  }],
                })(
                  <Input/>
                )}
              </FormItem>
            </Col>
            
          </Row>
          
        </Card>
      </Form>
    )
  }
}

const WrappedSecurityScreenForm = Form.create()(SecurityScreen);

export default WrappedSecurityScreenForm;

