import React from "react";
import { TbBrandTelegram } from "react-icons/tb";
import "./Contact.css";

const Contact = () => {
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
              <input type="text" className="form-control" />
            </div>

            <div className="contact-form">
              <label htmlFor="" className="form-label">
                Email:
              </label>
              <input type="email" className="form-control" />
            </div>

            <div className="contact-form">
              <label htmlFor="" className="form-label">
                Job Type:
              </label>
              <select name="" id="" className="custom-select-tag">
                {/* <option value="" autoFocus>------------------</option> */}
                <option value="">Full-time</option>
                <option value="">Part-time</option>
                <option value="">Period-time</option>
              </select>
            </div>

            <div className="contact-form">
              <label htmlFor="" className="form-label">
                Message:
              </label>
              <textarea rows={5} className="form-control"></textarea>
            </div>

            <div className="button-submit">
              <p>
                Send <TbBrandTelegram size={25} />
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
