// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container, Switch } from '@mui/material';
import './Header.css';

const Header = ({ toggleDarkMode }) => {
    return (
        <AppBar position="static" className="header" elevation={0}>
            <Container>
                <Toolbar disableGutters>
                    <Typography variant="h6" className="header-title">
                        Aditi Joshi
                    </Typography>
                    <nav className="nav-buttons">
                        <Button color="inherit" href="#home" className="nav-button">Home</Button>
                        <Button color="inherit" href="#projects" className="nav-button">Projects</Button>
                        <Button color="inherit" href="#experience" className="nav-button">Experience</Button>
                        <Button color="inherit" href="#about" className="nav-button">About Me</Button>
                        <Button color="inherit" href="#skills" className="nav-button">Skills</Button>
                        <Button color="inherit" href={`${process.env.PUBLIC_URL}/Aditi-Joshi-Resume.pdf`} target="_blank" className="nav-button">
                            Resume
                        </Button>
                    </nav>
                    <Switch onChange={toggleDarkMode} color="default" />
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
