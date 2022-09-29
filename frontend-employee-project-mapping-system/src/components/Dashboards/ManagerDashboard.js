import React, { useEffect, useState } from "react";
import { FaUserAlt, FaBlackTie } from "react-icons/fa";
import { FcList } from "react-icons/fc";
import { AiOutlineLogout, AiOutlineUnorderedList } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GrTechnology, GrDocumentPdf } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
import { RiLockPasswordFill } from "react-icons/ri";

import GetResource from "../Resources/GetResources";
import EmployeeProfile from "../Employees/EmployeeProfile";
import AttemptQuiz from "../Employees/AttemptQuiz";
import ChangePassword from "../Login/ChangePassword";
import EmployeeList from "../Employees/EmployeeList";
// import ProjectListEmployee from "../Projects/ProjectListEmployee";
import "./EmployeeDashboard.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import AddResume from "../Employees/AddResume";

import { MdQuiz } from "react-icons/md";
import AddSkills from "../Skills/AddSkill";
import AddTechnology from "../Technology/AddTechnology";

const ManagerDashboard = () => {
  // const [addDepartment, setAddDepartment] = useState(false);

  // const [addproject, setAddProject] = useState(false);

  const [employeelist, setEmployeeList] = useState(false);
  const [employeeProfile, setEmployeeProfile] = useState(true);
  const [getResource, setResource] = useState(false);
  const [addSkill, setAddSkill] = useState(false);
  const [attemptQuiz, setAttemptQuiz] = useState(false);
  const [changePassword, setChangePassword] = useState(false);
  const [addResume, setAddResume] = useState(false);
  const navigate = useNavigate();

  const logoutUser = () => {
    localStorage.removeItem("jwtToken");
    window.sessionStorage.removeItem("employee");
    window.sessionStorage.removeItem("departments");
    window.sessionStorage.removeItem("projects");
    window.sessionStorage.removeItem("skills");

    navigate("/employeelogin");
  };

  let showEmployeeProfile = () => {
    if (employeelist) {
      setEmployeeList(false);
    }

    if (addSkill) {
      setAddSkill(false);
    }
    if (getResource) {
      setResource(false);
    }

    if (attemptQuiz) {
      setAttemptQuiz(false);
    }

    if (changePassword) {
      setChangePassword(false);
    }

    if (addResume) {
      setAddResume(false);
    }

    setEmployeeProfile(true);
  };

  let showEmployeeList = () => {
    if (addSkill) {
      setAddSkill(false);
    }
    if (getResource) {
      setResource(false);
    }
    if (employeeProfile) {
      setEmployeeProfile(false);
    }
    if (changePassword) {
      setChangePassword(false);
    }

    if (attemptQuiz) {
      setAttemptQuiz(false);
    }
    if (addResume) {
      setAddResume(false);
    }

    setEmployeeList(true);
  };

  let showAddSkill = () => {
    if (employeeProfile) {
      setEmployeeProfile(false);
    }
    if (employeelist) {
      setEmployeeList(false);
    }
    if (changePassword) {
      setChangePassword(false);
    }

    if (attemptQuiz) {
      setAttemptQuiz(false);
    }

    if (getResource) {
      setResource(false);
    }
    if (addResume) {
      setAddResume(false);
    }

    setAddSkill(true);
  };

  let showGetResource = () => {
    if (employeeProfile) {
      setEmployeeProfile(false);
    }
    if (employeelist) {
      setEmployeeList(false);
    }

    if (attemptQuiz) {
      setAttemptQuiz(false);
    }
    if (changePassword) {
      setChangePassword(false);
    }

    if (addSkill) {
      setAddSkill(false);
    }
    if (addResume) {
      setAddResume(false);
    }
    setResource(true);
  };

  let showQuizzes = () => {
    if (employeeProfile) {
      setEmployeeProfile(false);
    }
    if (employeelist) {
      setEmployeeList(false);
    }

    if (changePassword) {
      setChangePassword(false);
    }
    if (addSkill) {
      setAddSkill(false);
    }
    if (attemptQuiz) {
      setAttemptQuiz(false);
    }

    if (getResource) {
      setResource(false);
    }
    if (addResume) {
      setAddResume(false);
    }

    setAttemptQuiz(true);
  };

  let showChangePassword = () => {
    if (employeeProfile) {
      setEmployeeProfile(false);
    }
    if (employeelist) {
      setEmployeeList(false);
    }

    if (addSkill) {
      setAddSkill(false);
    }
    if (attemptQuiz) {
      setAttemptQuiz(false);
    }

    if (getResource) {
      setResource(false);
    }
    if (addResume) {
      setAddResume(false);
    }

    setChangePassword(true);
  };

  let showAddResume = () => {
    if (employeeProfile) {
      setEmployeeProfile(false);
    }
    if (employeelist) {
      setEmployeeList(false);
    }

    if (addSkill) {
      setAddSkill(false);
    }
    if (attemptQuiz) {
      setAttemptQuiz(false);
    }

    if (getResource) {
      setResource(false);
    }
    if (changePassword) {
      setChangePassword(false);
    }

    setAddResume(true);
  };

  return (
    <>
      {/* {unauthorizedAdminAccess && <Navigate to="/" />}
        {notloggedInAsAdmin && <Navigate to="/login" />} */}
      {/* {logOut && <Navigate to="/login" />} */}

      <div
        className="row g-1  w-100 dashboard-section"
        style={{ backgroundColor: "#8abcccfa" }}
      >
        {/* <div className="sidebar-toggler" ref={sidebarTogglerRef} onClick={showSidebar}><MdVerticalDistribute /></div>  */}
        <div
          /*ref={sidebarRef}*/ className=" dashboard-sidebar bg-light col-md-2 col-sm-2 col-4 bg-light p-3"
        >
          {/* <div id="close-sidebar" className="text-end" onClick={hideSidebar}><ImCross /></div> */}

          <a
            href="#"
            className="hello-text d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <FaUserAlt style={{ width: "30px" }} />

            <span className="fs-4">
              Hello{" "}
              <span style ={{ color :"#28559A"}}>
                <b>
                  {" "}
                  {
                    JSON.parse(window.sessionStorage.getItem("employee"))
                      .employeeName
                  }
                </b>
              </span>
            </span>
          </a>
          <a
            href="#"
            className="hello-text d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
          >
            <span className="fs-5 ps-2" style={{ fontWeight: "500" }}>
              Manager Dashboard
            </span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto sidebar-list">
            <b>
              <li
                onClick={showEmployeeProfile}
                style={{ cursor: "context-menu" }}
              >
                <CgProfile
                  className="sidebar-list-icon"
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Profile</span>
              </li>
              <li onClick={showEmployeeList} style={{ cursor: "context-menu" }}>
                <AiOutlineUnorderedList
                  className="sidebar-list-icon"
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Employee List</span>
              </li>

              {/* <li onClick={show} style={{cursor:"context-menu"}}>
                            <FaBlackTie className="sidebar-list-icon" style={{ width: "30px", paddingBottom: "4px" }} />
                            <span id="Hovereffect">Employee</span>
                        
                        </li> */}

              <li onClick={showAddSkill} style={{ cursor: "context-menu" }}>
                <GiSkills
                  size={20}
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Add Skills</span>
              </li>

              <li onClick={showAddResume} style={{ cursor: "context-menu" }}>
                <GrDocumentPdf
                  className="sidebar-list-icon"
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Add Resume</span>
              </li>

              <li onClick={showGetResource} style={{ cursor: "context-menu" }}>
                <GrTechnology
                  size={20}
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Get Resource</span>
              </li>
              <li onClick={showQuizzes} style={{ cursor: "context-menu" }}>
                <MdQuiz
                  size={20}
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Attempt Quizz</span>
              </li>

              <li
                onClick={showChangePassword}
                style={{ cursor: "context-menu" }}
              >
                <RiLockPasswordFill
                  size={20}
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Update Password</span>
              </li>

              <li onClick={logoutUser} style={{ cursor: "context-menu" }}>
                <AiOutlineLogout
                  size={20}
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Logout</span>
              </li>
            </b>
          </ul>
          <div style={{ marginTop: "150%" }} className="sidebar-login">
            <hr />
          </div>
        </div>

        <div
          /*ref={dashboardDataSectionRef}*/ className="col-md-10 col-sm-10 col-8 dashboard-data-section"
          // style={{ backgroundColor: "#d3ded6" }}
        >
          {employeeProfile && <EmployeeProfile />}
          {employeelist && <EmployeeList />}
          {addSkill && <AddSkills />}
          {getResource && <GetResource />}
          {attemptQuiz && <AttemptQuiz />}
          {changePassword && <ChangePassword />}
          {addResume && <AddResume />}
          {/* 
                <div className={show} id="snackbar">Login Successfully..</div>
                <div className={show2} id="snackbar">Student details are added..</div> */}
        </div>
      </div>
    </>
  );
};

export default ManagerDashboard;
