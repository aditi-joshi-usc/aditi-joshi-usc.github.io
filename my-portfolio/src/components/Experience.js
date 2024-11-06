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
            period: 'Aug 2023 - May 2025'
        },
        {
            title: 'Data Engineering Intern',
            subtitle: 'Designed and prototyped a Generative AI Q&A system to enhance user interaction with Sanofi\'s Snowflake database, enabling seamless conversion of natural language queries into SQL in the digital R&D data products team. Leveraged AWS cloud tools, including Bedrock, Titan Embeddings, Athena, S3, and OpenSearch, to build an architecture supporting LLM-driven query generation, storage, and data manipulation. Conducted model selection experiments, evaluating LLMs (Claude v2, v2.1, v3 Haiku, and Sonnet) to optimize response accuracy, while applying structured prompt engineering techniques. This setup facilitated efficient text-to-SQL transformation, allowing users to retrieve contextualized insights from complex datasets. Insights gained underscored the importance of prompt clarity and model alignment for accurate SQL outputs. Future developments involve enhanced data visualization, secured data access, and integrated guardrails to refine the system further.',
            icon: <WorkIcon />,
            period: 'June 2024 - Aug 2024'
        },
        {
            title: 'Technology Analyst - Citigroup',
            subtitle: 'Collaborated with the Foreign Exchange and Local Markets Application Stability team to modernize a legacy application by migrating its codebase to a microservices architecture using Java, SQL, and Angular. Actively contributed to CI/CD pipeline development, integrating Agile methodologies to enhance team productivity and application reliability. Additionally, designed and implemented a standalone report monitoring tool, automating 30% of manual processes and providing business analysts with efficient, real-time monitoring capabilities. This initiative significantly reduced manual workload, improving operational efficiency and aligning with the team\'s application stability goals',
            icon: <WorkIcon />,
            period: 'Jul-2022 - Jul 2023'
        },
        {
            title: 'Summer Analyst - Citigroup',
            subtitle: 'Developed a production-grade desktop reconciliation tool to support business analysts in integrity testing by comparing existing business logic with newly adopted logic. This tool streamlined data validation processes, increasing efficiency by 50%. Designed to access and batch-process financial data from three APIs, the application displays and allows for downloading results for each batch, enhancing user control and transparency. Presented the tool\'s functionality and impact to over 30 senior executives, resulting in a full-time job offer in recognition of its operational value and effectiveness.',
            icon: <WorkIcon />,
            period: 'May 2021 - Jul 2021'
        },
        {
            title: 'Cummins college of Engineering for Women',
            subtitle: 'Bachelor\'s, Computer Engineering',
            icon: <WorkIcon />,
            period: 'Aug 2018 - May 2022'
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
