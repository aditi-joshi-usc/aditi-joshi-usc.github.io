// src/components/Experience.js
import React from 'react';
import { Container, Typography, Box } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Experience = () => {
    const experiences = [
        {
            title: 'University of Southern California, Los Angeles, CA',
            subtitle: 'Master of Science, Applied Data Science',
            icon: <SchoolIcon />,
            period: 'Aug 2022 - May 2024'
        },
        {
            title: 'Research Assistant (VIIT), Pune, MH, India',
            subtitle: 'Worked on virtual try-on API for clothes by leveraging GANs',
            icon: <WorkIcon />,
            period: 'May 2021 - May 2022'
        },
        {
            title: 'Software Engineer - Blue Pearl Health Tech, Pune, MH, India',
            subtitle: 'Enhanced Report Tracking System for healthcare teams',
            icon: <WorkIcon />,
            period: 'Jan 2021 - Jul 2022'
        }
    ];

    return (
        <section id="experience" className="experience-section">
            <Container>
                <Typography variant="h3" sx={{ fontFamily: 'serif', fontWeight: 'bold', mb: 4 }}>
                    Experience
                </Typography>
                <Timeline position="alternate">
                    {experiences.map((exp, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot color="primary">{exp.icon}</TimelineDot>
                                {index !== experiences.length - 1 && <TimelineConnector />}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Box sx={{ p: 2 }}>
                                    <Typography variant="h6" sx={{ fontWeight: 'bold' }}>{exp.title}</Typography>
                                    <Typography variant="subtitle1">{exp.subtitle}</Typography>
                                    <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>{exp.period}</Typography>
                                </Box>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </Container>
        </section>
    );
};

export default Experience;
