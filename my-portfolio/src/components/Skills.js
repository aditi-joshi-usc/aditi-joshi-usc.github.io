// src/components/Skills.js
import React from 'react';
import { Container, Typography, Grid, Card, CardContent } from '@mui/material';
import { FaPython, FaAws, FaReact, FaHtml5, FaJs } from 'react-icons/fa';
import { SiTensorflow, SiAzuredevops, SiTableau, SiGooglecharts, SiSqlite } from 'react-icons/si';
import './Skills.css';

const skills = [
    {
        name: 'Data Engineering',
        technologies: ['Python', 'SQL', 'ETL Pipelines'],
        icon: <FaPython size={40} color="#4B8BBE" />,
    },
    {
        name: 'Machine Learning',
        technologies: ['Scikit-learn', 'TensorFlow', 'Keras'],
        icon: <SiTensorflow size={40} color="#FF6F00" />,
    },
    {
        name: 'Cloud Computing',
        technologies: ['AWS (S3, EC2, Lambda)', 'Azure'],
        icon: <FaAws size={40} color="#FF9900" />,
    },
    {
        name: 'Data Visualization',
        technologies: ['Tableau', 'D3.js', 'Google Charts'],
        icon: <SiTableau size={40} color="#E97627" />,
    },
    {
        name: 'Web Development',
        technologies: ['React', 'HTML/CSS', 'JavaScript'],
        icon: <FaReact size={40} color="#61DBFB" />,
    }
];

const Skills = () => {
    return (
        <section id="skills" className="skills-section">
            <Container>
                <Typography variant="h3" align="center" sx={{ mb: 4, fontFamily: 'serif' }}>
                    Skills
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    {skills.map((skill, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Card className="skill-card" variant="outlined" sx={{ textAlign: 'center' }}>
                                <CardContent>
                                    <div className="skill-icon">
                                        {skill.icon}
                                    </div>
                                    <Typography variant="h5" sx={{ mt: 2 }}>
                                        {skill.name}
                                    </Typography>
                                    <ul className="skill-list">
                                        {skill.technologies.map((tech, i) => (
                                            <li key={i}>{tech}</li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
};

export default Skills;
