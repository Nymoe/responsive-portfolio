import logo from './logo.svg';
import './App.css';
import  NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';

function App() {
  return (
    <div id="app-container">
      <NavBar />
      <main id="content-wrap">
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App;
