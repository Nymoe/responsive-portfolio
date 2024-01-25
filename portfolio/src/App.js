import React from "react";
import './App.css';
import  NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Skills from './components/Home';
import Projects from './components/Home';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    <Router id="app-container">
      <NavBar />
        <Routes id="content-wrap">
          <Route path="/home" element={<Home />} />
          {/* <Route path="/skills" element={<Skills />} /> */}
        </Routes>
      <Footer />
    </Router>
   
  );
}
