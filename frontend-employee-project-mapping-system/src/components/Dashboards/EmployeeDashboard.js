import React, { useEffect, useState } from "react";
import { FaUserAlt, FaBlackTie } from "react-icons/fa";
import { FcList } from "react-icons/fc";
import { BiAtom } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { GiSkills } from "react-icons/gi";
// import './AdminDashboard.css';
import GetResource from "../Resources/GetResources";
import EmployeeProfile from "../Employees/EmployeeProfile";

import ProjectListEmployee from "../Projects/ProjectListEmployee";

//import { FaUserAlt } from "react-icons/md";
import AddSkills from "../Skills/AddSkill";
import AddTechnology from "../Technology/AddTechnology";

const EmployeeDashboard = () => {
  // const [addDepartment, setAddDepartment] = useState(false);

  // const [addproject, setAddProject] = useState(false);
  const [addTechnology, setAddTechnology] = useState(false);
  const [projectlist, setProjectList] = useState(false);
  const [employeeProfile, setEmployeeProfile] = useState(false);
  const [getResource, setResource] = useState(false);
  const [addSkill, setAddSkill] = useState(false);

  let showEmployeeProfile = () => {
    if (projectlist) {
      setProjectList(false);
    }
    if (addTechnology) {
      setAddTechnology(false);
    }
    if (addSkill) {
      setAddSkill(false);
    }
    if (getResource) {
      setResource(false);
    }
    setEmployeeProfile(true);
  };

  let showProjectList = () => {
    if (addTechnology) {
      setAddTechnology(false);
    }
    if (addSkill) {
      setAddSkill(false);
    }
    if (getResource) {
      setResource(false);
    }
    if (employeeProfile) {
      setEmployeeProfile(false);
    }

    setProjectList(true);
  };

  let showAddTechnology = () => {
    if (addSkill) {
      setAddSkill(false);
    }
    if (employeeProfile) {
      setEmployeeProfile(false);
    }
    if (projectlist) {
      setProjectList(false);
    }
    if (getResource) {
      setResource(false);
    }
    setAddTechnology(true);
  };

  let showAddSkill = () => {
    if (employeeProfile) {
      setEmployeeProfile(false);
    }
    if (projectlist) {
      setProjectList(false);
    }

    if (addTechnology) {
      setAddTechnology(false);
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

    if (addTechnology) {
      setAddTechnology(false);
    }

    if (addSkill) {
      setAddSkill(false);
    }

    setResource(true);
  };
  return (
    <>
      {/* {unauthorizedAdminAccess && <Navigate to="/" />}
        {notloggedInAsAdmin && <Navigate to="/login" />} */}
      {/* {logOut && <Navigate to="/login" />} */}

      <div className="row g-1  w-100 dashboard-section">
        {/* <div className="sidebar-toggler" ref={sidebarTogglerRef} onClick={showSidebar}><MdVerticalDistribute /></div>  */}
        <div
          /*ref={sidebarRef}*/ className=" dashboard-sidebar bg-light col-md-3 col-sm-3 col-5 bg-light p-3"
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
                <b>Employee</b>
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

              <li
                onClick={showAddTechnology}
                style={{ cursor: "context-menu" }}
              >
                <GrTechnology
                  size={20}
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Technology</span>
              </li>

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
            </b>
          </ul>
          <div style={{ marginTop: "150%" }} className="sidebar-login">
            <hr />
            <div className="dropdown" style={{ cursor: "context-menu" }}>
              <a
                className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle"
                id="dropdownUser2"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* <strong>{name}</strong> */}
              </a>
              <ul
                className="dropdown-menu text-small shadow sidebar-list"
                aria-labelledby="dropdownUser2"
              >
                {/* <li><Link to="/profile" className="dropdown-item" >Profile</Link></li>
                            <li><hr className="dropdown-divider" /></li> */}
                {/* <li>
                                <button type="button" className="btn1 primary1 dropdown-item" onClick={logoutClick}>Logout</button>
                            </li> */}
              </ul>
            </div>
          </div>
        </div>

        <div
          /*ref={dashboardDataSectionRef}*/ className="col-md-9 col-sm-9 col-7 dashboard-data-section"
          style={{ backgroundColor: "#d3ded6" }}
        >
          {employeeProfile && <EmployeeProfile />}
          {projectlist && <ProjectListEmployee />}
          {addTechnology && <AddTechnology />}
          {addSkill && <AddSkills />}
          {getResource && <GetResource />}
          {/* 
                <div className={show} id="snackbar">Login Successfully..</div>
                <div className={show2} id="snackbar">Student details are added..</div> */}
        </div>
      </div>
    </>
  );
};

export default EmployeeDashboard;
