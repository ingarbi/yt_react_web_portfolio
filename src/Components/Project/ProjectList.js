import React from "react";
import "./Project.css";
import { FcExpand, FcCollapse } from "react-icons/fc";

const ProjectList = ({ name, des, projectLink, techUsed }) => {
  return (
    <div className="project-list">

      <div className="title-and-collapse-option">
        <h5>{name}</h5>
        <p>
          <FcExpand size={20} />
        </p>
      </div>

      <div className="row">
        {techUsed && techUsed.map((tech, index) => (
            <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className="tech-used-in-project">
                    <p>{tech.techname}</p>
                </div>
            </div>
        ))}        
      </div>

      <div className="live-demo-button">
        <a href={projectLink} target="_blank">Go to live Demo</a>
      </div>

            <p>{des.substring(0, 50)}</p>

    </div>
  );
};

export default ProjectList;
