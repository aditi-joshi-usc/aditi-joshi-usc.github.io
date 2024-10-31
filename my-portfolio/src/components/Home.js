// src/components/Home.js
import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import './Home.css';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <Container>
                <Box className="home-content" sx={{ textAlign: 'center', py: 6 }}>
                    <Typography variant="h2" sx={{ fontFamily: 'serif', mb: 4 }}>
                        Hello, I'm Aditi.
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 4 }}>
                        I am a forward-focused and dedicated data engineer specializing in building robust data pipelines, AI-driven solutions, and cloud computing optimizations to solve real-world challenges in fintech and healthcare.
                    </Typography>
                    <Button variant="contained" color="secondary" href={`${process.env.PUBLIC_URL}/Aditi-Joshi-Resume.pdf`} target="_blank" sx={{ mt: 2 }}>
                        Download Resume
                    </Button>
                </Box>
            </Container>
        </section>
    );
};

export default Home;
