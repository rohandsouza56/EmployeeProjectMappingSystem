import React, { useEffect, useState } from "react";
import AddDepartment from "../Departments/AddDepartment";
import AddEmployees from "../Employees/AddEmployee";
import AddProjects from "../Projects/AddProject";
import AddProjectRequirment from "../ProjectRequirement/AddProjectRequirment";
import Home from "./AdminHome";
import AddProjectMapping from "../Projects/ProjectMapping";
import AddResources from "../Resources/AddResource";
import Admin from "./Admin";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  FaUserAlt,
  FaBlackTie,
  FaFileImport,
  FaSourcetree,
  FaMapSigns,
  FaLightbulb,
  FaArchive,
  FaRegQuestionCircle,
} from "react-icons/fa";
import { BiAtom } from "react-icons/bi";
import { RiLogoutCircleFill } from "react-icons/ri";
import { AiTwotoneHome, } from "react-icons/ai";
import {FcDepartment} from "react-icons/fc"

import "./AdminDashboard.css";

//import { FaUserAlt } from "react-icons/md";

import AddTechnology from "../Technology/AddTechnology";
import AddQuestion from "../Quiz/AddQuestion";

const AdminDashboard = () => {
  const [addDepartment, setAddDepartment] = useState(false);

  const [addproject, setAddProject] = useState(false);
  const [addTechnology, setAddTechnology] = useState(false);
  const [addProjectRequirment, setAddProjectRequirment] = useState(false);
  const [home, setHome] = useState(true);
  const [mapping, setMapping] = useState(false);

  const [addEmployee, setAddEmployee] = useState(false);
  const [addResource, setAddResource] = useState(false);
  const [projectReq, setProjectReq] = useState(false);
  const [addQuestion, setAddQuestion] = useState(false);

  const navigate = useNavigate();
   const logoutUser = () => {
     
    localStorage.removeItem("jwtToken");
    window.sessionStorage.removeItem('admin');  
    navigate("/login");
  };



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
    if (addproject) {
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

    if(addQuestion){
      setAddQuestion(false);
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
    if (addproject) {
      setAddProject(false);
    }
    if (addResource) {
      setAddResource(false);
    }
    if (projectReq) {
      setProjectReq(false);
    }
    
    if(addQuestion){
      setAddQuestion(false);
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
    
    if(addQuestion){
      setAddQuestion(false);
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
    
    if(addQuestion){
      setAddQuestion(false);
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
    
    if(addQuestion){
      setAddQuestion(false);
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
    
    if(addQuestion){
      setAddQuestion(false);
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
    
    if(addQuestion){
      setAddQuestion(false);
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
    
    if(addQuestion){
      setAddQuestion(false);
    }
    setAddDepartment(true);
  };

  let showAddQuestion = () => {
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
    
    if(addDepartment){
      setAddDepartment(false);
    }
    setAddQuestion(true);
  };

  return (
    <>
      <div className="row g-1  w-100 dashboard-section">
        <div className="dashboard-sidebar col-md-2 col-sm-2 col-4 p-2">
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
              <span style ={{ color :"#28559A"}}>
                <b>{
                  JSON.parse(window.sessionStorage.getItem("admin"))?JSON.parse(window.sessionStorage.getItem("admin"))
                  .name:"Admin"
                }</b>
              </span>
            </span>
          </a>
          <hr />
          <ul className="nav nav-pills flex-column mb-auto sidebar-list">
            <li onClick={showHome} style={{ cursor: "context-menu" }}>
              <AiTwotoneHome
                size={22}
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
              <FaArchive
                size={22}
                className="sidebar-list-icon"
                style={{ width: "30px", paddingBottom: "4px" }}
              />
              <span id="Hovereffect">Department</span>
            </li>

            <li onClick={showAddTechnology} style={{ cursor: "context-menu" }}>
              <FaLightbulb
                size={22}
                style={{ width: "30px", paddingBottom: "4px" }}
              />
              <span id="Hovereffect">Technology</span>
            </li>

            <li onClick={showAddResource} style={{ cursor: "context-menu" }}>
              <FaSourcetree
                size={20}
                style={{ width: "30px", paddingBottom: "4px" }}
              />
              <span id="Hovereffect">Resource</span>
            </li>

            <li onClick={showAddQuestion} style={{ cursor: "context-menu" }}>
              <FaRegQuestionCircle
                size={20}
                style={{ width: "30px", paddingBottom: "4px" }}
              />
              <span id="Hovereffect">Add Questions</span>
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
              <FaMapSigns
                size={22}
                style={{ width: "30px", paddingBottom: "4px" }}
              />
              <span id="Hovereffect">Project Mapping</span>
            </li>

            <li onClick={logoutUser} style={{ cursor: "context-menu" }}>
              <RiLogoutCircleFill
                size={22}
                style={{ width: "30px", paddingBottom: "4px" }}
              />
              <span id="Hovereffect">Logout</span>
            </li>
          </ul>
        </div>

        <div className="col-md-10 col-sm-10 col-8 dashboard-data-section">
          {home && <Home />}
          {addproject && <AddProjects />}
          {addEmployee && <AddEmployees />}
          {addDepartment && <AddDepartment />}
          {addTechnology && <AddTechnology />}
          {projectReq && <AddProjectRequirment />}
          {addResource && <AddResources />}
          {mapping && <AddProjectMapping />}
          {addQuestion && <AddQuestion/>}
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
