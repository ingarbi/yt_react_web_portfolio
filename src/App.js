import React, { createContext, useState } from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Project/Project";
import WorkExperience from "./Components/WorkExperience/WorkExperience";
import Education from "./Components/Education/Education";
import Testimonial from "./Components/Testimonial/Testimonial";
import Contact from "./Components/Contact/Contact";
import NavbarMobileView from "./Components/Sidebar/NavbarMobileView";

import ScrollToTop from "react-scroll-to-top";
import "./App.css";

export const ThemeContext = createContext(null)

const App = () => {

  const [theme, setTheme] = useState("light")
  const changeTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"))
  }

  

  return (
    <ThemeContext.Provider value={{theme, changeTheme}}>
      <div id={theme}>
      <NavbarMobileView />
      <Sidebar changeTheme={changeTheme} theme={theme} />
      <About />
      <WorkExperience />
      <TechStack />
      <Education />
      <Project />
      <Testimonial />
      <Contact />
      </div>



      <ScrollToTop
        smooth
        color="white"
        style={{ borderRadius: "75px", backgroundColor: "blueviolet" }}
      />
    </ThemeContext.Provider>
  );
};

export default App;
