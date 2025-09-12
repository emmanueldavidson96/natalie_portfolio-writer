import './App.css';
import Nav from './components/Nav';
import About from './pages/About';
import Home from './pages/Home';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import Portfolio from './pages/Portfolio';
import Testimonials from './pages/Testimonials';
import Contact from './pages/Contact';
import TestimonialSection from './components/TestimonialSection';


function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Nav />
        <Routes>
          {/* Home page or landing page */}
          <Route path='/' element={<Home />}/> 
          {/* About Page */}
          <Route path='/about' element={<About />}/>
          {/* Portfolio Page */}
          <Route path='/portfolio' element={<Portfolio />}/>
          {/* Testmonials Page */}
          <Route path='/testimonials' element={<Testimonials />}/>
          {/* Contact Us Page */}
          <Route path='/contact' element={<Contact />}/>
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
