import React, { useEffect, useState } from "react";
import AddDepartment from "../Departments/AddDepartment";
import AddEmployees from "../Employees/AddEmployee";
import AddProjects from "../Projects/AddProject";
import AddProjectRequirment from "../ProjectRequirement/AddProjectRequirment";
import Home from "./AdminHome";
import AddProjectMapping from "../Projects/ProjectMapping";
import AddResources from "../Resources/AddResource";


import { FaUserAlt, FaBlackTie, FaFileImport } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
import { AiTwotoneHome } from "react-icons/ai";

import "./AdminDashboard.css";

//import { FaUserAlt } from "react-icons/md";

import AddTechnology from "../Technology/AddTechnology";

const AdminDashboard = () => {
  const [addDepartment, setAddDepartment] = useState(false);

  const [addproject, setAddProject] = useState(false);
  const [addTechnology, setAddTechnology] = useState(false);
  const [addProjectRequirment, setAddProjectRequirment] = useState(false);
  const [home, setHome] = useState(true);
  const [mapping, setMapping] = useState(false);

  // const [Projectlist, setProjectList] = useState(false);
  const [addEmployee, setAddEmployee] = useState(false);
  const [addResource, setAddResource] = useState(false);
  const [projectReq, setProjectReq] = useState(false);

  let showAddProject = () => {
    if (home) {
      setHome(false);
    }
    if (addEmployee) {
      setAddEmployee(false);
    }
    if (addDepartment) {
      setAddDepartment(false);
    }
    if (addTechnology) {
      setAddTechnology(false);
    }
    if(addproject){
      setAddProject(false);
    }

    if (mapping) {
      setMapping(false);
    }

    if (addResource) {
      setAddResource(false);
    }

    if (projectReq) {
      setProjectReq(false);
    }
    setAddProject(true);
  };



  let showHome = () => {
    if (addEmployee) {
      setAddEmployee(false);
    }
    if (addDepartment) {
      setAddDepartment(false);
    }
    if (addTechnology) {
      setAddTechnology(false);
    }
    if (mapping) {
      setMapping(false);
    }
    if(addproject){
      setAddProject(false);
    }
    if (addResource) {
      setAddResource(false);
    }
    if (projectReq) {
      setProjectReq(false);
    }
    setHome(true);
  };



  let showAddEmployee = () => {
    if (home) {
      setHome(false);
    }
    if (addproject) {
      setAddProject(false);
    }

    if (addDepartment) {
      setAddDepartment(false);
    }
    if (addTechnology) {
      setAddTechnology(false);
    }
    if (addResource) {
      setAddResource(false);
    }
    if (mapping) {
      setMapping(false);
    }
    if (projectReq) {
      setProjectReq(false);
    }
    setAddEmployee(true);
  };



  let showAddTechnology = () => {
    if (home) {
      setHome(false);
    }

    if (addEmployee) {
      setAddEmployee(false);
    }
    if (addDepartment) {
      setAddDepartment(false);
    }
    if (addproject) {
      setAddProject(false);
    }
    if (addResource) {
      setAddResource(false);
    }
    if (mapping) {
      setMapping(false);
    }

    if (projectReq) {
      setProjectReq(false);
    }

    setAddTechnology(true);
  };

  let showAddResource = () => {
    if (home) {
      setHome(false);
    }

    if (addEmployee) {
      setAddEmployee(false);
    }
    if (addDepartment) {
      setAddDepartment(false);
    }
    if (addproject) {
      setAddProject(false);
    }
    if (addTechnology) {
      setAddTechnology(false);
    }

    if (mapping) {
      setMapping(false);
    }

    if (projectReq) {
      setProjectReq(false);
    }

    setAddResource(true);
  };

  let showAddProjectRequirment = () => {
    if (home) {
      setHome(false);
    }

    if (addEmployee) {
      setAddEmployee(false);
    }
    if (addDepartment) {
      setAddDepartment(false);
    }
    if (addproject) {
      setAddProject(false);
    }
    if (addTechnology) {
      setAddTechnology(false);
    }

    if (mapping) {
      setMapping(false);
    }
    if (addResource) {
      setAddResource(false);
    }

    if (mapping) {
      setMapping(false);
    }


    setProjectReq(true);
  };

  let showMapping = () => {
    if (home) {
      setHome(false);
    }

    if (addEmployee) {
      setAddEmployee(false);
    }
    if (addDepartment) {
      setAddDepartment(false);
    }
    if (addproject) {
      setAddProject(false);
    }
    if (addTechnology) {
      setAddTechnology(false);
    }

    if (mapping) {
      setMapping(false);
    }
    if (addResource) {
      setAddResource(false);
    }

    if (addProjectRequirment) {
      setAddProjectRequirment(false);
    }
    if (projectReq) {
      setProjectReq(false);
    }
    

    setMapping(true);
  };

  let showAddDepartment = () => {
      if (home) {
          setHome(false);
      }
      if (addEmployee) {
        setAddEmployee(false);
      }
      if (addproject) {
        setAddProject(false);
      }
      if (addTechnology) {
        setAddTechnology(false);
      }
  
      if (mapping) {
        setMapping(false);
      }
      if (addResource) {
        setAddResource(false);
      }
  
      if (addProjectRequirment) {
        setAddProjectRequirment(false);
      }
      if (projectReq) {
        setProjectReq(false);
      }
      if (mapping) {
        setMapping(false);
      }
      setAddDepartment(true);
  }

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
            <FaUserAlt
              size={22}
              style={{ width: "33px", paddingRight: "7px" }}
            />

            <span className="fs-4">
              Hello{" "}
              <span className="text-secondary">
                <b>Admin</b>
              </span>
            </span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto sidebar-list">
            <b>
              <li onClick={showHome} style={{ cursor: "context-menu" }}>
                <AiTwotoneHome
                  className="sidebar-list-icon"
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Home</span>
              </li>

              <li onClick={showAddProject} style={{ cursor: "context-menu" }}>
                <BiAtom
                  size={22}
                  className="sidebar-list-icon"
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Projects</span>
              </li>

              <li onClick={showAddEmployee} style={{ cursor: "context-menu" }}>
                <FaBlackTie
                  size={22}
                  className="sidebar-list-icon"
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Employee</span>
              </li>

              <li onClick={showAddDepartment} style={{ cursor: "context-menu" }}>
                <FaBlackTie
                  size={22}
                  className="sidebar-list-icon"
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Department</span>
              </li>

              <li
                onClick={showAddTechnology}
                style={{ cursor: "context-menu" }}
              >
                <GrTechnology
                  size={22}
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Technology</span>
              </li>

              <li onClick={showAddResource} style={{ cursor: "context-menu" }}>
                <GrTechnology
                  size={20}
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Resource</span>
              </li>

              <li
                onClick={showAddProjectRequirment}
                style={{ cursor: "context-menu" }}
              >
                <FaFileImport
                  size={22}
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Project Requirements</span>
              </li>

              <li onClick={showMapping} style={{ cursor: "context-menu" }}>
                <FaFileImport
                  size={22}
                  style={{ width: "30px", paddingBottom: "4px" }}
                />
                <span id="Hovereffect">Employee Project Mapping</span>
              </li>
            </b>
            {/* <li onClick={showListOfStudents}  style={{cursor:"context-menu"}}>
                        <ImBooks className="sidebar-list-icon" style={{ width: "30px", paddingBottom: "4px" }} />
                        Students
                    </li> */}
            {/* <li onClick={showResultPage}  style={{cursor:"context-menu"}}>
                        <BsFillDoorOpenFill className="sidebar-list-icon" style={{ width: "30px", paddingBottom: "4px" }} />
                        Result
                     </li> */}
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
          style={{ backgroundColor: "#b0c4de" }}
        >
          {home && <Home />}
          {addproject && <AddProjects />}
          {addEmployee && <AddEmployees />}
          {addDepartment && <AddDepartment />}
          {addTechnology && <AddTechnology />}
          {projectReq && <AddProjectRequirment />}
          {addResource && <AddResources />}
          {mapping && <AddProjectMapping />}
          {/* 
                <div className={show} id="snackbar">Login Successfully..</div>
                <div className={show2} id="snackbar">Student details are added..</div> */}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
