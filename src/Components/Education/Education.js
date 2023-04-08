import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
import { FcGraduationCap } from "react-icons/fc";

const Education = () => {
  const data = [
    {
      name: "MGU",
      degree: "Bch in Software Eng",
      year: "2020-2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquam malesuada bibendum arcu vitae elementum. Morbi tempusiaculis urna id. Quis auctor elit sed vulputate mi sit amet. Elitullamcorper dignissim cras tincidunt lobortis.",
    },
    {
      name: "School N1",
      degree: "School Diploma",
      year: "2010-2020",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquam malesuada bibendum arcu vitae elementum. Morbi tempusiaculis urna id. Quis auctor elit sed vulputate mi sit amet. Elitullamcorper dignissim cras tincidunt lobortis.",
    },
  ];

  const colors = [
    "#FF00FF",
    "#000080",
    "#00FFFF",
    "#00FF00",
    "#86105B",
    "#000080",
    "#454545",
  ];

  return (
    <div className="container education">
      <div className="section-title">
        <h5>Education</h5>
        <span className="line"></span>
      </div>

      <VerticalTimeline lineColor={colors[0]}>
        {data.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: colors[index], color: "#fff" }}
            contentArrowStyle={{ borderRight: `7px solid  ${colors[index]}` }}
            date={item.year}
            dateClassName="date-year"
            iconStyle={{ background: colors[index], color: "#fff" }}
            icon={<FcGraduationCap />}
            key={index}
          >
            <h3 className="vertical-timeline-element-title">
              {item.name}
            </h3>
            <h5 className="vertical-timeline-element-subtitle">
              {item.degree}
            </h5>

            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Education;
