import React, { Component, Fragment } from 'react';
import {Row, Col, Divider, Card, Icon, Avatar, Form, Input, Button, Checkbox, Layout, Modal } from 'antd';
import { PageContainer } from '../containers/_page';
const { Header, Content, Footer, Sider } = Layout;

const FormItem = Form.Item;
const { Meta } = Card;
const { TextArea } = Input

class Home extends Component {
  constructor(props, context) {
    super(props);

    this.state = {
      birthPrepModal: false,
      birthSupportModal: false,
      birthPostpartumModal: false,
      postpartumModal: false

    }
  }

  toggleModal(modalKey) {
    this.setState({
      [modalKey]: !this.state[modalKey]
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <PageContainer layout='navbar' >
        <Row type="flex" justify="center" >
          <Col span={24} >
            <img style={{width: '100%'}} src='https://laviebirth.herokuapp.com/public/lavieCover.png'/>
          </Col>
        </Row>
        
        <Row type="flex" justify="center" >
          <Col span={16} style={{backgroundColor: 'white'}}>
            <Divider>Hello and Congratulations!</Divider>
            <p style={{fontSize: '24px', textAlign: 'center', marginTop: '10px'}}></p> 
            <p style={{fontSize: '18px', textAlign: 'center'}}>
              If you are visiting this page it is because you are expecting, have just had a 
              baby or you know an expecting mama who could use a doula. Thanks for visiting!
            </p>
          </Col>
        </Row>

        <Row type="flex" justify="center" style={{marginTop: '50px'}}>
          <Col span={16} >
            <Row type="flex" justify="center">
              <Col span={8} style={{textAlign: 'center'}}>
                <img style={{width: '200px', height: '200px', borderRadius: '200px'}} src='http://wrightsonandplatt.com/media/wysiwyg/homepage/Baby_Feet_Casting_with_Wrightson_and_Platt.jpg'/>
              </Col>
              <Col span={8} style={{textAlign: 'center'}}>
                <img style={{width: '200px', height: '200px', borderRadius: '200px'}} src='http://keck.usc.edu/wp-content/uploads/2018/03/VitaminD_pregnancy_web-iStock-web.jpg'/>
              </Col>
              <Col span={8} style={{textAlign: 'center'}}>
                <img style={{width: '200px', height: '200px', borderRadius: '200px'}} src='https://vistanews.ru/uploads/posts/2015-06/medium/1433658784_rebenok.jpg'/>
              </Col>
            </Row>
            

          </Col>
        </Row>

        <Row type="flex" justify="center" style={{marginTop: '50px'}}>
          <Col span={16}>
            <Divider style={{paddingBottom: '100px', paddingTop: '100px'}}>About Me</Divider>
            <Row>
              <Col span={11} style={{textAlign: 'center'}}>
                <img style={{width: '200px', height: '200px', borderRadius: '200px'}} src='https://laviebirth.herokuapp.com/public/madison.jpg'/><br/>
                <span>Madison Hebert</span><br/>
                <p style={{fontStyle: 'italic'}}>Mother of a beautiful, little girl. Married to a sexy husband. Baker of all things sweet.</p>
                <span></span>
                <span></span>

              </Col>
              <Col span={11} offset={2}>
                <p>
                  My name is Madison Hebert and I am a DONA trained doula. 
                  My journey of becoming a doula has been a long one, even though it was only recently that I became a mother myself. 
                  When a family friend encouraged my mom to have a natural birth when my brother was born, as a 15 year old I became fascinated by the world of birth. 
                </p>
                <p>
                  I never knew birth could be empowering and healing, and all the versions of birth I had seen in movies didn’t show how exciting birth really can be!
                  While in college I realized that being a childbirth educator was my true calling in life, so I trained to become a doula and have loved every step of this calling. 
                  The knowledge and training I have aquired assisted in the amazing birth of my first baby. Now as a new mom I am even more encouraged to promote happy, healthy births and to support other moms.
                </p>
              </Col>

            </Row>
            
            

          </Col>
        </Row>

        <Row type="flex" justify="center" style={{marginTop: '50px'}}>
          <Col span={16} >
            <Divider style={{paddingBottom: '100px', paddingTop: '100px'}}>What I Do</Divider>
            <Row>
              <Col span={11}>
                <p style={{fontSize: '28px'}}>
                  Each birth experience only happens once...
                </p>
                <p>
                  Every birth story is rare because it has never happened before and will never happen again. 
                  I love that! I love the uniqueness of the way that everyone comes into this world. 
                </p>
                <p>
                  My job is to make sure that birthing mothers and their birth partners truly love their birth. 
                  Because this time is so unique, it is important to be educated, prepared, and supported. 
                </p>
                <p>
                  As a birth doula, I work with mothers and their birth partners to create birth plans, learn comfort techniques and help analyze fears surrounding birth so that mom feels supported and loved. 
                </p>
                <p>
                  On your labor day, I don’t take center stage. My focus is on giving birthing mothers and their support system, whether that’s a spouse, friend, or parent, the tools they need to create a once-in-a-lifetime experience together. 
                </p>
              </Col>
              <Col span={11} offset={2}>
                <Row>
                  <Col span={24} style={{marginBottom: '20px'}}>
                    <img  style={{width: '100%'}} src='https://static1.squarespace.com/static/53d1c23ae4b0d9e21c97c83a/555de097e4b0898118072bcd/555de099e4b0898118072bd7/1436280608993/dad-mom-laboring-natural-birth.jpg'/>

                  </Col>
                  <Col span={24}>
                    <img  style={{width: '100%'}} src='https://www.pitria.com/wp-content/uploads/2016/06/%D7%90%D7%91%D7%95%D7%AA-%D7%9E%D7%9C%D7%95%D7%95%D7%99%D7%9D-%D7%90%D7%AA-%D7%99%D7%9C%D7%93%D7%99%D7%94%D7%9D-%D7%9C%D7%A2%D7%95%D7%9C%D7%9D-9.jpeg'/>
                  </Col>
                  
                </Row>
                
              </Col>

            </Row>

          </Col>
        </Row>

        <Row type="flex" justify="center" style={{marginTop: '50px'}}>
          <Col span={16} >
            <Divider style={{paddingBottom: '100px', paddingTop: '100px'}}>Serving families in Eastern Washington and Oregon.</Divider>
            <Row>
              <Col span={11}>
                <ul>  
                  <li>Benton City</li>
                  <li>Finley</li>
                  <li>Grandview</li>
                  <li>Hermiston</li>
                  <li>Kennewick</li>
                  <li>Pasco</li>
                  <li>Pendleton</li>
                  <li>Prosser</li>
                  <li>Richland</li>
                  <li>Umatilla</li>
                  <li>Walla Walla</li>
                </ul>
              </Col>
              <Col span={11} offset={2}>
                <Row>
                  <Col span={24} style={{marginBottom: '20px'}}>
                    <img  style={{width: '100%'}} src='https://media-cdn.tripadvisor.com/media/photo-s/0e/55/d7/a2/sunset-on-the-columbia.jpg'/>

                  </Col>
                </Row>
                
              </Col>
              <Col span={24}>
                <p style={{textAlign: 'center', marginTop: '20px'}}>Willing to travel outside of these cities. Contact me to add your city to my list!</p>
              </Col>

            </Row>

          </Col>
        </Row>


        <Row type="flex" justify="center" style={{marginTop: '50px'}}>
          <Col span={24} >
            <Divider style={{paddingBottom: '50px', paddingTop: '50px'}}>Some of the tools doulas use:</Divider>
            <Row>
              <Col span={4} style={{textAlign: 'center'}}>
                <img style={{width: '200px', height: '200px', borderRadius: '200px'}} src='https://parentsneed.com/wp-content/uploads/2017/04/Top-5-Best-Essential-Oils-for-Kids.jpg'/>
                <p>
                  Essential Oils
                </p>
              </Col>
              <Col span={4} style={{textAlign: 'center'}} offset={1}>
                <img style={{width: '200px', height: '200px', borderRadius: '200px'}} src='http://bumpintoreality.com/wp-content/uploads/2015/04/Codan-print-037.jpg'/>
                <p>
                  Rebozo Techniques
                </p>
              </Col>
              <Col span={4} style={{textAlign: 'center'}} offset={1}>
                <img style={{width: '200px', height: '200px', borderRadius: '200px'}} src='http://www.zenwell.com/wp-content/uploads/2014/07/prenatal-thai-massage.jpg'/>
                <p>
                  Prenatal Massages
                </p>
              </Col>
              <Col span={4} style={{textAlign: 'center'}} offset={1}>
                <img style={{width: '200px', height: '200px', borderRadius: '200px'}} src='https://static1.squarespace.com/static/55dc91f2e4b0e3d302bff370/t/59e2604dcf81e0f3a19f5fe2/1508008015573/pregnancy-acupuncture-in-richmond-va.png?format=500w'/>
                <p>
                  Pregnancy Accupuncture
                </p>
              </Col>
              <Col span={4} style={{textAlign: 'center'}} offset={1}>
                <img style={{width: '200px', height: '200px', borderRadius: '200px'}} src='http://www.newhealthadvisor.com/images/1HT01415/4.png'/>
                <p>
                  Breathing Exercises
                </p>
              </Col>
              
            </Row>

          </Col>
        </Row>

        <Row type="flex" justify="center" >
          <Col span={22} >
            <Divider style={{paddingBottom: '100px', paddingTop: '100px'}}>My Services</Divider>
            <Row type="flex" justify="center" >
              <Col span={22} style={{textAlign: 'center'}}>
                <p>As a birth and postpartum doula, I offer several services to cater to the needs of each woman. Below, you will find a description of each package and a list of services included in the package. I believe all women should have access to doula care, so finances shouldn’t be a concern. Please contact me even if these packages don’t seem to work for you so that we can discuss individualized services and payment plans.</p>
              </Col>
            </Row>
            <br/>
            <Row type="flex" justify="center"  >
              <Col span={8}  >
                <Card
                  style={{ width: 300 }}
                  actions={[<span>$150</span>, <span onClick={() => this.toggleModal('birthPrepModal')}>What's Included?</span>]}
                >
                  <Meta
                    title="Birth Prep"
                    description="If having a doula at your birth doesn’t work for your family, but you still want hands on knowledge of comfort measures and to have a knowledgeable resource, this plan is for you. "
                  />
                </Card>
              </Col>
              <Col span={8} >
                <Card
                  style={{ width: 300 }}
                  actions={[<span>$575</span>, <span onClick={() => this.toggleModal('birthSupportModal')}>What's Included?</span>]}
                >
                  <Meta
                    title="Birth Support"
                    description="This package is for those who would like doula support during labor."
                  />
                </Card>
              </Col>
            </Row>
            <br/>
            <Row type="flex" justify="center"  >
              <Col span={8}>
                <Card
                  style={{ width: 300 }}
                  actions={[<span>$740</span>, <span onClick={() => this.toggleModal('birthPostpartumModal')} >What's Included?</span>]}
                >
                  <Meta
                    title="Birth and Postpartum"
                    description="This package is for those who would like doula support during labor and support at home while transitioning to having a new baby."
                  />
                </Card>
              </Col>
              <Col span={8}>
                <Card
                  style={{ width: 300 }}
                  actions={[<span>$200</span>, <span onClick={() => this.toggleModal('postpartumModal')} >What's Included?</span>]}
                >
                  <Meta
                    title="Postpartum Support"
                    description="This package is for those who need help at home once baby is born. This is a great gift to give expecting mamas! "
                  />
                </Card>
              </Col>
            </Row>

          </Col>
        </Row>

        <Footer style={{marginTop: '100px'}}>
          

        <Row type="flex" justify="center" >
          <Col span={16} >
            <Divider>Contact Me</Divider>
            <Row>
              <Col span={11}>
                <Form onSubmit={this.handleSubmit} className="login-form">
                  <FormItem>
                    {getFieldDecorator('fullName', {
                      rules: [{ required: true, message: 'Please input your full name!' }],
                    })(
                      <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Full Name" />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('phone', {
                      rules: [{ required: true, message: 'Please input your Password!' }],
                    })(
                      <Input prefix={<Icon type="phone" style={{ color: 'rgba(0,0,0,.25)' }} />} type="phone" placeholder="Phone Number - (509)-555-5555" />
                    )}
                  </FormItem>
                  <FormItem>
                    {getFieldDecorator('comments', {
                      rules: [{ required: true, message: 'What would you like me to know?' }],
                    })(
                      <TextArea rows={4} type="text" placeholder="Comments" />
                    )}
                  </FormItem>
                </Form>
              </Col>
              <Col span={11} offset={2} style={{textAlign: 'center'}}>
                <img style={{width: '150px', height: '200px'}} src='https://laviebirth.herokuapp.com/public/madison.jpg'/><br/>
                <span>Madison Hebert</span><br/>
              </Col>

            </Row>


          </Col>
        </Row>
        </Footer>
        <Modal
          title="Birth Preparation Package"
          visible={this.state.birthPrepModal}
          onOk={() => this.toggleModal('birthPrepModal')}
          onCancel={() => this.toggleModal('birthPrepModal')}
          width={700}
        >
          <Row>
            <Col span={11}>
              <Divider >Included In This Package</Divider>
              <ul>
                <li>Consultation</li>
                <li>2 prenatal appointments to learn comfort measures and write birth plan</li>
                <li>Access to my lending library</li>
                <li>Phone and email support through birth</li>
                <li>Additional prenatal appointments upon request</li>

              </ul>
            </Col>

            <Col span={11} offset={2}>
              <img style={{width: '90%'}} src='https://static1.squarespace.com/static/5759bce24c2f85b21a1b8229/t/5886b9d7c534a517c8d0562a/1485224419615/New+orleans+child+birth+classes?format=500w'/>

            </Col>
          </Row>
        </Modal>
        <Modal
          title="Birth Support Package"
          visible={this.state.birthSupportModal}
          onOk={() => this.toggleModal('birthSupportModal')}
          onCancel={() => this.toggleModal('birthSupportModal')}
          width={700}
        >
          <Row>
            <Col span={11} >
              <Divider >Included In This Package</Divider>
              <ul>
                <li>Consultation</li>
                <li>2 prenatal appointments to learn comfort measures and write birth plan</li>
                <li>Access to my lending library</li>
                <li>Phone and email support through birth</li>
                <li>I am on call for your birth starting at 37 weeks</li>
                <li>Labor support utilizing massage, rebozo, and other tools, while keeping your labor space peaceful</li>
                <li>2 hours support immediately after birth</li>
                <li>1 postpartum visit 3-6 weeks after birth</li>
              </ul>
            </Col>
            <Col span={11} offset={2} style={{height: '350px'}}>
              <img style={{width: '90%', position: 'absolute', bottom: '100px', 'top':'unset'}} src='https://i0.wp.com/bebekdostu.org/wp-content/uploads/2016/04/dogum-masaji-dailybebek.jpg?fit=749%2C510'/>

            </Col>
          </Row>
        </Modal>

        <Modal
          title="Birth and Postpartum Package"
          visible={this.state.birthPostpartumModal}
          onOk={() => this.toggleModal('birthPostpartumModal')}
          onCancel={() => this.toggleModal('birthPostpartumModal')}
          width={850}
        >
          <Row>
            <Col span={11} >
              <Divider >Included In This Package</Divider>
              <ul>
                <li>Consultation</li>
                <li>2 prenatal appointments to learn comfort measures and write birth plan</li>
                <li>Access to my lending library</li>
                <li>Phone and email support through birth</li>
                <li>I am on call for your birth starting at 37 weeks</li>
                <li>Labor support utilizing massage, rebozo, and other tools, while keeping your labor space peaceful</li>
                <li>2 hours support immediately after birth</li>
                <li>1 postpartum visit 3-6 weeks after birth</li>
                <li>8 hours extra postpartum support, including meal prep, light chores, holding baby while you nap, etc, in the increments of your choosing</li>
                <li>Ongoing postpartum support upon request</li>
              </ul>
            </Col>
            <Col span={11} offset={2} style={{height: '350px'}}>
              <img style={{width: '90%', position: 'absolute', bottom: '100px', 'top':'unset'}} src='https://i0.wp.com/bebekdostu.org/wp-content/uploads/2016/04/dogum-masaji-dailybebek.jpg?fit=749%2C510'/>

            </Col>
          </Row>
        </Modal>

        <Modal
          title="Postpartum Package"
          visible={this.state.postpartumModal}
          onOk={() => this.toggleModal('postpartumModal')}
          onCancel={() => this.toggleModal('postpartumModal')}
          width={850}
        >
          <Row>
            <Col span={11} >
              <Divider >Included In This Package</Divider>
              <ul>
                <li>Consultation</li>
                <li>8 hours extra postpartum support, including meal prep, light chores, holding baby while you nap, etc, in the increments of your choosing (ie 2 hours twice a week for two weeks, two 4-hour overnight shifts, etc.)</li>
                <li>Breastfeeding Support</li> 
                <li>Ongoing postpartum support upon request</li>
              </ul>
            </Col>
            <Col span={11} offset={2} style={{height: '350px'}}>
              <img style={{width: '90%', position: 'absolute', bottom: '100px', 'top':'unset'}} src='https://i0.wp.com/bebekdostu.org/wp-content/uploads/2016/04/dogum-masaji-dailybebek.jpg?fit=749%2C510'/>

            </Col>
          </Row>
        </Modal>
      </PageContainer>
    )
  }
}

const WrappedNormalLoginForm = Form.create()(Home);

export default WrappedNormalLoginForm;


