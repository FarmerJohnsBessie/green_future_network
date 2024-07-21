// src/pages/About.js
import React, { useEffect } from 'react';
import { Layout, Typography, Row, Col, Card, Avatar, List, Button } from 'antd';
import {
  RocketOutlined,
  GlobalOutlined,
  BulbOutlined,
  CheckCircleOutlined,
  CloudOutlined,
  CameraOutlined,
  BugOutlined,
  MobileOutlined
} from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
// import {theme} from '../theme';

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const theme = {
  primaryColor: '#2ecc71',
  secondaryColor: '#27ae60',
  accentColor: '#3498db',
  textColor: '#333333',
  lightTextColor: '#ffffff',
};

const About = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const teamMembers = [
        { name: 'Elliott Lascelle ', role: 'CAD Designer/Presentation coordinator', avatar: 'https://randomuser.me/api/portraits/men/1.jpg' },
        { name: 'Vicki Nkurunziza', role: 'Outreach & Marketing Specialist', avatar: 'https://randomuser.me/api/portraits/women/2.jpg' },
        { name: 'Naayeli Prakash', role: 'Outreach & Marketing Specialist', avatar: 'https://randomuser.me/api/portraits/men/3.jpg' },
        { name: 'Aaron Sit', role: 'Product Designer', avatar: 'https://randomuser.me/api/portraits/women/4.jpg' },
        { name: 'Pranay Ranjan', role: 'Machine Learning Specialist', avatar: 'https://randomuser.me/api/portraits/men/5.jpg' },
        { name: 'Aniket Sethi', role: 'Machine Learning Specialist', avatar: 'https://randomuser.me/api/portraits/women/6.jpg' },
        { name: 'Clement Zhou', role: 'Website Specialist', avatar: 'https://randomuser.me/api/portraits/men/91.jpg' },
        { name: 'Thomas Tan', role: 'Website Specialist', avatar: 'https://randomuser.me/api/portraits/women/8.jpg' },
    ];

    const missionPoints = [
        'Develop innovative solutions for climate change',
        'Promote sustainable and efficient gardening practices',
        'Educate and empower individuals to contribute to a greener future',
        'Leverage AI and technology for environmental conservation',
    ];

    const features = [
        { title: "Smart Watering System", icon: CloudOutlined, color: theme.primaryColor },
        { title: "AI-Powered Plant Monitoring", icon: CameraOutlined, color: theme.secondaryColor },
        { title: "Disease and Weed Detection", icon: BugOutlined, color: theme.accentColor },
        { title: "User-Friendly Mobile App", icon: MobileOutlined, color: theme.primaryColor }
    ];

    const visionPoints = [
        "Empower individuals with effortless gardening solutions",
        "Promote eco-friendly practices in urban environments",
        "Leverage AI to optimize resource usage in agriculture",
        "Create a global community of tech-savvy gardeners"
    ];

    return (
        <Layout>
            <Content>
                <div style={{
                    background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                    padding: '100px 50px',
                    textAlign: 'center',
                    color: '#fff'
                }}>
                    <Title level={1} style={{ color: '#fff', fontSize: '4rem', marginBottom: '20px' }} data-aos="fade-up">
                        About Smart Garden
                    </Title>
                    <Paragraph style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto' }} data-aos="fade-up" data-aos-delay="200">
                        Green power, Pure potential
                    </Paragraph>
                </div>

                <div style={{ padding: '50px', background: '#f0f2f5' }}>
                    <Row gutter={[32, 32]}>
                        <Col span={24}>
                            <Card
                                hoverable
                                style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                bodyStyle={{ padding: '0' }}
                                data-aos="fade-up"
                            >
                                <Row>
                                    <Col xs={24} lg={8}>
                                        <div style={{
                                            background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                                            height: '100%',
                                            padding: '40px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center'
                                        }}>
                                            <Title level={2} style={{ color: '#fff', marginBottom: '20px' }}>Our Mission</Title>
                                            <Paragraph style={{ color: '#fff', fontSize: '1.1rem' }}>
                                                Revolutionizing gardening through AI-powered solutions for a sustainable and greener future.
                                            </Paragraph>
                                        </div>
                                    </Col>
                                    <Col xs={24} lg={16}>
                                        <div style={{ padding: '40px' }}>
                                            <List
                                                grid={{ gutter: 16, column: 2 }}
                                                dataSource={missionPoints}
                                                renderItem={(item, index) => (
                                                    <List.Item data-aos="fade-right" data-aos-delay={index * 100}>
                                                        <Card hoverable style={{ height: '100%', borderRadius: '15px', background: '#f9f9f9' }}>
                                                            <List.Item.Meta
                                                                avatar={<BulbOutlined style={{ color: theme.primaryColor, fontSize: '24px' }} />}
                                                                title={<span style={{ fontSize: '1.1rem', color: '#333' }}>{item}</span>}
                                                            />
                                                        </Card>
                                                    </List.Item>
                                                )}
                                            />
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col span={24}>
                            <Card
                                hoverable
                                style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                bodyStyle={{ padding: '40px' }}
                                data-aos="fade-up"
                            >
                                <Title level={2} style={{ color: theme.secondaryColor, marginBottom: '30px', textAlign: 'center' }}>Smart Garden Features</Title>
                                <Row gutter={[24, 24]}>
                                    {features.map((feature, index) => (
                                        <Col xs={24} sm={12} md={6} key={index}>
                                            <Card
                                                hoverable
                                                style={{ height: '100%', borderRadius: '15px', textAlign: 'center' }}
                                                data-aos="zoom-in"
                                                data-aos-delay={index * 100}
                                            >
                                                <feature.icon style={{ fontSize: '48px', color: feature.color, marginBottom: '20px' }} />
                                                <Title level={4}>{feature.title}</Title>
                                                <Paragraph>Optimizes gardening experience with cutting-edge technology.</Paragraph>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Card>
                        </Col>

                        <Col span={24}>
                            <Card
                                hoverable
                                style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                bodyStyle={{ padding: '0' }}
                                data-aos="fade-up"
                            >
                                <Row>
                                    <Col xs={24} lg={16}>
                                        <div style={{ padding: '40px' }}>
                                            <Title level={2} style={{ color: theme.secondaryColor, marginBottom: '20px' }}>Our Vision</Title>
                                            <Paragraph style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
                                                We envision a world where sustainable gardening is accessible to everyone, regardless of their experience or time constraints.
                                            </Paragraph>
                                            <List
                                                dataSource={visionPoints}
                                                renderItem={(item, index) => (
                                                    <List.Item data-aos="fade-right" data-aos-delay={index * 100}>
                                                        <List.Item.Meta
                                                            avatar={<CheckCircleOutlined style={{ color: theme.primaryColor, fontSize: '24px' }} />}
                                                            title={<span style={{ fontSize: '1.1rem', color: '#333' }}>{item}</span>}
                                                        />
                                                    </List.Item>
                                                )}
                                            />
                                        </div>
                                    </Col>
                                    <Col xs={24} lg={8}>
                                        <div style={{
                                            background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                                            height: '100%',
                                            padding: '40px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center'
                                        }}>
                                            <GlobalOutlined style={{ fontSize: '80px', color: '#fff', marginBottom: '20px' }} />
                                            <Title level={3} style={{ color: '#fff', textAlign: 'center' }}>Shaping the Future of Gardening</Title>
                                        </div>
                                    </Col>
                                </Row>
                            </Card>
                        </Col>

                        <Col span={24}>
                            <Card
                                hoverable
                                style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}
                                bodyStyle={{ padding: '40px' }}
                                data-aos="fade-up"
                            >
                                <Title level={2} style={{ color: theme.accentColor, marginBottom: '20px', textAlign: 'center' }}>Our Team</Title>
                                <Row gutter={[16, 16]}>
                                    {teamMembers.map((member, index) => (
                                        <Col xs={24} sm={12} md={6} key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
                                            <Card
                                                hoverable
                                                style={{ textAlign: 'center', borderRadius: '10px' }}
                                                cover={
                                                    <div style={{
                                                        background: `linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor})`,
                                                        padding: '20px'
                                                    }}>
                                                        <Avatar size={120} src={member.avatar} />
                                                    </div>
                                                }
                                            >
                                                <Title level={4} style={{ marginTop: '16px', marginBottom: '0' }}>{member.name}</Title>
                                                <Paragraph>{member.role}</Paragraph>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Card>
                        </Col>

                        <Col span={24} style={{ textAlign: 'center', marginTop: '32px' }} data-aos="fade-up">
                            <Title level={2} style={{ color: theme.textColor }}>Join Us in Creating a Greener Future</Title>
                            <Button type="primary" size="large" icon={<RocketOutlined />} style={{ marginTop: '16px', height: '50px', fontSize: '1.2rem', background: theme.primaryColor, borderColor: theme.primaryColor }}>
                                Learn More About Our Initiative
                            </Button>
                        </Col>
                    </Row>
                </div>
            </Content>
        </Layout>
    );
};

export default About;