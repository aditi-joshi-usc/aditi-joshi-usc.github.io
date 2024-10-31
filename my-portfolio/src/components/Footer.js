// src/components/Footer.js
import React from 'react';
import './Footer.css';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <p>Let's Connect!</p>
                <div className="social-icons">
                    <a href="mailto:aditi.jo2000@gmail.com" target="_blank" rel="noopener noreferrer">
                        <FaEnvelope />
                    </a>
                    <a href="https://linkedin.com/in/aditi-anant-joshi" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
                <p>&copy; 2024 Aditi Joshi. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
