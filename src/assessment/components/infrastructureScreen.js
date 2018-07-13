import React, { Component, Fragment } from 'react';
import {Row, Col, Card, Button, Steps, Icon, Tabs, Form, Input, Select, Radio} from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
const RadioGroup = Radio.Group;


class Infrastructure extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} layout={'vertical'}>

        <Card 
          title="Vendor Infrastructure" 
          extra={<a href="#">Last Saved: {new Date().toString()}</a>} 
          style={{ width: '100%', 'marginTop':'20px' }}
        >
          <strong>Type of Infrastructure</strong>
          <Row>
            <Col span={24}>
              <FormItem
                label="What type of infrastructure does your team use to deliver your solution?"
              >
                {getFieldDecorator('vendorInfrastructureType', {
                  rules: [{
                    required: true, message: 'Please input your infrastructure type!'
                  }],
                })(
                  <Select placeholder="Please select an infrastructure type">
                    <Option value="cloud">Cloud</Option>
                    <Option value="onPremise">On Premise</Option>
                    <Option value="hybrid">Hybrid</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem
                label="What cloud provider does your solution utilize?"
              >
                {getFieldDecorator('systemCloudProvider', {
                  rules: [{
                    required: true, message: 'Please input your system application name!'
                  }],
                })(
                  <RadioGroup>
                    <Radio value="Amazon Web Services">Amazon Web Services (AWS)</Radio><br/>
                    <Radio value="Microsoft Azure">Microsoft Azure</Radio><br/>
                    <Radio value="Google Cloud Platform">Google Cloud Platform (GCP)</Radio><br/>
                    <Radio value="SoftLayer">SoftLayer</Radio><br/>
                    <Radio value="Other">Other</Radio><br/>
                  </RadioGroup>
                )}
              </FormItem>
              <p><strong>Cloud Information</strong></p>

              <FormItem
                label="Does your organization have a Business Associates Agreement (BAA) with this cloud provider?"
              >
                {getFieldDecorator('vendorBAAgreement', {
                  rules: [{
                    required: true, message: 'Please input your system application name!'
                  }],
                })(
                  <RadioGroup>
                    <Radio value="true">Yes</Radio><br/>
                    <Radio value="false">No</Radio><br/>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem
                label="Does your hosted solution provide the option of 'single tenant'?"
              >
                {getFieldDecorator('systemSingleTenant', {
                  rules: [{
                    required: true, message: 'Please input your system application name!'
                  }],
                })(
                  <RadioGroup>
                    <Radio value="true">Yes</Radio><br/>
                    <Radio value="false">No</Radio><br/>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem
                label="Does your hosted solution provide physical and logical separation between client's data?"
              >
                {getFieldDecorator('systemPhysicalSeparation', {
                  rules: [{
                    required: true, message: 'Please input your system application name!'
                  }],
                })(
                  <RadioGroup>
                    <Radio value="true">Yes</Radio><br/>
                    <Radio value="false">No</Radio><br/>
                  </RadioGroup>
                )}
              </FormItem>

              <FormItem
                label="Does your organization store data across multiple cloud locations (availability zones)?"
              >
                {getFieldDecorator('vendorMulipleCloudLocations', {
                  rules: [{
                    required: true, message: 'Please input your system application name!'
                  }],
                })(
                  <RadioGroup>
                    <Radio value="true">Yes</Radio><br/>
                    <Radio value="false">No</Radio><br/>
                  </RadioGroup>
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

const WrappedInitialScreenForm = Form.create()(Infrastructure);

export default WrappedInitialScreenForm;

