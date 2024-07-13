// src/pages/Contact.js
import React from 'react';
import { Layout, Typography, Row, Col, Card, Button, Form, Input } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const theme = {
  primaryColor: '#2ecc71',
  secondaryColor: '#0f8342',
  accentColor: '#3498db',
  textColor: '#333333',
  lightTextColor: '#ffffff',
};

const heroStyle = {
  minHeight: '60vh',
  background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  padding: '0 10%',
  position: 'relative',
  overflow: 'hidden',
};

const contentStyle = {
  padding: '80px 10%',
  backgroundImage: 'url(https://source.unsplash.com/1600x900/?nature,landscape)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  position: 'relative',
};

const overlayStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
};

const cardStyle = {
  borderRadius: '20px',
  boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
  transition: 'all 0.5s ease',
  overflow: 'hidden',
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
};

const buttonStyle = {
  background: `linear-gradient(45deg, ${theme.primaryColor}, ${theme.accentColor})`,
  borderColor: theme.primaryColor,
  fontSize: '18px',
  height: '50px',
  boxShadow: '0 8px 20px rgba(46, 204, 113, 0.3)',
  transition: 'all 0.5s ease',
};

const Contact = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
      once: true,
      easing: 'ease-out-cubic',
    });
  }, []);

  const onFinish = (values) => {
    console.log('Form values:', values);
    // Handle form submission here
  };

  return (
    <Content>
      <div style={heroStyle}>
        <div style={{ position: 'relative', zIndex: 1 }} data-aos="fade-up" data-aos-duration="2000">
          <Title style={{ color: theme.lightTextColor, fontSize: '60px', marginBottom: '30px', fontWeight: 'bold' }}>
            Contact Us
          </Title>
          <Paragraph style={{ color: theme.lightTextColor, fontSize: '20px', maxWidth: '800px', margin: '0 auto' }}>
            We're ready with the answers to all of your questions about carbon-negative fuels and the vital role they play in a Net Zero future.
          </Paragraph>
        </div>
      </div>
      <div style={contentStyle}>
        <div style={overlayStyle}></div>
        <Row justify="center" style={{ position: 'relative', zIndex: 1 }}>
          <Col xs={24} md={18} lg={14}>
            <Card style={cardStyle} data-aos="fade-up">
              <Title level={2} style={{ textAlign: 'center', marginBottom: '40px', color: theme.textColor }}>
                Get in Touch
              </Title>
              <Form name="contact" onFinish={onFinish} layout="vertical">
                <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]}>
                  <Input placeholder="Your Name" size="large" />
                </Form.Item>
                <Form.Item name="email" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
                  <Input placeholder="Your Email" size="large" />
                </Form.Item>
                <Form.Item name="subject" rules={[{ required: true, message: 'Please input the subject!' }]}>
                  <Input placeholder="Subject" size="large" />
                </Form.Item>
                <Form.Item name="message" rules={[{ required: true, message: 'Please input your message!' }]}>
                  <Input.TextArea placeholder="Your Message" rows={6} size="large" />
                </Form.Item>
                <Form.Item>
                  <Button type="primary" htmlType="submit" style={buttonStyle} icon={<SendOutlined />} size="large" block>
                    Send Message
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </Content>
  );
};

export default Contact;