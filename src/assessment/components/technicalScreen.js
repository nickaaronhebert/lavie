import React, { Component, Fragment } from 'react';
import {Row, Col, Card, Button, Steps, Icon, Tabs, Form, Input} from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;


class TechnicalScreen extends Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} layout={'vertical'}>

        <Card 
          title="Technical Specs" 
          extra={<a href="#">Last Saved: {new Date().toString()}</a>} 
          style={{ width: '100%', 'marginTop':'20px' }}
        >
          <strong>Product Information</strong>
          <Row>
            
            
          </Row>
          
        </Card>
      </Form>
    )
  }
}

const WrappedTechnicalScreenForm = Form.create()(TechnicalScreen);

export default WrappedTechnicalScreenForm;

