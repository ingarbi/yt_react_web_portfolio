import React from 'react'
import "./Home.css"
import Typewriter from 'typewriter-effect';
import MyCV from "./cv.pdf"

const Home = () => {
  return (
    <div className='container-fluid home'>
      <div className='container home-content'>
        <h1>Hi I'm</h1>
        <h3>
        <Typewriter
          options={{
            strings: ['Python Developer', 'Full Stack Developer', 'Web Developer', 'Just Programmer'],
            autoStart: true,
            loop: true,
            delay: 100
          }}
        />
        </h3>

          <div className='button-for-action'>
            <div className='hire-me-button'>Hire me</div>
            <div className='get-resume-button'><a href={MyCV} download="My_Resume.pdf">Get Resume</a></div>
          </div>


      </div>
    </div>
  )
}

export default Home