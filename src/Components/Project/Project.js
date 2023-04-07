import React from "react";
import ProjectList from "./ProjectList";

const Project = () => {
  const data = [
    {
      name: "Project 1",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquam malesuada bibendum arcu vitae elementum. Morbi tempus iaculis urna id. Quis auctor elit sed vulputate mi sit amet",
      projectLink: "https://github.com/",
      techUsed: [
        {
          techname: "Node Js",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Next Js",
        },
      ],
    },
    {
      name: "Project 2",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquam malesuada bibendum arcu vitae elementum. Morbi tempus iaculis urna id. Quis auctor elit sed vulputate mi sit amet",
      projectLink: "https://github.com/",
      techUsed: [
        {
          techname: "Node Js",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Next Js",
        },
      ],
    },
    {
      name: "Project 3",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquam malesuada bibendum arcu vitae elementum. Morbi tempus iaculis urna id. Quis auctor elit sed vulputate mi sit amet",
      projectLink: "https://github.com/",
      techUsed: [
        {
          techname: "Node Js",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Next Js",
        },
      ],
    },
    {
      name: "Project 4",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquam malesuada bibendum arcu vitae elementum. Morbi tempus iaculis urna id. Quis auctor elit sed vulputate mi sit amet",
      projectLink: "https://github.com/",
      techUsed: [
        {
          techname: "Node Js",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Next Js",
        },
      ],
    },
    {
      name: "Project 5",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquam malesuada bibendum arcu vitae elementum. Morbi tempus iaculis urna id. Quis auctor elit sed vulputate mi sit amet",
      projectLink: "https://github.com/",
      techUsed: [
        {
          techname: "Node Js",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Next Js",
        },
      ],
    },
    {
      name: "Project 6",
      des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquam malesuada bibendum arcu vitae elementum. Morbi tempus iaculis urna id. Quis auctor elit sed vulputate mi sit amet",
      projectLink: "https://github.com/",
      techUsed: [
        {
          techname: "Node Js",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Next Js",
        },
      ],
    },
  ];

  return (
    <div className="container">
      <div className="section-title">
        <h5>Projects</h5>
        <span className="line"></span>
      </div>

      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            {/* <ProjectList name={item.name} /> */}
            <ProjectList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
