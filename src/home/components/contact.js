import React, { Component } from 'react';
import { Form, Input, Tooltip, Icon, Cascader, Select, Row, Col, Checkbox, Button, AutoComplete } from 'antd';

const { TextArea } = Input;

const FormItem = Form.Item;
const Option = Select.Option;
const AutoCompleteOption = AutoComplete.Option;

const style_c = {
  "n": ""
};

class Contact extends React.Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    });
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  checkPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  }

  checkConfirm = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  handleWebsiteChange = (value) => {
    let autoCompleteResult;
    if (!value) {
      autoCompleteResult = [];
    } else {
      autoCompleteResult = ['.com', '.org', '.net'].map(domain => `${value}${domain}`);
    }
    this.setState({ autoCompleteResult });
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const { autoCompleteResult } = this.state;

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 24,
          offset: 0
        },
        sm: {
          span: 16,
          offset: 8
        }
      }
    };

    const websiteOptions = autoCompleteResult.map(website => (
      <AutoCompleteOption key={website}>{website}</AutoCompleteOption>
    ));
    /*
    <div>
      <a href="mailto:crow.software.development@gmail.com">crow.software.development@gmail.com</a>
    </div>
    */

    return (
      <Row>
        <Col span={6} />
        <Col span={12} style = {{ "BackgroundColor": "#fff" }}>
          <Form onSubmit={this.handleSubmit} style={style_c}>

            <FormItem {...formItemLayout} label="Your full name">
                {getFieldDecorator('fullname', {
                  rules: [{ required: true, message: 'Please input your full name.', whitespace: true }],
                })(
                  <AutoComplete
                    dataSource={websiteOptions}
                    onChange={this.handleWebsiteChange}
                    placeholder="Full name"
                  >
                    <Input />
                  </AutoComplete>
                )}
            </FormItem>

            <FormItem { ...formItemLayout } label="Your work email">
                {getFieldDecorator('email', {
                  rules: [{
                    type: 'email', message: 'The input is not valid E-mail.'
                  }, {
                    required: true, message: 'Please input your E-mail.'
                  }],
                })(
                  <AutoComplete
                    dataSource={websiteOptions}
                    onChange={this.handleWebsiteChange}
                    placeholder="Company email"
                  >
                    <Input />
                  </AutoComplete>
                )}
            </FormItem>

            <FormItem {...formItemLayout} label="Company Website">
                {getFieldDecorator('website', {
                  rules: [{ required: true, message: 'Please input company website.' }],
                })(
                  <AutoComplete
                    dataSource={websiteOptions}
                    onChange={this.handleWebsiteChange}
                    placeholder="Company website"
                  >
                    <Input />
                  </AutoComplete>
                )}
            </FormItem>

            <FormItem {...formItemLayout} label="Company phone number">
                {getFieldDecorator('phone', {
                  rules: [{ required: true, message: 'Please input your company phone number.' }],
                })(
                  <AutoComplete
                    dataSource={websiteOptions}
                    onChange={this.handleWebsiteChange}
                    placeholder="Company phone number"
                  >
                    <Input />
                  </AutoComplete>
                )}
            </FormItem>

            <FormItem {...formItemLayout} label="Extra">
                {getFieldDecorator('extra', {
                  rules: [{ required: false, message: 'Please tell us about your needs.' }],
                })(
                    <TextArea placeholder="Tell us about your project, needs, and timeline." autosize={{ minRows: 0, maxRows: 30 }} style={{ "padding-bottom": '75px' }}/>
                )}
            </FormItem>

            <FormItem {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit">Submit</Button>
            </FormItem>
          </Form>
        </Col>
        <Col span={6} />
      </Row>
    );
  }
}

const WrappedRegistrationForm = Form.create()(Contact);

export default WrappedRegistrationForm;

// ReactDOM.render(<WrappedRegistrationForm />, mountNode);