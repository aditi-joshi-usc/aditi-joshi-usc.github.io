import React from 'react';
import './About.css';
import { Container, Typography, Box } from '@mui/material';

const About = () => {
    return (
        <section id="about" className="about-section">
            <Container>
                <Box display="flex" alignItems="center" flexWrap="wrap">
                    <Box flex="1" className="about-image-container">
                        
                        <img
                            src={`${process.env.PUBLIC_URL}/about2.jpg`}
                            alt="Aditi Joshi at Conference"
                            className="about-picture"
                        />
                    </Box>
                    <Box flex="2" sx={{ ml: { xs: 0, md: 4 }, mt: { xs: 4, md: 0 } }}>
                        <Typography variant="h3" sx={{ fontFamily: 'serif', fontWeight: 'bold' }}>
                            About Me
                        </Typography>
                        <Typography variant="body1" sx={{ mt: 2, fontSize: '1.1rem', lineHeight: 1.7 }}>
                            I’m Aditi Joshi, a driven data science professional with a passion for building AI-driven
                            solutions and scalable data systems. With a master’s in applied data science from USC and a
                            background in computer engineering, I bring hands-on experience from roles like Data
                            Engineering Intern at Sanofi, where I designed a Generative AI Q&A tool, and as a full-stack
                            developer at Citigroup, where I optimized legacy systems and built a monitoring tool to
                            streamline workflows.
                            <br /><br />
                            My technical expertise spans Python, machine learning, cloud computing, and web development
                            frameworks like React and Angular. I’m also well-versed in database management with tools
                            like SQL, MongoDB, and Snowflake, and actively apply my skills in projects focused on
                            interactive dashboard development, neuroimaging data analysis, and data privacy.
                            <br /><br />
                            I’m passionate about creating impactful digital experiences, combining my technical skills
                            with a keen eye for user needs and scalability. Outside of work, I’m an active member of the
                            Society of Women Engineers and enjoy mentoring, staying engaged in data science trends, and
                            pursuing personal growth through yoga and hiking.
                        </Typography>
                    </Box>
                </Box>
            </Container>
        </section>
    );
};

export default About;
