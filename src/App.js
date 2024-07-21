import logo from './logo.svg';

import Header from '../src/components/layout/Header'
import './App.css';
import Home from './components/pages/Home';
import Footer from './components/layout/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <div className='page-wrap'>
        <Home />
        <Footer />
      </div>
    </div>
  );
}

export default App;
