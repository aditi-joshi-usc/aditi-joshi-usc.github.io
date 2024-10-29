// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Switch } from '@mui/material';
import { Link } from 'react-router-dom';


const Header = ({ toggleDarkMode }) => {
    const handleScroll = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return (
        <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: '1px solid #ccc', paddingY: '10px' }}>
            <Container>
                <Toolbar disableGutters>
                    <Typography variant="h6" sx={{ flexGrow: 1, fontFamily: 'serif' }}>
                        Aditi Joshi
                    </Typography>
                    <Button color="inherit" component={Link} to="/">
                        Home
                    </Button>
                    <Button color="inherit" component={Link} to="/projects">
                        Projects
                    </Button>
                    <Button color="inherit" component={Link} to="/experience">
                        Experience
                    </Button>
                    <Button color="inherit" onClick={() => handleScroll('about')}>
                        About Me
                    </Button>
                    <Button color="inherit" onClick={() => handleScroll('skills')}>
                        Skills
                    </Button>
                    <Button color="inherit" href={`${process.env.PUBLIC_URL}/Aditi-Joshi-Resume.pdf`} target="_blank">
                        Resume
                    </Button>
                    <Switch onChange={toggleDarkMode} color="default" />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
