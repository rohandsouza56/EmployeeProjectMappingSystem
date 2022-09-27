import React, { useEffect, useState } from "react";
import "./HomePage.css";
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router-dom";
// import { withRouter } from 'react-router-dom';
import { Link, Navigate, useNavigate } from "react-router-dom";





  



const HomePage = () => {
  // const history = withRouter();
  const navigate = useNavigate();

  function emplogin() {
    navigate("/employeelogin");
  }
  function adminlogin() {
    console.log("aaaaa");
    
     navigate("/login");
  }

  const email = window.sessionStorage.getItem("email");
  const [hideLoginButton, setHideLoginButton] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (email === null) {
      setHideLoginButton(true);
    } else {
      setHideLoginButton(false);
    }
  }, []);

  return (
    <>
      
      <section className="info-section">
        
       
        <div className="first-section"></div>
        <div className="first-section-info-box">
           <h6>
            <i>Welcome to Employee Project Mapping System</i>
          </h6>
          <p>
            {" "}
            Employee project mapping system is a web portal for employees to
            find the right project in the company.Employees can view company
            projects and select a project based on their skillset and also
            attempt quizzes and access study resources. The portal will also
            help managers to effectively view and shortlist employees based on
            their skillset and resume.The portal allows administrators to
            perform necessary CRUD operations and change employee project
            mapping.{" "}
          </p>
          {hideLoginButton && (
 
              <button className="registration-btn registration-btn2" onClick={adminlogin} className="btn btn-sm text-white">Admin Login</button>
         
          )}
          {hideLoginButton && (
          
              <button className="registration-btn registration-btn2" onClick={emplogin} className="btn btn-sm text-white">Employee Login</button>
           
          )}
        </div>
      </section>
    </>
  );
};

export default HomePage;
