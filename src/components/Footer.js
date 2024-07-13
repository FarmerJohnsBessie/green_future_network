// src/components/Footer.js
import React from 'react';
import { Layout, Row, Col, Typography } from 'antd';
import { MailOutlined, PhoneOutlined, EnvironmentOutlined, LinkedinOutlined, InstagramOutlined } from '@ant-design/icons';

const { Footer } = Layout;
const { Title, Paragraph } = Typography;

const theme = {
  primaryColor: '#2ecc71',
  secondaryColor: '#0f8342',
  accentColor: '#3498db',
  textColor: '#333333',
  lightTextColor: '#ffffff',
};

const footerStyle = {
  background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
  padding: '40px 10%',
  color: theme.lightTextColor,
};

const iconStyle = {
  fontSize: '24px',
  marginRight: '10px',
};

const AppFooter = () => {
  return (
    <Footer style={footerStyle}>
      <Row gutter={[24, 24]}>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: theme.lightTextColor }}>Contact Us</Title>
          <Paragraph>
            <MailOutlined style={iconStyle} />
            info@smartgarden.com
          </Paragraph>
          <Paragraph>
            <PhoneOutlined style={iconStyle} />
            +1 (555) 123-4567
          </Paragraph>
          <Paragraph>
            <EnvironmentOutlined style={iconStyle} />
            123 Green St, Eco City, EC 12345
          </Paragraph>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: theme.lightTextColor }}>Social Media</Title>
          <Paragraph>
            <LinkedinOutlined style={iconStyle} />
            LinkedIn
          </Paragraph>
          <Paragraph>
            <InstagramOutlined style={iconStyle} />
            Instagram
          </Paragraph>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: theme.lightTextColor }}>Quick Links</Title>
          <Paragraph>Home</Paragraph>
          <Paragraph>About Us</Paragraph>
          <Paragraph>Products</Paragraph>
          <Paragraph>Contact</Paragraph>
        </Col>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: theme.lightTextColor }}>Newsletter</Title>
          <Paragraph>Subscribe to our newsletter for updates and tips on sustainable gardening.</Paragraph>
          {/* Add a newsletter subscription form here */}
        </Col>
      </Row>
      <Row justify="center" style={{ marginTop: '40px' }}>
        <Col>
          <Paragraph style={{ color: theme.lightTextColor }}>
            Smart Garden ©{new Date().getFullYear()} Created by High School Students for a Greener Future
          </Paragraph>
        </Col>
      </Row>
    </Footer>
  );
};

export default AppFooter;