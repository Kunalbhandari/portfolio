import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Blogs from './pages/Blogs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => 
  <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Home />} />
        <Route path='/experiences' element={<Experiences />} /> 
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
      <Footer />
    </Router>
  </div>

export default App;
