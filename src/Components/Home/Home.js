import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCV from "./cv.pdf";
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';


const Home = ({theme, changeTheme}) => {
  return (
    <div className="container-fluid home" id="home">

      <div className="theme-change" onClick={changeTheme}>
        {theme === 'light' ? (<p><BsFillMoonFill size={40} /></p>): (<BsFillSunFill size={40} />)}

      </div>

      <div className="container home-content">
        <h1>Hi I'm</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                "Python Developer",
                "Full Stack Developer",
                "Web Developer",
                "Just Programmer",
              ],
              autoStart: true,
              loop: true,
              delay: 100,
            }}
          />
        </h3>

        <div className="button-for-action">
          <div className="hire-me-button">Hire me</div>
          <div className="get-resume-button">
            <a href={MyCV} download="My_Resume.pdf">
              Get Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
