import React from "react";
import "./SidebarList.css";
import profilepicture from "../../Image/profile.jpg";
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

const SidebarList = ({ expandSidebar }) => {
  return (
    <React.Fragment>
      {expandSidebar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={profilepicture} alt="" />
          </div>

          <ul>
            <li className="nav-item">
              <Link to="home" spy={true}>
                <FcHome size={25} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" spy={true} offset={-350}>
                <FcNightPortrait size={25} /> About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="workexperience" spy={true} offset={-350}>
                <FcFactory size={25} /> Work Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link to="techstack" spy={true} offset={-350}>
                <MdBiotech color="orange" size={25} /> Tech Stack
              </Link>
            </li>
            <li className="nav-item">
              <Link to="education" spy={true} offset={-350}>
                <MdCastForEducation size={25} color="yellow" /> Education
              </Link>
            </li>
            <li className="nav-item">
              <Link to="project" spy={true} offset={-350}>
                <FcTodoList size={25} /> Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="testimonial" spy={true} offset={-350}>
                <FcSalesPerformance size={25} /> Testimonial
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" spy={true} offset={-450}>
                <FcContacts size={25} /> Contacts
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items">
          <ul>
            <li className="nav-item">
              <Link to="home" spy={true}>
                <FcHome size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" spy={true} offset={-350}>
                <FcNightPortrait size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="workexperience" spy={true} offset={-350}>
                <FcFactory size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="techstack" spy={true} offset={-350}>
                <MdBiotech color="orange" size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="education" spy={true} offset={-350}>
                <MdCastForEducation size={25} color="yellow" />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="project" spy={true} offset={-350}>
                <FcTodoList size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="testimonial" spy={true} offset={-350}>
                <FcSalesPerformance size={25} />
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact" spy={true} offset={-450}>
                <FcContacts size={25} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SidebarList;
