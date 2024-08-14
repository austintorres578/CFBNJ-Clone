import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import logo from './logo.svg';
import Header from '../src/components/layout/Header'
import './App.css';
import Home from './components/pages/Home';
import MapPage from './components/pages/MapPage';
import Footer from './components/layout/Footer'

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <div className='page-wrap'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>
        <Footer />
      </div>
    </div>
    </Router>
  );
}

export default App;
