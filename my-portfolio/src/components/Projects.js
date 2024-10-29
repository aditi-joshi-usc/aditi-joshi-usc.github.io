// src/components/Projects.js
import React, { useState } from 'react';
import { Container, Typography, Box, Chip, Grid, Card, CardContent } from '@mui/material';

const Projects = () => {
    const [selectedTechStack, setSelectedTechStack] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);

    const techStackOptions = ['Python', 'Java', 'React', 'SQL', 'AWS', 'JavaScript'];
    const skillsOptions = ['Machine Learning', 'Data Visualization', 'Full Stack', 'Data Engineering'];

    const projects = [
        {
            title: 'Generative AI Q&A App',
            description: 'Developed a Q&A app using Snowflake and AWS to translate natural language into SQL queries.',
            techStack: ['Python', 'SQL', 'AWS'],
            skills: ['Machine Learning', 'Data Engineering']
        },
        {
            title: 'Conduct Disorder & Autism Prediction',
            description: 'Data preprocessing and algorithmic comparison for autism detection.',
            techStack: ['Python', 'Machine Learning'],
            skills: ['Data Engineering']
        }
    ];

    const handleFilterClick = (filterType, filter) => {
        if (filterType === 'techStack') {
            setSelectedTechStack(prev => prev.includes(filter) ? prev.filter(item => item !== filter) : [...prev, filter]);
        } else if (filterType === 'skills') {
            setSelectedSkills(prev => prev.includes(filter) ? prev.filter(item => item !== filter) : [...prev, filter]);
        }
    };

    const filteredProjects = projects.filter(project =>
        (selectedTechStack.length === 0 || selectedTechStack.some(tech => project.techStack.includes(tech))) &&
        (selectedSkills.length === 0 || selectedSkills.some(skill => project.skills.includes(skill)))
    );

    return (
        <section id="projects" className="projects-section">
            <Container>
                <Typography variant="h3" sx={{ fontFamily: 'serif', fontWeight: 'bold', mb: 4 }}>
                    Projects
                </Typography>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6">Filter by Tech Stack:</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
                        {techStackOptions.map((tech, index) => (
                            <Chip
                                key={index}
                                label={tech}
                                onClick={() => handleFilterClick('techStack', tech)}
                                color={selectedTechStack.includes(tech) ? 'primary' : 'default'}
                            />
                        ))}
                    </Box>
                </Box>

                <Box sx={{ mb: 4 }}>
                    <Typography variant="h6">Filter by Skills:</Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mt: 1 }}>
                        {skillsOptions.map((skill, index) => (
                            <Chip
                                key={index}
                                label={skill}
                                onClick={() => handleFilterClick('skills', skill)}
                                color={selectedSkills.includes(skill) ? 'primary' : 'default'}
                            />
                        ))}
                    </Box>
                </Box>

                <Grid container spacing={4}>
                    {filteredProjects.map((project, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <Card sx={{ height: '100%' }}>
                                <CardContent>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                        {project.title}
                                    </Typography>
                                    <Typography variant="body1" sx={{ mt: 2 }}>
                                        {project.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default Projects;
