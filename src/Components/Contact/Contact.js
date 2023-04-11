import React, { useState } from "react";
import { TbBrandTelegram } from "react-icons/tb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Contact.css";

const Contact = () => {
  const API = "http://localhost:8080/sendemail";

  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [jobtypes, setJobtypes] = useState();
  const [message, setMessage] = useState();

  const sendemailInfo = () => {
    fetch(API, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        jobtypes,
        message,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if(result.error){
          toast.error(result.error,{
            position: toast.POSITION.TOP_RIGHT,
            
          })
        
        }else{
          toast.success("Your Email has been sent",{
            position: toast.POSITION.TOP_RIGHT,
            
          })
          setName("")
          setEmail("")
          setJobtypes("")
          setMessage("")
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="contact-form-image">
            <img
              src="https://img.freepik.com/free-photo/flat-lay-concept-clipboard_23-2148102690.jpg?w=1380&t=st=1681037756~exp=1681038356~hmac=7a7034608aede4727ef0dac24312c59091eae13e27d17f52ecbddf3e9273f238"
              alt=""
            />
          </div>
        </div>

        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <div className="contac-form-design">
            <div className="text-center">
              <h5>Contact Me</h5>
            </div>
          </div>

          <form action="">
            <div className="contact-form">
              <label htmlFor="" className="form-label">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="contact-form">
              <label htmlFor="" className="form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="contact-form">
              <label htmlFor="" className="form-label">
                Job Type:
              </label>
              <select
                className="custom-select-tag"
                value={jobtypes}
                onChange={(e) => setJobtypes(e.target.value)}
              >
                {/* <option value="" autoFocus>------------------</option> */}
                <option>Full-time</option>
                <option >Part-time</option>
                <option >Period-time</option>
              </select>
            </div>

            <div className="contact-form">
              <label htmlFor="" className="form-label">
                Message:
              </label>
              <textarea
                rows={5}
                className="form-control"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            <div className="button-submit" onClick={sendemailInfo}>
              <p>
                Send <TbBrandTelegram size={25} />
              </p>
            </div>
          </form>
        </div>
      </div>

      <ToastContainer autoClose={8000} draggable
            hideProgressBar />
    </div>
  );
};

export default Contact;
