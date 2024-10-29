// src/components/Skills.js
import React from 'react';
import { Container, Typography, Box, Chip } from '@mui/material';

const Skills = () => {
    const skills = [
        'Python', 'Java', 'Scala', 'JavaScript', 'HTML', 'CSS', 'Angular', 'ReactJS', 'Spring Boot', 'Django', 'AWS', 'Snowflake', 'SQL', 'Tableau', 'Power BI'
    ];

    return (
        <section id="skills" className="skills-section">
            <Container>
                <Typography variant="h3" sx={{ fontFamily: 'serif', fontWeight: 'bold', mb: 4 }}>
                    Skills
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
                    {skills.map((skill, index) => (
                        <Chip label={skill} key={index} sx={{ fontSize: '1rem', padding: '0.5rem 1rem' }} />
                    ))}
                </Box>
            </Container>
        </section>
    );
};

export default Skills;
