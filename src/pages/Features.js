// src/pages/Features.js
import React from 'react';
import { Layout, Typography, Card, Button, List } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const theme = {
  primaryColor: '#2ecc71',
  secondaryColor: '#27ae60',
  accentColor: '#3498db',
  textColor: '#333333',
  lightTextColor: '#ffffff',
};

const features = [
  {
    title: "Soil Moisture Detection",
    description: "Our advanced sensors constantly monitor soil moisture levels, ensuring your plants receive the perfect amount of water. No more guesswork or over-watering!"
  },
  {
    title: "Rainwater Management",
    description: "Smart Garden efficiently collects and distributes rainwater, reducing water waste and promoting sustainable gardening practices."
  },
  {
    title: "Disease Identification",
    description: "Using AI-powered image recognition, Smart Garden can detect early signs of plant diseases, allowing you to take action before it's too late."
  },
  {
    title: "Weed Detection",
    description: "Our system identifies and alerts you about weed growth, helping you maintain a healthy and beautiful garden with minimal effort."
  },
  {
    title: "Plant Health Monitoring",
    description: "Continuous monitoring of various factors affecting plant health, including light exposure, temperature, and nutrient levels."
  },
  {
    title: "Water Usage Tracking",
    description: "Keep track of your garden's water consumption with detailed analytics, helping you optimize water usage and reduce your environmental impact."
  }
];

const Features = () => {
  return (
    <Layout style={{ background: 'linear-gradient(180deg, #f9f9f9, #ffffff)' }}>
      <Content>
        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ padding: '50px 0', maxWidth: '1200px', margin: '0 auto' }}
        >
          <Title level={1} style={{ textAlign: 'center', color: theme.primaryColor, marginBottom: '50px' }}>
            Smart Garden Features
          </Title>
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card
                hoverable
                style={{
                  marginBottom: '30px',
                  borderRadius: '15px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                }}
              >
                <Title level={3} style={{ color: theme.secondaryColor }}>{feature.title}</Title>
                <Paragraph style={{ fontSize: '16px', color: theme.textColor }}>
                  {feature.description}
                </Paragraph>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* How It Works Section */}
        <div style={{ padding: '50px 0', background: theme.accentColor }}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            style={{ maxWidth: '1200px', margin: '0 auto' }}
          >
            <Title level={2} style={{ textAlign: 'center', color: theme.lightTextColor, marginBottom: '30px' }}>How It Works</Title>
            <List
              dataSource={[
                "Connect Smart Garden to your home Wi-Fi",
                "Set up your plants in the mobile app",
                "Let AI monitor and care for your plants",
                "Enjoy your thriving garden with minimal effort"
              ]}
              renderItem={(item) => (
                <List.Item style={{ borderBottom: 'none', padding: '10px 0' }}>
                  <Typography.Text style={{ color: theme.lightTextColor, fontSize: '18px' }}>
                    <CheckOutlined style={{ color: theme.primaryColor, marginRight: '10px' }} />
                    {item}
                  </Typography.Text>
                </List.Item>
              )}
            />
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{ padding: '50px 0', textAlign: 'center' }}
        >
          <Title level={2} style={{ color: theme.textColor }}>Ready to Transform Your Garden?</Title>
          <Button
            type="primary"
            size="large"
            style={{
              background: theme.primaryColor,
              borderColor: theme.primaryColor,
              fontSize: '18px',
              height: 'auto',
              padding: '10px 30px',
              marginTop: '20px'
            }}
          >
            Get Started Now
          </Button>
        </motion.div>
      </Content>
    </Layout>
  );
};

export default Features;