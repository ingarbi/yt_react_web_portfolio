import React, { useState } from "react";
import "./NavbarMobileView.css";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FcHome,
  FcNightPortrait,
  FcTodoList,
  FcContacts,
  FcFactory,
  FcSalesPerformance,
} from "react-icons/fc";
import { MdBiotech } from "react-icons/md";
import { MdCastForEducation } from "react-icons/md";
import { Link } from "react-scroll";
import Switch from "react-switch";

const NavbarMobileView = ({theme, changeTheme}) => {
    const [open, setOpen] = useState(false)
    const handleClick = () =>{
        setOpen(!open)
    }
  return (
    <div className="mobile-view-navbar">
      <div className="navbar-header">
        <p>
          <GiHamburgerMenu size={25} onClick={handleClick}/>
        </p>
      </div>

      {open ? (      <div className="mobile-nav">
        <ul>
          <li className="nav-item-mobileview">
            <Link to="home" spy={true}>
              <FcHome size={25} /> Home
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link to="about" spy={true} offset={-350}>
              <FcNightPortrait size={25} /> About
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link to="workexperience" spy={true} offset={-350}>
              <FcFactory size={25} /> Work Experience
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link to="techstack" spy={true} offset={-350}>
              <MdBiotech color="orange" size={25} /> Tech Stack
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link to="education" spy={true} offset={-350}>
              <MdCastForEducation size={25} color="yellow" /> Education
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link to="project" spy={true} offset={-350}>
              <FcTodoList size={25} /> Projects
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link to="testimonial" spy={true} offset={-350}>
              <FcSalesPerformance size={25} /> Testimonial
            </Link>
          </li>
          <li className="nav-item-mobileview">
            <Link to="contact" spy={true} offset={-450}>
              <FcContacts size={25} /> Contacts
            </Link>
          </li>

          <li className="nav-item-mobileview">
            <Switch onChange={changeTheme} checked={theme==="light"} />
          </li>


        </ul>
      </div>) : null}


    </div>
  );
};

export default NavbarMobileView;
