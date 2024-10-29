// src/components/Blog.js
import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const Blog = () => {
    const blogPosts = [
        {
            title: 'How AI is Transforming Healthcare',
            content: 'In this article, I discuss how AI is used for early detection, personalized medicine, and streamlining healthcare processes.'
        },
        {
            title: 'Data Engineering: Best Practices',
            content: 'This blog covers essential best practices for data engineering, focusing on ETL processes, data quality, and scalability.'
        }
    ];

    return (
        <section id="blog" className="section blog-section">
            <div className="container">
                <h2>Blog</h2>
                <Grid container spacing={4}>
                    {blogPosts.map((post, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {post.title}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {post.content}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </section>
    );
};

export default Blog;
