import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Blogs from './pages/Blogs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';

const App = () => 
  <div className='App'>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/portfolio' element={<Home />} />
        <Route path='/experiences' element={<Experiences />} /> 
        <Route path='/blogs' element={<Blogs/>}/>

        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
      <Footer />
    </Router>
  </div>

export default App;
