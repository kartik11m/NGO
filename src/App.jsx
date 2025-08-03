import React from 'react'
import Navbar from './components/Navbar'
import Home from './Home_Pages/Home';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger , SplitText } from 'gsap/all'
gsap.registerPlugin(ScrollTrigger , SplitText);

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
