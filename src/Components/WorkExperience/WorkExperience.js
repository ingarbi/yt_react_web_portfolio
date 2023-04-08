import React from 'react'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./WorkExperience.css"
import { MdWork } from "react-icons/md";


const WorkExperience = () => {

    const data = [
        {
          companyName: "Google",
          position: "FT Developer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquam malesuada bibendum arcu vitae elementum. Morbi tempusiaculis urna id. Quis auctor elit sed vulputate mi sit amet. Elitullamcorper dignissim cras tincidunt lobortis.",
          year: "2017-2018",
          techskills: [
            {
              techName: "JS",
            },
            {
              techName: "Python",
            },
            {
              techName: "React Js",
            },
          ],
        },
        {
          companyName: "VK",
          position: "FT Developer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquam malesuada bibendum arcu vitae elementum. Morbi tempusiaculis urna id. Quis auctor elit sed vulputate mi sit amet. Elitullamcorper dignissim cras tincidunt lobortis.",
          year: "2018-2019",
          techskills: [
            {
              techName: "JS",
            },
            {
              techName: "Python",
            },
            {
              techName: "React Js",
            },
          ],
        },
        {
          companyName: "Youtube",
          position: "FT Developer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquam malesuada bibendum arcu vitae elementum. Morbi tempusiaculis urna id. Quis auctor elit sed vulputate mi sit amet. Elitullamcorper dignissim cras tincidunt lobortis.",
          year: "2019-2020",
          techskills: [
            {
              techName: "JS",
            },
            {
              techName: "Python",
            },
            {
              techName: "React Js",
            },
          ],
        },
        {
          companyName: "Yandex",
          position: "FT Developer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquam malesuada bibendum arcu vitae elementum. Morbi tempusiaculis urna id. Quis auctor elit sed vulputate mi sit amet. Elitullamcorper dignissim cras tincidunt lobortis.",
          year: "2020-2021",
          techskills: [
            {
              techName: "JS",
            },
            {
              techName: "Python",
            },
            {
              techName: "React Js",
            },
          ],
        },
        {
          companyName: "Facebook",
          position: "FT Developer",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua.Aliquam malesuada bibendum arcu vitae elementum. Morbi tempusiaculis urna id. Quis auctor elit sed vulputate mi sit amet. Elitullamcorper dignissim cras tincidunt lobortis.",
          year: "2022-2023",
          techskills: [
            {
              techName: "JS",
            },
            {
              techName: "Python",
            },
            {
              techName: "React Js",
            },
          ],
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
    <div className='container work-experience-section'>
        <div className="section-title">
        <h5>WorkExperience</h5>
        <span className="line"></span>
      </div>
    
<VerticalTimeline lineColor={colors[0]}>
    {data.map((item, index) =>(
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: colors[index], color: '#fff' }}
        contentArrowStyle={{ borderRight: `7px solid  ${colors[index]}` }}
        date={item.year}
        dateClassName="date-year"
        iconStyle={{ background: colors[index], color: '#fff' }}
        icon={<MdWork />}
        key={index}
      >
        <h3 className="vertical-timeline-element-title">{item.companyName}</h3>
        <h5 className="vertical-timeline-element-subtitle">{item.position}</h5>

        <div className='row'>
            {item.techskills.map((tech, index)=>(
                <div className="col-xl-4 col-lg-3 col-md-6 col-sm-12" key={index}>
                <div className="tech-skills">
                  <p>{tech.techName}</p>
                </div>
              </div>
            ))}
        </div>

        <p>
          {item.description}
        </p>
      </VerticalTimelineElement>
    ))}
  
  
</VerticalTimeline>

    </div>
  )
}

export default WorkExperience