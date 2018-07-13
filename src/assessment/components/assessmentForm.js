import React, { Component, Fragment } from 'react';
import {Row, Col, Card, Button, Steps, Icon, Tabs} from 'antd';
import InitialScreen from './initialScreen';
import ProductScreen from './productScreen';
import TechnicalScreen from './technicalScreen';
import SecurityScreen from './securityScreen';
import InfrastructureScreen from './infrastructureScreen';

const TabPane = Tabs.TabPane;
const Step = Steps.Step;


const formSteps = [
  {
    label: 'Initial Information',
    status: 'initial'
  },
  {
    label: 'Product Information',
    status: 'product'
  },
  {
    label: 'Vendor Infrastructure',
    status: 'infrastructure'
  },
  {
    label: 'Technical Specs',
    status: 'technical'
  },
  {
    label: 'Security Specs',
    status: 'security'
  },
  {
    label: 'Vendors + Solutions',
    status: 'vendors'
  },
  {
    label: 'Review & Submit',
    status: 'review'
  },

]
export default class AssessmentForm extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      activeTab: 'initial'
    }
  }

  handleTabSwitch(tabKey) {
    this.setState({
      activeTab: tabKey
    })
    window.scrollTo(0, 0);
  }

  nextScreen(direction, e) {
    var tabIndex = formSteps.findIndex(x => x.status == this.state.activeTab);
    this.handleTabSwitch(formSteps[tabIndex + 1].status);
  }

  renderFormPane() {
    switch (this.state.activeTab) {
      case 'initial':
        return <InitialScreen
                nextScreen={() => this.nextScreen.bind(this)}
               />
        break;
      case 'product':
        return <ProductScreen
                nextScreen={() => this.nextScreen.bind(this)}
               />
        break;

      case 'infrastructure':
        return <InfrastructureScreen
                nextScreen={(e, t) => this.nextScreen.bind(this)}
               />
      case 'technical':
        return <TechnicalScreen
                nextScreen={(e, t) => this.nextScreen.bind(this)}
               />
      case 'security':
        return <SecurityScreen
                nextScreen={(e, t) => this.nextScreen.bind(this)}
               />
        break;
      default: 
        return null;
        break;
    }
  }

  render() {
    
    return (
      <Row type="flex" justify="center" style={{marginTop: '20px'}}>
	      <Col span={20} >
	        <Steps>
            {formSteps.map((step, index) => {
              if (step.status == 'product') {return null};
              return (
                <Step 
                  status={step.status} 
                  key={index}
                  icon={<Button 
                          type="primary" 
                          size='small' 
                          style={{fontSize: '10px'}} 
                          ghost={this.state.activeTab == step.status ? false : true}
                          onClick={() => this.handleTabSwitch(step.status)}
                        >
                          {step.label}
                        </Button>} 
                />
              )
            })}
          </Steps>
          {this.renderFormPane()}
	      </Col>
    	</Row>
    )
  }
}




