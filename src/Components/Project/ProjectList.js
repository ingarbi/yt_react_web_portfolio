import React, { useState } from "react";
import "./Project.css";
import { FcExpand, FcCollapse } from "react-icons/fc";

const ProjectList = ({ name, des, projectLink, techUsed }) => {
  const [show, setShow] = useState(false);
  const handleShowAndCollpase = () => {
    setShow(!show);
  };

  return (
    <div
      className={show ? "project-list-opened project-list" : "project-list"}
      onClick={handleShowAndCollpase}
    >
      <div className="title-and-collapse-option">
        <h5>{name}</h5>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>

      <div className="description">
        {show ? <p>{des}</p> : <p>{des.substring(0, 50)}...</p>}
      </div>

      <div className="row">
        {techUsed &&
          techUsed.map((tech, index) => (
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="tech-used-in-project">
                <p>{tech.techname}</p>
              </div>
            </div>
          ))}
      </div>

      <div className="live-demo-button">
        <a href={projectLink} target="_blank" rel="noreferrer">
          Go to live Demo
        </a>
      </div>
    </div>
  );
};

export default ProjectList;
