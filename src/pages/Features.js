import React, {useEffect} from 'react';
import {Layout, Typography, Card, Button, Row, Col} from 'antd';
import {ExperimentOutlined, CloudOutlined, BugOutlined, LineChartOutlined, BarChartOutlined} from '@ant-design/icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styled from 'styled-components';

import camera from '../static/photos/camera.jpg';
import lightSensor from '../static/photos/light-sensor.jpg';
import soilMoistureSensor from '../static/photos/soil-moisture-sensor.jpg';
import tempHumiditySensor from '../static/photos/temp-humidity-sensor.jpg';
import goodLeaf from '../static/photos/good.jpg';
import badLeaf from '../static/photos/bad.jpg';

const {Content} = Layout;
const {Title, Paragraph} = Typography;

// Updated color scheme
const theme = {
    primaryColor: '#2ecc71',
    secondaryColor: '#27ae60',
    accentColor: '#3498db',
    textColor: '#333333',
    lightTextColor: '#ffffff',
};

// Styled components for enhanced design
const StyledLayout = styled(Layout)`
    background: #ffffff;
    font-family: 'Poppins', sans-serif;
`;

const HeroSection = styled.div`
    background: linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor});
    padding: 100px 50px;
    text-align: center;
    color: ${theme.lightTextColor};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        //background: url('path/to/leaf-pattern.png') repeat;
        opacity: 0.1;
    }
`;

const StyledCard = styled(Card)`
    background: ${theme.cardBackground};
    border-radius: 15px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
    }
`;

const IconWrapper = styled.div`
    font-size: 48px;
    color: ${theme.primaryColor};
    text-align: center;
    margin-bottom: 20px;
    background: linear-gradient(135deg, ${theme.primaryColor}, ${theme.secondaryColor});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`;

const SensorSection = styled.div`
    padding: 50px 0;
    background: #f0f9f6;
    position: relative;
    overflow: hidden;

    &::after {
        content: '';
        position: absolute;
        bottom: -50px;
        right: -50px;
        width: 200px;
        height: 200px;
        background: ${theme.primaryColor};
        opacity: 0.1;
        border-radius: 50%;
    }
`;

const VideoSection = styled.div`
    padding: 50px 0;
    background: ${theme.accentColor};
    color: ${theme.lightTextColor};
    position: relative;
    overflow: hidden;

    &::before {
        content: '';
        position: absolute;
        top: -30px;
        left: -30px;
        width: 100px;
        height: 100px;
        background: ${theme.primaryColor};
        opacity: 0.2;
        border-radius: 50%;
    }
`;

const CTASection = styled.div`
    padding: 50px 0;
    text-align: center;
    background-position: 0 0, 30px 30px;
`;

const StyledButton = styled(Button)`
    background: ${theme.primaryColor};
    border-color: ${theme.primaryColor};
    font-size: 18px;
    height: auto;
    padding: 10px 30px;
    margin-top: 20px;
    transition: all 0.3s ease;

    &:hover {
        background: ${theme.secondaryColor};
        border-color: ${theme.secondaryColor};
        transform: scale(1.05);
    }
`;

const AISection = styled(SensorSection)`
    background: #e8f6f3;
`;

const ImageContainer = styled.div`
    width: 80%;
    margin: 0 auto;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
`;

const StyledList = styled.ul`
    list-style-type: none;
    padding-left: 0;

    li {
        margin-bottom: 10px;
        padding-left: 30px;
        position: relative;

        &:before {
            content: '✓';
            position: absolute;
            left: 0;
            color: ${theme.primaryColor};
            font-weight: bold;
        }
    }
`;

const features = [
    {
        title: "Smart Watering System",
        description: "Optimizes water usage based on soil moisture, weather conditions, and plant needs.",
        icon: <ExperimentOutlined/>,
        link: "smart-watering"
    },
    {
        title: "Rainwater Management",
        description: "Collects and distributes rainwater efficiently to reduce water waste.",
        icon: <CloudOutlined/>
    },
    {
        title: "Plant Disease Detection",
        description: "Uses AI to identify early signs of plant diseases and provides treatment recommendations.",
        icon: <BugOutlined/>,
        link: "disease-detection"
    },
    {
        title: "Weed Identification",
        description: "Detects and alerts you about weed growth in your garden.",
        icon: <BugOutlined/>
    },
    {
        title: "Plant Health Monitoring",
        description: "Tracks various factors affecting plant health, including light, temperature, and nutrients.",
        icon: <LineChartOutlined/>,
        link: "health-monitoring"
    },
    {
        title: "Water Usage Tracking",
        description: "Provides detailed analytics on your garden's water consumption.",
        icon: <BarChartOutlined/>
    }
];


const sensors = [
    {
        name: "Soil Moisture Sensor",
        description: "High-precision sensor that measures soil moisture content, ensuring optimal watering for each plant. This sensor is essential for maintaining the perfect moisture levels, preventing both overwatering and underwatering, which can be detrimental to plant health.",
        image: soilMoistureSensor
    },
    {
        name: "Light Sensor",
        description: "Advanced photosensor that measures light intensity and duration to optimize plant growth. Proper light exposure is crucial for photosynthesis, and this sensor helps ensure plants receive the ideal amount of light throughout the day.",
        image: lightSensor
    },
    {
        name: "Temperature and Humidity Sensor",
        description: "Monitors environmental conditions to maintain the perfect climate for your plants. It tracks both temperature and humidity levels, which are critical for plant health and growth, and helps create the optimal environment for different types of plants.",
        image: tempHumiditySensor
    },
    {
        name: "AI-Powered Camera",
        description: "Identifies plant diseases, pests, and weeds using cutting-edge machine learning algorithms. This camera provides real-time monitoring and early detection of issues, allowing for prompt action to protect and maintain plant health.",
        image: camera
    }
];

const Features = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <StyledLayout>
            <Content>
                <HeroSection>
                    <Title level={1} style={{color: theme.lightTextColor, fontSize: '4rem', marginBottom: '20px'}}
                           data-aos="fade-up">
                        Features
                    </Title>
                    <Paragraph style={{fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto'}} data-aos="fade-up"
                               data-aos-delay="200">
                        Revolutionizing home gardening with AI-powered solutions for a sustainable future.
                    </Paragraph>
                </HeroSection>

                {/* Main Features Section */}
                <div style={{padding: '50px 0', maxWidth: '1200px', margin: '0 auto'}}>
                    <Title level={2} style={{textAlign: 'center', color: theme.primaryColor, marginBottom: '50px'}}>
                        Key Features
                    </Title>
                    <Row gutter={[32, 32]}>
                        {features.map((feature, index) => (
                            <Col xs={24} sm={12} lg={8} key={index}>
                                <StyledCard hoverable data-aos="fade-up" data-aos-delay={index * 200}>
                                    <IconWrapper>{feature.icon}</IconWrapper>
                                        <Title level={3} style={{
                                            color: theme.secondaryColor,
                                            textAlign: 'center'
                                        }}>{feature.title}</Title>
                                    <Paragraph
                                        style={{fontSize: '16px', color: theme.textColor, textAlign: 'center'}}>
                                        {feature.description}
                                    </Paragraph>
                                </StyledCard>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* Sensor Showcase Section */}
                <SensorSection id="smart-watering">
                    <div style={{maxWidth: '1200px', margin: '0 auto'}}>
                        <Title level={2} style={{textAlign: 'center', color: theme.primaryColor, marginBottom: '50px'}}>
                            Advanced Sensor Technology
                        </Title>
                        {sensors.map((sensor, index) => (
                            <Row key={index} gutter={32} style={{marginBottom: '50px'}}
                                 data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                                <Col xs={24} md={12} order={index % 2 === 0 ? 1 : 2}>
                                    <img src={sensor.image} alt={sensor.name} style={{
                                        width: '100%',
                                        borderRadius: '15px',
                                        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)'
                                    }}/>
                                </Col>
                                <Col xs={24} md={12} order={index % 2 === 0 ? 2 : 1}
                                     style={{display: 'flex', alignItems: 'center'}}>
                                    <div>
                                        <Title level={3} style={{color: theme.secondaryColor}}>{sensor.name}</Title>
                                        <Paragraph style={{fontSize: '16px', color: theme.textColor}}>
                                            {sensor.description}
                                        </Paragraph>
                                    </div>
                                </Col>
                            </Row>
                        ))}
                    </div>
                </SensorSection>

                <AISection id="disease-detection">
                    <div style={{maxWidth: '1200px', margin: '0 auto'}}>
                        <Title level={2} style={{textAlign: 'center', color: theme.primaryColor, marginBottom: '50px'}}>
                            AI-Powered Plant Health Monitoring
                        </Title>
                        <Row gutter={32} style={{marginBottom: '50px'}} data-aos="fade-up">
                            <Col xs={24} md={12}>
                                <ImageContainer>
                                    <img src={badLeaf} alt="Leaf Disease Detection" style={{width: '100%'}}/>
                                </ImageContainer>
                            </Col>
                            <Col xs={24} md={12} style={{display: 'flex', alignItems: 'center'}}>
                                <div>
                                    <Title level={3} style={{color: theme.secondaryColor}}>Real-time Leaf Health
                                        Analysis</Title>
                                    <Paragraph style={{fontSize: '16px', color: theme.textColor, lineHeight: '1.8'}}>
                                        Our advanced AI system uses computer vision to analyze leaf health in real-time.
                                        By detecting subtle changes in leaf color, texture, and shape, it can identify
                                        early signs of disease, nutrient deficiencies, or pest infestations before they
                                        become visible to the naked eye.
                                    </Paragraph>
                                    <Paragraph style={{fontSize: '16px', color: theme.textColor, lineHeight: '1.8'}}>
                                        The system can differentiate between healthy and unhealthy parts of the leaf,
                                        providing precise diagnostics for targeted treatment. This feature helps
                                        gardeners take proactive measures to maintain plant health and prevent the
                                        spread of diseases.
                                    </Paragraph>
                                </div>
                            </Col>
                        </Row>

                        <Row gutter={32} style={{marginBottom: '50px'}} data-aos="fade-up">
                            <Col xs={24} md={12} order={2}>
                                <ImageContainer>
                                    <img src={goodLeaf} alt="Detailed Leaf Analysis" style={{width: '100%'}}/>
                                </ImageContainer>
                            </Col>
                            <Col xs={24} md={12} order={1} style={{display: 'flex', alignItems: 'center'}}>
                                <div>
                                    <Title level={3} style={{color: theme.secondaryColor}}>Comprehensive Leaf Health
                                        Metrics</Title>
                                    <Paragraph style={{fontSize: '16px', color: theme.textColor, lineHeight: '1.8'}}>
                                        Our AI doesn't just detect issues – it provides detailed health metrics for each
                                        leaf. The system analyzes various aspects such as:
                                    </Paragraph>
                                    <StyledList>
                                        <li>Overall leaf health percentage</li>
                                        <li>Specific areas of concern on the leaf</li>
                                        <li>Potential causes of leaf damage or discoloration</li>
                                        <li>Recommendations for treatment or care</li>
                                    </StyledList>
                                    <Paragraph style={{
                                        fontSize: '16px',
                                        color: theme.textColor,
                                        lineHeight: '1.8',
                                        marginTop: '20px'
                                    }}>
                                        This granular level of detail allows for precise care tailored to each plant's
                                        needs, ensuring optimal growth and health throughout your garden.
                                    </Paragraph>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </AISection>

                {/* Product Demonstration Section */}
                <VideoSection>
                    <div style={{maxWidth: '1200px', margin: '0 auto'}}>
                        <Title level={2}
                               style={{color: theme.lightTextColor, textAlign: 'center', marginBottom: '30px'}}>
                            See Smart Garden in Action
                        </Title>
                        <Row justify="center">
                            <Col xs={24} md={16}>
                                <div style={{
                                    background: '#ddd',
                                    height: '400px',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    fontSize: '24px',
                                    color: '#666',
                                    borderRadius: '15px',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)'
                                }}>
                                    <iframe
                                        width="100%"
                                        height="400"
                                        src="https://www.youtube.com/embed/qeeTQUg0TxM"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Smart Garden Video"
                                    ></iframe>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </VideoSection>

                {/* Call to Action */}
                <CTASection>
                    <Title level={2} style={{color: theme.textColor}}>Ready to Transform Your Garden?</Title>
                    <StyledButton type="primary" size="large">
                        Get Started Now
                    </StyledButton>
                </CTASection>
            </Content>
        </StyledLayout>
    );
};

export default Features;
