import React from "react";
import './App.css';
import  NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router id="app-container">
      <header>
        <NavBar />
      </header>
        <Routes id="content-wrap">
          <Route path="/home" element={<Home />} />
          <Route path="/skills" element={<Skills />} /> 
          <Route path="/projects" element={<Projects />} /> 
        </Routes>
        <footer>
          <Footer />
        </footer>
    </Router>
  );
}
