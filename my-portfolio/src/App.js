// src/App.js
import React, { useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css'; // Import CSS for flex layout

function App() {
    const [darkMode, setDarkMode] = useState(false); // Light mode by default

    const theme = createTheme({
        palette: {
            mode: darkMode ? 'dark' : 'light',
            primary: {
                main: '#002147', // Dark navy
            },
            secondary: {
                main: '#f4d03f', // Light gold for contrast
            },
            background: {
                default: darkMode ? '#121212' : '#f9f9f9', // Light cream for light mode
                paper: darkMode ? '#1e1e1e' : '#ffffff',
            },
            text: {
                primary: darkMode ? '#ffffff' : '#002147', // Dark blue for readability
            }
        },
        typography: {
            fontFamily: 'Lato, Arial, sans-serif',
            body1: {
                fontSize: '1rem',
                lineHeight: 1.7,
            },
            h2: {
                fontWeight: 700,
            },
            h3: {
                fontWeight: 600,
            },
        }
    });

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <div className="App"> {/* Main container for flex layout */}
                <Router>
                    <Header toggleDarkMode={toggleDarkMode} />
                    <div className="main-content"> {/* Flex item to push footer down */}
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/skills" element={<Skills />} />
                            <Route path="/experience" element={<Experience />} />
                            <Route path="/projects" element={<Projects />} />
                        </Routes>
                    </div>
                    <Footer />
                </Router>
            </div>
        </ThemeProvider>
    );
}

export default App;
