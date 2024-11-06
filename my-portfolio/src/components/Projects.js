import React, { useState } from 'react';
import { Container, Typography, Box, Chip, Grid, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';

const Projects = () => {
    const [selectedTechStack, setSelectedTechStack] = useState([]);
    const [selectedSkills, setSelectedSkills] = useState([]);
    const [selectedProject, setSelectedProject] = useState(null);

    const techStackOptions = ['Python', 'Java', 'React', 'SQL', 'AWS', 'JavaScript','Relational Database', 'NoSQL', 'Pandas', 'Django', 'MongoDB'];
    const skillsOptions = ['Machine Learning', 'Data Visualization', 'Full Stack', 'Data Engineering', 'Research', 'Database Management', 'Data Modeling', 'Differential Privacy'];

    const projects = [
        {
            title: 'Using ML for Early Prediction of Conduct Disorder',
            description: 'Led advanced data preprocessing for the ABCD MRI dataset (11,000+ adolescents) and the ABIDE dataset under the guidance of Prof. Anita Penkova at USC. Focused on developing state-of-the-art machine learning models for early diagnosis and intervention in conduct disorder, utilizing neuroimaging data to identify predictive biomarkers. This work aims to drive early and precise intervention strategies, contributing to pioneering research in mental health diagnostics.',
            techStack: ['Python', 'Machine Learning'],
            skills: ['Data Engineering', 'Research']
        },
        {
            title: 'Predictive Analysis of Boston Crime Rates',
            description:'Led a 3-person team in executing comprehensive data cleansing procedures, addressing missing values, outliers, duplicates, and errors to ensure data integrity. Conducted exploratory data analysis using graphical techniques, uncovering patterns and trends in crime data. Developed crime prediction models using regression and random forest algorithms, which facilitated data-driven decision-making and led to the discovery of six key insights. This work strengthened the dataset’s reliability and enhanced its utility for strategic planning.',
            techStack: ['Python', 'Pandas'],
            skills: ['Data Analysis', 'Exploratory Data Analysis']
        },
        {
            title: 'File System-Based Relational and a NoSQL Database System',
            description:'Spearheaded the development of an optimized file system-based relational database using Python and MySQL, enhancing data retrieval and storage efficiency. Engineered a high-performance NoSQL system with MongoDB and Python, advancing data management capabilities to support scalable, unstructured data storage. These systems significantly improved data accessibility and processing speed, establishing robust foundations for versatile data handling.',
            techStack: ['Python', 'Relational Database', 'NoSQL'],
            skills: ['Database Management', 'Data Modeling']
        },
        {
            title: 'IBM Differential Privacy on Genomic Datasets',
            description:'Led a research project focused on genetic data privacy, applying differential privacy techniques to safeguard sensitive information. Developed an accessible web portal using Python and Django, allowing users to interact with a disease prediction model implemented with and without differential privacy. This work demonstrated the trade-offs between privacy and model accuracy, highlighting the potential of privacy-preserving techniques in healthcare data. Received recognition with awards at state-level competitions and international project events, standing out among 250+ global teams.',
            techStack: ['Python', 'Django', 'React', 'MongoDB' ],
            skills: ['Differential Privacy', 'Research', 'Data Visualization', 'Machine Learning']
        },
        {
            title: 'Seminar Presentation: Hadoop Ecosystems',
            description: 'Presented Hadoop\'s big data storage, processing, access, parallel processing, and resource management functionalities. Explored applications provided by Hadoop ecosystem components in healthcare, retail, sentiment analysis, financial trading, and forecasting through case studies with tools Apache Spark and Kafka.',
            techStack: ['Apache Spark', 'Apsche Kafka' ],
            skills: ['Hadoop Ecosystem']

        }

    ];

    const handleFilterClick = (filterType, filter) => {
        if (filterType === 'techStack') {
            setSelectedTechStack(prev => prev.includes(filter) ? prev.filter(item => item !== filter) : [...prev, filter]);
        } else if (filterType === 'skills') {
            setSelectedSkills(prev => prev.includes(filter) ? prev.filter(item => item !== filter) : [...prev, filter]);
        }
    };

    const handleCardClick = (project) => {
        setSelectedProject(project);
    };

    const handleClose = () => {
        setSelectedProject(null);
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
                            <Card sx={{ height: '100%', cursor: 'pointer' }} onClick={() => handleCardClick(project)}>
                                <CardContent>
                                    <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
                                        {project.title}
                                    </Typography>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography variant="subtitle2">Tech Stack:</Typography>
                                        {project.techStack.map((tech, idx) => (
                                            <Chip key={idx} label={tech} size="small" sx={{ mr: 1, mt: 1 }} />
                                        ))}
                                    </Box>
                                    <Box sx={{ mt: 2 }}>
                                        <Typography variant="subtitle2">Skills:</Typography>
                                        {project.skills.map((skill, idx) => (
                                            <Chip key={idx} label={skill} size="small" sx={{ mr: 1, mt: 1 }} />
                                        ))}
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>

                {selectedProject && (
                    <Dialog open={true} onClose={handleClose}>
                        <DialogTitle>{selectedProject.title}</DialogTitle>
                        <DialogContent dividers sx={{ maxHeight: '400px', overflowY: 'auto' }}>
                            <Typography variant="body1" sx={{ mb: 2 }}>
                                {selectedProject.description}
                            </Typography>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="subtitle2">Tech Stack:</Typography>
                                {selectedProject.techStack.map((tech, idx) => (
                                    <Chip key={idx} label={tech} size="small" sx={{ mr: 1, mt: 1 }} />
                                ))}
                            </Box>
                            <Box sx={{ mt: 2 }}>
                                <Typography variant="subtitle2">Skills:</Typography>
                                {selectedProject.skills.map((skill, idx) => (
                                    <Chip key={idx} label={skill} size="small" sx={{ mr: 1, mt: 1 }} />
                                ))}
                            </Box>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Close
                            </Button>
                        </DialogActions>
                    </Dialog>
                )}
            </Container>
        </section>
    );
};

export default Projects;
