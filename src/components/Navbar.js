// src/components/Navbar.js
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { theme } from '../theme';

const Navbar = () => {
  return (
    <Menu mode="horizontal" style={{ backgroundColor: theme.lightColor }}>
      <Menu.Item key="home">
        <Link to="/">Home</Link>
      </Menu.Item>
      <Menu.Item key="features">
        <Link to="/features">Features</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about">About Us</Link>
      </Menu.Item>
      <Menu.Item key="contact">
        <Link to="/contact">Contact</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
