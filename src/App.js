import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import About from './Components/About/About'
import TechStack from './Components/TechStack/TechStack'
import Project from './Components/Project/Project'
import WorkExperience from './Components/WorkExperience/WorkExperience'
import Education from './Components/Education/Education'
import Testimonial from './Components/Testimonial/Testimonial'

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
    </>
  )
}

export default App