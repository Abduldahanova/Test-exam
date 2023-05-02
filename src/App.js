import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer.js'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Category from './nav-pages/Category.js';
import Home from './nav-pages/Home.js';
import About from './nav-pages/About';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route path="/category" element={<Category/>} />
        </Routes>
      </Router>
      <Footer />
    </div>
  )
}

export default App;
