import React from 'react'
import Navbar from './components/Navbar'
import Home from './Home_Pages/Home';
import About from './About_Pages/About';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger , SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger , SplitText);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
