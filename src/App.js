import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Blogs from './pages/Blogs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const App = () => 
  <div className='App'>
    <Router>
      <Navbar />
      <TransitionGroup>
        <CSSTransition classNames="page" timeout={300}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/portfolio' element={<Home />} />
          <Route path='/experiences' element={<Experiences />} /> 
          <Route path='/blogs' element={<Blogs/>}/>

          <Route path='*' element={<PageNotFound/>}/>
        </Routes>
      </CSSTransition>
      </TransitionGroup>

      <Footer />
    </Router>
  </div>

export default App;
