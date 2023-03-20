import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Schedule from './components/Schedule';
import Team from './components/Team';
import BlogDetail from './components/BlogDetail';
import Testimonial from './components/Testimonial';
import BlockGrid from './components/BlockGrid';
import Contact from './components/Contact';
import AllCourses from './components/AllCourses';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <br />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/team" element={<Team />} />
          <Route path="/testimonial" element={<Testimonial />} />
          <Route path="/blogDetail" element={<BlogDetail />} />
          <Route path="/blockGrid" element={<BlockGrid />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/allCourses" element={<AllCourses />} />
          <Route path="/register" element={<Register />} />
          
          
        </Routes>
        <br/>
        <Footer/>

      </div>
    </Router>

  );
}

export default App;
