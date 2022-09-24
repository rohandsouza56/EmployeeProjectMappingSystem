import React, { useEffect, useState } from "react";
import "./HomePage.css";
import { Link } from "react-router-dom";



const HomePage = () => {
  const email = window.sessionStorage.getItem("email");
  const [hideRegisterButton, setHideRegisterButton] = useState(false);
  useEffect(() => {
    window.scrollTo(0, 0);
    // if (email === null) {
    //   setHideRegisterButton(true);
    // }
    // else {
    //   setHideRegisterButton(false);
    // }
  }, []);

  return (
    <>
      <section className="info-section container-fluid">
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
          {hideRegisterButton && (
            <Link
              className="registration-btn registration-btn1"
              to="/register/college"
            >
              <button className="btn btn-sm text-white">
                Admin Login
              </button>
            </Link>
          )}
          {hideRegisterButton && (
            <Link
              className="registration-btn registration-btn2"
              to="/register/student"
            >
              <button className="btn btn-sm text-white">
                Employee Login
              </button>
            </Link>
          )}
        </div>
      </section>
      
    </>
  );
};

export default HomePage;
