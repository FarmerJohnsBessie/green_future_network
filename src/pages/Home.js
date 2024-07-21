import React, {useEffect} from 'react';
import {Layout, Typography, Row, Col, Card, Button, Statistic, Avatar, List, Timeline} from 'antd';
import {
    CloudOutlined,
    BugOutlined,
    UserOutlined,
    DownOutlined,
    SunOutlined,
    CameraOutlined,
    EnvironmentOutlined,
    TeamOutlined
} from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ReactTyped} from 'react-typed';
import CountUp from 'react-countup';
import {useInView} from 'react-intersection-observer';
import '../css/Home.css';
import {useNavigate} from "react-router-dom";

import model from '../static/photos/model.jpg';

const {Content} = Layout;
const {Title, Paragraph} = Typography;

const theme = {
    primaryColor: '#2ecc71',
    secondaryColor: '#0f8342',
    accentColor: '#3498db',
    textColor: '#333333',
    lightTextColor: '#ffffff',
};

const heroStyle = {
    minHeight: '100vh',
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
    background: 'linear-gradient(180deg, #dddddd, #ffffff)',
};

const cardStyle = {
    height: '100%',
    borderRadius: '20px',
    boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
    transition: 'all 0.5s ease',
    overflow: 'hidden',
};

const buttonStyle = {
    marginTop: '40px',
    background: `linear-gradient(45deg, ${theme.accentColor}, #2980b9)`,
    borderColor: theme.accentColor,
    fontSize: '20px',
    height: '60px',
    padding: '0 50px',
    boxShadow: '0 8px 20px rgba(52, 152, 219, 0.3)',
    transition: 'all 0.5s ease',
};


const Home = () => {

    useEffect(() => {
        AOS.init({
            duration: 1500,
            once: true,
            easing: 'ease-out-cubic',
        });
    }, []);

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate('/features');
    }

    const features = [
        {
            icon: SunOutlined,
            title: "Smart Watering System",
            description: "Provides the perfect amount of water based on temperature, humidity, and sunlight."
        },
        {
            icon: CameraOutlined,
            title: "AI-Powered Monitoring",
            description: "Identifies weeds and potential plant diseases, providing timely care instructions."
        },
        {
            icon: EnvironmentOutlined,
            title: "Eco-Friendly Solution",
            description: "Reduces water waste and promotes sustainable urban gardening practices."
        },
        {
            icon: CloudOutlined,
            title: "Weather Integration",
            description: "Adapts to local weather conditions for optimal plant care."
        },
    ];

    const impacts = [
        {icon: UserOutlined, title: "Happy Gardeners", value: 10000, color: theme.primaryColor},
        {icon: CloudOutlined, title: "Water Saved (Gallons)", value: 500000, color: theme.secondaryColor},
        {icon: BugOutlined, title: "Plant Diseases Prevented", value: 25000, color: theme.accentColor},
    ];

    const reviews = [
        {
            name: "John Doe",
            avatar: "https://randomuser.me/api/portraits/men/1.jpg",
            review: "Smart Garden has revolutionized my gardening experience. I never thought I could grow such beautiful plants with so little effort!"
        },
        {
            name: "Jane Smith",
            avatar: "https://randomuser.me/api/portraits/women/2.jpg",
            review: "As a busy professional, I always wanted a garden but never had the time. Smart Garden made it possible, and now I have fresh vegetables year-round!"
        },
        {
            name: "Mike Johnson",
            avatar: "https://randomuser.me/api/portraits/men/3.jpg",
            review: "The AI-powered disease detection has saved my plants multiple times. It's like having a professional gardener at your fingertips!"
        },
    ];

    return (
        <Layout>
            <Content>
                <div style={heroStyle}>
                    <div className="hero-background"/>
                    <div data-aos="fade-up" data-aos-duration="2000">
                        <Title style={{
                            color: theme.lightTextColor,
                            fontSize: '72px',
                            marginBottom: '30px',
                            fontWeight: 'bold'
                        }}>
                            Welcome to Gardien
                        </Title>
                        <Title level={2} style={{
                            color: theme.lightTextColor,
                            marginBottom: '50px',
                            fontSize: '40px',
                            fontWeight: 'normal'
                        }}>
                            <ReactTyped
                                strings={[
                                    "Effortless Gardening",
                                    "AI-Powered Plant Care",
                                    "Water-Saving Technology",
                                    "Green Future for All"
                                ]}
                                typeSpeed={60}
                                backSpeed={40}
                                loop
                            />
                        </Title>
                        <Button
                            type="primary"
                            size="large"
                            style={buttonStyle}
                            className="get-started-button"
                            onClick={handleButtonClick}
                        >
                            Transform Your Garden Now
                        </Button>
                    </div>
                    <DownOutlined
                        style={{
                            color: theme.lightTextColor,
                            fontSize: '48px',
                            position: 'absolute',
                            bottom: '40px',
                            cursor: 'pointer',
                            animation: 'bounce 3s infinite',
                        }}
                        onClick={() => document.getElementById('content').scrollIntoView({behavior: 'smooth'})}
                    />
                </div>
                <div id="content" style={contentStyle}>
                    <Title level={2} style={{
                        textAlign: 'center',
                        marginBottom: '80px',
                        color: theme.textColor,
                        fontSize: '48px'
                    }}>Our Features</Title>
                    <Row gutter={[48, 48]}>
                        {features.map((feature, index) => (
                            <Col xs={24} md={12} lg={6} key={index}>
                                <Card
                                    style={cardStyle}
                                    hoverable
                                    data-aos="flip-left"
                                    data-aos-delay={index * 200}
                                    className="feature-card"
                                >
                                    <feature.icon
                                        style={{fontSize: '64px', color: theme.primaryColor, marginBottom: '20px'}}/>
                                    <Title level={3} style={{color: theme.textColor}}>{feature.title}</Title>
                                    <Paragraph style={{
                                        fontSize: '16px',
                                        color: theme.textColor,
                                        marginTop: '20px'
                                    }}>{feature.description}</Paragraph>
                                </Card>
                            </Col>
                        ))}
                    </Row>

                    <Row gutter={[48, 48]} style={{marginTop: '100px'}}>
                        <Col xs={24} md={12}>
                            <Title level={2} style={{color: theme.textColor, marginBottom: '40px'}}>How It Works</Title>
                            <Timeline>
                                <Timeline.Item color={theme.primaryColor}>Connect Smart Garden to your home
                                    Wi-Fi</Timeline.Item>
                                <Timeline.Item color={theme.secondaryColor}>Set up your plants in the mobile
                                    app</Timeline.Item>
                                <Timeline.Item color={theme.accentColor}>Let AI monitor and care for your
                                    plants</Timeline.Item>
                                <Timeline.Item color={theme.primaryColor}>Enjoy your thriving garden with minimal
                                    effort</Timeline.Item>
                            </Timeline>
                        </Col>
                        <Col xs={24} md={12}>
                            <img src={model} alt="Smart Garden in action" style={{
                                width: '100%',
                                borderRadius: '20px',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                            }}/>
                        </Col>
                    </Row>

                    <Title level={2} style={{
                        textAlign: 'center',
                        margin: '100px 0 80px',
                        color: theme.textColor,
                        fontSize: '48px'
                    }}>Our Impact</Title>
                    <Row gutter={[48, 48]}>
                        {impacts.map((stat, index) => {
                            // eslint-disable-next-line react-hooks/rules-of-hooks
                            const {ref, inView} = useInView({triggerOnce: true});

                            return (
                                <Col xs={24} md={8} key={index}>
                                    <Card
                                        style={{
                                            ...cardStyle,
                                            background: `linear-gradient(45deg, ${stat.color}, ${theme.accentColor})`
                                        }}
                                        data-aos="zoom-in-up"
                                        data-aos-delay={index * 200}
                                        className="impact-card"
                                        ref={ref}
                                    >
                                        <Statistic
                                            title={<span style={{
                                                fontSize: '24px',
                                                color: theme.lightTextColor
                                            }}>{stat.title}</span>}
                                            value={inView ? stat.value : 0}
                                            valueStyle={{
                                                color: theme.lightTextColor,
                                                fontSize: '48px',
                                                fontWeight: 'bold'
                                            }}
                                            prefix={<stat.icon style={{fontSize: '40px', marginRight: '10px'}}/>}
                                            formatter={(value) => (
                                                <CountUp end={value} separator="," duration={2.5}/>
                                            )}
                                        />
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>

                    <Row gutter={[48, 48]} style={{marginTop: '100px'}}>
                        <Col xs={24} md={12}>
                            <Title level={2} style={{color: theme.textColor, marginBottom: '40px'}}>About Us</Title>
                            <Paragraph style={{fontSize: '16px', color: theme.textColor}}>
                                We are a group of passionate high school students committed to creating innovative
                                solutions for a greener future.
                                Our Smart Garden project showcases our dedication to combating climate change and
                                promoting sustainable living.
                                By combining cutting-edge AI technology with efficient gardening practices, we aim to
                                make gardening accessible to everyone,
                                regardless of their experience or time constraints.
                            </Paragraph>
                            <List
                                itemLayout="horizontal"
                                dataSource={[
                                    'Committed to fighting climate change',
                                    'Promoting sustainable urban gardening',
                                    'Making gardening accessible to everyone',
                                    'Developing eco-friendly solutions for daily life'
                                ]}
                                renderItem={item => (
                                    <List.Item>
                                        <List.Item.Meta
                                            avatar={<TeamOutlined
                                                style={{color: theme.primaryColor, fontSize: '24px'}}/>}
                                            title={<span style={{color: theme.textColor}}>{item}</span>}
                                        />
                                    </List.Item>
                                )}
                            />
                        </Col>
                        <Col xs={24} md={12}>
                            <img src="https://via.placeholder.com/600x400" alt="Our team" style={{
                                width: '100%',
                                borderRadius: '20px',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.1)'
                            }}/>
                        </Col>
                    </Row>

                    <Title level={2} style={{
                        textAlign: 'center',
                        margin: '100px 0 80px',
                        color: theme.textColor,
                        fontSize: '48px'
                    }}>User Reviews</Title>
                    <Row gutter={[48, 48]}>
                        {reviews.map((user, index) => (
                            <Col xs={24} md={8} key={index}>
                                <Card
                                    style={cardStyle}
                                    data-aos="fade-up"
                                    data-aos-delay={index * 200}
                                    className="review-card"
                                >
                                    <Avatar size={80} src={user.avatar} style={{marginBottom: '20px'}}/>
                                    <Title level={4} style={{color: theme.textColor}}>{user.name}</Title>
                                    <Paragraph style={{
                                        fontSize: '16px',
                                        color: theme.textColor,
                                        marginTop: '20px'
                                    }}>"{user.review}"</Paragraph>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Content>
        </Layout>
    );
};

export default Home;
