import React, { useEffect } from "react";
import "../Home/HomePage.css";
import background from "../Images/image-4.webp";

const About = () => {

  return (
    <div className="container-fluid about-section text-center" style={{backgroundColor:"#8abcccfa"}}>
      <div>
        <h2 className="fw-bold mb-2 text-uppercase">
          About us &nbsp;
          {/* <i className="fas fa-lightbulb" style={{ color: "green" }}></i> */}
        </h2>
        <br />
      </div>
      <div className="row">
        <div className="col-5" style={{ textAlign: "justify",marginLeft:"70px" }}>
          <p>
            We are a team of 5 people who have developed this{" "}
            <b>Employee Project Mapping System.</b>
            Employee project mapping system is a web portal for employees to
            find the right project in the company. Employees can view company
            projects and select a project based on their skillset and also
            attempt quizzes and access study resources. The portal will also
            help managers to effectively view and shortlist employees based on
            their skillset and resume. The portal allows administrators to
            perform necessary CRUD operations and change employee project
            mapping.
            <br /><br></br>
            We belive in advancement and regular upgradation with every
            advancing day.
            <br />
            This project is developed using REACT JS as frontend and Spring boot
            REST as backend.
          </p>
        </div>
         <div className="col-5" >
        <img src={background} ></img>
      </div>
      </div>
     
    </div>
  );
};

export default About;
