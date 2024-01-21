import logo from './logo.svg';
import './App.css';
import  NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Skills from './components/Home';
import Projects from './components/Home';

export default function App() {
  return (
    <div id="app-container">
        <NavBar />
      <main id="content-wrap">
        <Home />
        <Skills />
        <Projects />
      </main>
        <Footer />
    </div>
  );
}
