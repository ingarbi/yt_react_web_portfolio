import React from 'react'
import Sidebar from './Components/Sidebar/Sidebar'
import About from './Components/About/About'
import TechStack from './Components/TechStack/TechStack'
import Project from './Components/Project/Project'
import WorkExperience from './Components/WorkExperience/WorkExperience'

const App = () => {
  return (
    <>
    <Sidebar />
    <About />
    <TechStack />
    <Project />
    <WorkExperience />
    </>
  )
}

export default App