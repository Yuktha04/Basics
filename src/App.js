// src/App.js
import React from 'react';
import './App.css';
import Dropdown from './Dropdown';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import About from './About';
import Contact from './Contact';

function App() {
    return (
        <Router>
            <div className="App">
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <h4>Dropdown Box Example</h4>
                <Dropdown />

            </div>
        </Router>
    );
}

export default App;
