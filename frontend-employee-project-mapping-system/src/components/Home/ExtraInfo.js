import React from "react";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
  AiFillLinkedin,
  AiOutlineRight,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./ExtraInfo.css";

const ExtraInfo = () => {
  const navigate = useNavigate();
  let showHome = () => {
    navigate("/");
  };
  let showColleges = () => {
    navigate("/colleges");
  };

  let showCourses = () => {
    navigate("/courses");
  };

  let showAbout = () => {
    navigate("/about");
  };
  let showEvent = () => {
    navigate("/events");
  };
  return (
    <section className=" extra-info-section text-white ">
      <div className="extra-info-section-left">
        <h3>About Us</h3>
        <ul className="extra-info-section-list">
          <li>Phone : +123 116-9990</li>
          <li>Email : epms@email.com</li>
          <li>Address : 456, Maharastra, INDIA</li>
          <div className="social-sites-logo">
            <div className="twitter-logo">
              <AiFillTwitterCircle />
            </div>
            <div className="facebook-logo">
              <BsFacebook />
            </div>
            <div className="instagram-logo">
              <AiFillInstagram />
            </div>
            <div className="youtube-logo">
              <AiFillYoutube />
            </div>
            <div className="linkedin-logo">
              <AiFillLinkedin />
            </div>
          </div>
        </ul>
      </div>

      <div className="extra-info-section-middle">
        <h3>Useful Links</h3>
        <ul className="extra-info-section-list">
          <li onClick={showHome}>
            <AiOutlineRight /> Home
          </li>
          <li onClick={showAbout}>
            <AiOutlineRight /> About
          </li>
          <li onClick={showColleges}>
            <AiOutlineRight /> Team
          </li>
          <li onClick={showCourses}>
            <AiOutlineRight /> Contact Us
          </li>
        </ul>
      </div>

       <div className="extra-info-section-middle">
        <h3>Our Projects</h3>
        <ul className="extra-info-section-list">
           <li>
              <span>Spring Boot</span>
             
            </li>
            <li>
              <span>React Js</span>
             
            </li>
            <li>
              <span>bootstrap</span>
             
            </li>
            <li>
              <span>Java</span>
              
            </li>
        </ul>
      </div>

       
      <div className="extra-info-section-right">
        <h3>Opening Hours</h3>
        <div className="extra-info-section-right-inner">
          <ul className="extra-info-section-list time-table">
            <li>
              <span>Sat-Sun</span>
              <span>09am - 05pm</span>
            </li>
            <li>
              <span>Mon-Tue</span>
              <span>09am - 05pm</span>
            </li>
            <li>
              <span>Wed</span>
              <span>09am - 05pm</span>
            </li>
            <li>
              <span>Thu</span>
              <span>09am - 05pm</span>
            </li>
            <li>
              <span>Fri</span>{" "}
              <span
                style={{
                  backgroundColor: "var(--green-color)",
                  padding: "3px 7px",
                  borderRadius: "10px",
                }}
              >
                Closed
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExtraInfo;
