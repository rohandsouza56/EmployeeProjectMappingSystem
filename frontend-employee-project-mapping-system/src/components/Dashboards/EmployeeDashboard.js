import React, { useEffect, useState } from "react";
import { FaUserAlt, FaBlackTie } from "react-icons/fa";
import { FcList } from "react-icons/fc";
import { BiAtom } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
// import './AdminDashboard.css';
import GetResource from "../Resources/GetResources";
import EmployeeProfile from "../Employees/EmployeeProfile";
import AttemptQuiz from "../Employees/AttemptQuiz";
import ChangePassword from "../Login/ChangePassword";
import ProjectListEmployee from "../Projects/ProjectListEmployee";


//import { FaUserAlt } from "react-icons/md";
import AddSkills from "../Skills/AddSkill";
import AddTechnology from "../Technology/AddTechnology";

const EmployeeDashboard = () => {
  // const [addDepartment, setAddDepartment] = useState(false);

  // const [addproject, setAddProject] = useState(false);
  
  const [projectlist, setProjectList] = useState(false);
  const [employeeProfile, setEmployeeProfile] = useState(false);
  const [getResource, setResource] = useState(false);
  const [addSkill, setAddSkill] = useState(false);
  const [attemptQuiz, setAttemptQuiz] = useState(false);
  const [changePassword, setChangePassword] = useState(false);

  let showEmployeeProfile = () => {
    if (projectlist) {
      setProjectList(false);
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

    setEmployeeProfile(true);
  };

  let showProjectList = () => {
    
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


    setProjectList(true);
  };

  

  let showAddSkill = () => {
    if (employeeProfile) {
      setEmployeeProfile(false);
    }
    if (projectlist) {
      setProjectList(false);
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

    setAddSkill(true);
  };

  let showGetResource = () => {
    if (employeeProfile) {
      setEmployeeProfile(false);
    }
    if (projectlist) {
      setProjectList(false);
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

    setResource(true);
  };

  let showQuizzes = () => {
    if (employeeProfile) {
      setEmployeeProfile(false);
    }
    if (projectlist) {
      setProjectList(false);
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

    setAttemptQuiz(true);
  };

  let showChangePassword = () => {
    if (employeeProfile) {
      setEmployeeProfile(false);
    }
    if (projectlist) {
      setProjectList(false);
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

    setChangePassword(true);
  };

  return (
    <>
      {/* {unauthorizedAdminAccess && <Navigate to="/" />}
        {notloggedInAsAdmin && <Navigate to="/login" />} */}
      {/* {logOut && <Navigate to="/login" />} */}

      <div className="row g-1  w-100 dashboard-section">
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
              <span className="text-success">
                <b> {
                  JSON.parse(window.sessionStorage.getItem("employee"))
                    .employeeName
                }</b>
              </span>
            </span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto sidebar-list">
            <b>
              <li
                onClick={showEmployeeProfile}
                style={{ cursor: "context-menu" }}
              >
                <FcList
                  className="sidebar-list-icon"
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Profile</span>
              </li>
              <li onClick={showProjectList} style={{ cursor: "context-menu" }}>
                <FcList
                  className="sidebar-list-icon"
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Project List</span>
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

              <li onClick={showGetResource} style={{ cursor: "context-menu" }}>
                <GrTechnology
                  size={20}
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Get Resource</span>
              </li>
              <li onClick={showQuizzes} style={{ cursor: "context-menu" }}>
                <GrTechnology
                  size={20}
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Attempt Quizz</span>
              </li>

              <li onClick={showChangePassword} style={{ cursor: "context-menu" }}>
                <GrTechnology
                  size={20}
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Update Password</span>
              </li>

            </b>
          </ul>
          <div style={{ marginTop: "150%" }} className="sidebar-login">
            <hr />
          </div>
        </div>

        <div
          /*ref={dashboardDataSectionRef}*/ className="col-md-10 col-sm-10 col-8 dashboard-data-section"
          style={{ backgroundColor: "#d3ded6" }}
        >
          {employeeProfile && <EmployeeProfile />}
          {projectlist && <ProjectListEmployee />}
          {addSkill && <AddSkills />}
          {getResource && <GetResource />}
          {attemptQuiz && <AttemptQuiz />}
          {changePassword && <ChangePassword />}
          {/* 
                <div className={show} id="snackbar">Login Successfully..</div>
                <div className={show2} id="snackbar">Student details are added..</div> */}
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
