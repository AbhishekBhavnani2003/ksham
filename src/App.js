import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar' 
import Intro from './components/Intro' 
import Cards from './components/Cards' 
import Aboutus from './components/Aboutus' 
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (

  

    <Router>
      <div>
    <Navbar/>
      <Routes>
        <Route exact path="/" element={<Intro/>}></Route>
        <Route exact path="/intro" element={<Intro/>}></Route>
        <Route exact path="/cards" element={<Cards/>}></Route>
        <Route exact path="/about" element={<Aboutus/>}></Route>
        <Route exact path="/contact" element={<Contact/>}></Route>
        <Route exact path="/testimonial" element={<Testimonials/>}></Route>
      </Routes>
      </div>
    </Router>

  );
}

export default App;
