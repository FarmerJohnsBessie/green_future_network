// src/pages/About.js
import React from 'react';
import {theme} from '../theme';

const About = () => {
    return (
        <div style={{backgroundColor: theme.accentColor, minHeight: '100vh'}}>
            <h1>About Us</h1>
            <p>We are high school students passionate about saving the Earth.</p>
        </div>
    );
};

export default About;
