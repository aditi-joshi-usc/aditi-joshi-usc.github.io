// src/components/About.js
import React from 'react';
import './About.css';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
    return (
        <section id="about" className="about-section">
            <Container>
                <Box display="flex" alignItems="center" flexWrap="wrap">
                    <Box flex="1">
                        <img src={`${process.env.PUBLIC_URL}/about.jpg`} alt="Aditi Joshi Presentation" className="about-picture" />
                    </Box>
                    <Box flex="1" sx={{ ml: 4 }}>
                        <Typography variant="h3" sx={{ fontFamily: 'serif', fontWeight: 'bold' }}>
                            About Me
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, fontSize: '1.2rem', lineHeight: 1.7 }}>
                            I am a data science professional passionate about transforming data into impactful insights. With hands-on experience at Sanofi and Citigroup, I build data-driven solutions to solve problems in fintech and healthcare. I am currently pursuing a master's in Applied Data Science at USC, and I have worked extensively with tools like AWS, Snowflake, and machine learning models to provide scalable solutions.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </section>
    );
};

export default About;
