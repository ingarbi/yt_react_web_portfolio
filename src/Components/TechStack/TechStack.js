import React from 'react'
import "./TechStack.css"

const TechStack = () => {
    const data = [
        {
            name: "Full Stack Developer"
        },
        {
            name: "Python"
        },
        {
            name: "Django"
        },
        {
            name: "Flask"
        },
        {
            name: "DRF"
        },
        {
            name: "FastAPI"
        },
        {
            name: "JavaScript"
        },
        {
            name: "Typescript"
        },
        {
            name: "Next JS"
        },
        {
            name: "Mongo DB"
        },
        {
            name: "GitHub"
        },
        {
            name: "Docker"
        },
        {
            name: "React"
        },
    ]

  return (
    <div className='container tech-stack-section'>

        <div className='section-title'>
            <h5>Tech Stack</h5>
            <span className="line"></span>
        </div>

        <div className='row'>
            {data.map((item, index) =>(
                <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12'>
                    <div className='tech-content'>
                        <p>{item.name}</p>
                    </div>
                </div>
            ))}
        </div>

    </div>
  )
}

export default TechStack