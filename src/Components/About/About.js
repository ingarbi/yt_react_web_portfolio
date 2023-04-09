import React from "react";
import "./About.css";
import ProfilePicture from "../../Image/profile.jpg";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-image">
            <img src={ProfilePicture} alt="Profile thumbnail" />
          </div>
        </div>

        <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
          <div className="about-details">
            <div className="about-title">
              <h5>About Me</h5>
              <span className="line"></span>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Aliquam malesuada bibendum arcu vitae elementum. Morbi tempus
              iaculis urna id. Quis auctor elit sed vulputate mi sit amet. Elit
              ullamcorper dignissim cras tincidunt lobortis. Amet aliquam id
              diam maecenas ultricies. Volutpat odio facilisis mauris sit. Risus
              viverra adipiscing at in tellus integer feugiat scelerisque.
              Pulvinar sapien et ligula ullamcorper malesuada proin libero.
              Morbi tincidunt augue interdum velit euismod in. Sit amet
              porttitor eget dolor morbi non arcu risus quis. Adipiscing vitae
              proin sagittis nisl rhoncus mattis rhoncus urna neque. Orci eu
              lobortis elementum nibh tellus molestie nunc non. Dictum sit amet
              justo donec enim. Urna duis convallis convallis tellus id. Dolor
              purus non enim praesent elementum facilisis leo. Ipsum dolor sit
              amet consectetur adipiscing. Lectus arcu bibendum at varius vel
              pharetra vel turpis nunc. Amet est placerat in egestas erat
              imperdiet sed euismod.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
