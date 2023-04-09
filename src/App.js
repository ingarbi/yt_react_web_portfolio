import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import About from './Components/About/About'
import TechStack from './Components/TechStack/TechStack'
import Project from './Components/Project/Project'
import WorkExperience from './Components/WorkExperience/WorkExperience'
import Education from './Components/Education/Education'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'

import ScrollToTop from "react-scroll-to-top";
import "./App.css"

const App = () => {
  return (
    <>
    <Sidebar />
    <About />
    <TechStack />
    <Project />
    <WorkExperience />
    <Education />
    <Testimonial />
    <Contact />
    <ScrollToTop smooth color='white' style={{borderRadius: "75px", backgroundColor: "blueviolet"}}/>
    </>
  )
}

export default App