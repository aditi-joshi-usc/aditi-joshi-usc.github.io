// src/components/Home.js
import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import './Home.css';
import Contact from './Contact';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <Container>
                {/* Introduction Section */}
                <Box sx={{ mb: 8 }}>
                    <Typography variant="h2" sx={{ fontFamily: 'serif', fontWeight: 'bold', mb: 4 }}>
                        Hello, I'm Aditi.
                    </Typography>
                    <Typography variant="h5" sx={{ mb: 4 }}>
                        I am a forward-focused and dedicated data engineer specializing in building robust data pipelines, AI-driven solutions, and cloud computing optimizations to solve real-world challenges in fintech and healthcare.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        sx={{ mb: 8 }}
                        href={`${process.env.PUBLIC_URL}/Aditi-Joshi-Resume.pdf`}
                        target="_blank"
                    >
                        Download Resume
                    </Button>
                </Box>

                {/* About Section */}
                <Box id="about" sx={{ mb: 8 }}>
                    <Typography variant="h3" sx={{ fontFamily: 'serif', fontWeight: 'bold', mb: 4 }}>
                        About Me
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                        I have a strong foundation in data engineering and cloud computing, with extensive experience in the healthcare and fintech sectors. My goal is to utilize AI-driven solutions to create impactful data strategies that provide meaningful business outcomes.
                    </Typography>
                </Box>

                {/* Skills Section */}
                <Box id="skills" sx={{ mb: 8 }}>
                    <Typography variant="h3" sx={{ fontFamily: 'serif', fontWeight: 'bold', mb: 4 }}>
                        Skills
                    </Typography>
                    <Typography variant="body1" sx={{ lineHeight: 1.7 }}>
                        <ul>
                            <li>Data Engineering: Python, SQL, ETL Pipelines</li>
                            <li>Machine Learning: Scikit-learn, TensorFlow, Keras</li>
                            <li>Cloud Computing: AWS (S3, EC2, Lambda), Azure</li>
                            <li>Data Visualization: Tableau, D3.js, Google Charts</li>
                            <li>Web Development: React, HTML/CSS, JavaScript</li>
                        </ul>
                    </Typography>
                </Box>

                {/* Contact Section */}
                <Box id="contact" sx={{ mb: 8 }}>
                    <Typography variant="h3" sx={{ fontFamily: 'serif', fontWeight: 'bold', mb: 4 }}>
                        Contact Me
                    </Typography>
                    <Contact />
                </Box>
            </Container>
        </section>
    );
};

export default Home;
