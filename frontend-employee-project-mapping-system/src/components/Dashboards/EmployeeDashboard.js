import React, { useEffect, useState } from "react";
// import AddDepartment from "../Departments/AddDepartment";
// import AddEmployees from "../Employees/Employee";
// import AddProjects from "../Projects/project";
import {FaUserAlt,FaBlackTie } from "react-icons/fa";
import { BiAtom } from "react-icons/bi";
import { GrTechnology } from "react-icons/gr";
// import './AdminDashboard.css';
// import AddResources from "../Resources/Resource";


 //import { FaUserAlt } from "react-icons/md";
 import AddSkills from "../Skills/AddSkill";

import AddTechnology from "../Technology/AddTechnology";

const EmployeeDashboard = () => {
    // const [addDepartment, setAddDepartment] = useState(false);

    // const [addproject, setAddProject] = useState(false);
    const [addTechnology, setAddTechnology] = useState(false);

    const [projectlist, setProjectList] = useState(false);
    // const [addEmployee, setAddEmployee] = useState(false);
    const [getResource, setGetResource] = useState(false); 
    const [addSkill, setAddSkill] = useState(false);


  let showProjectList = () => {
    // if (home) {
    //     setHome(false);
    // }
    // if (Projectlist) {
    //   setProjectList(false);
    // }
    if (addTechnology) {
        setAddTechnology(false);
    }
    if (addSkill) {
        setAddSkill(false);
    }
    // if (getResource) {
    //     setGetResource(false);
    // }

   
    setProjectList(true);
  };

//   let showAddEmployee = () => {
//     if (addproject) {
//         setAddProject(false);
//     }
    
//     if (addDepartment) {
//       setAddDepartment(false);
//     }
//     if (addTechnology) {
//       setAddTechnology(false);
//     }
//     if(addResource){
//       setAddResource(false);
//     }
//     setAddEmployee(true);
//   };

  let showAddTechnology = () => {
      
      if(addSkill){
        setAddSkill(false);
      }
    //   if (addDepartment) {
    //     setAddDepartment(false);
    //   }
      if (projectlist) {
        setProjectList(false);
      }
    //   if(addResource){
    //     setAddResource(false);
    //   }
      setAddTechnology(true);
  }

//   let showAddResource = () => {
      
//     if(addEmployee){
//       setAddEmployee(false);
//     }
//     if (addDepartment) {
//       setAddDepartment(false);
//     }
//     if (addproject) {
//       setAddProject(false);
//     }
//     if (addTechnology) {
//       setAddTechnology(false);
//     }
//     setAddResource(true);
// }
  return (
    <>
        {/* {unauthorizedAdminAccess && <Navigate to="/" />}
        {notloggedInAsAdmin && <Navigate to="/login" />} */}
        {/* {logOut && <Navigate to="/login" />} */}

        <div className="row g-1  w-100 dashboard-section">
         {/* <div className="sidebar-toggler" ref={sidebarTogglerRef} onClick={showSidebar}><MdVerticalDistribute /></div>  */}
            <div /*ref={sidebarRef}*/ className=" dashboard-sidebar bg-light col-md-3 col-sm-3 col-5 bg-light p-3" >
                
                {/* <div id="close-sidebar" className="text-end" onClick={hideSidebar}><ImCross /></div> */}
                
                <a href="#" className="hello-text d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <FaUserAlt style={{ width: "30px" }} />
                    
                    <span className="fs-4">Hello <span className="text-success"><b>Employee</b></span></span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto sidebar-list">
                    <b>
                        <li onClick={showProjectList} style={{cursor:"context-menu"}}>
                            <BiAtom className="sidebar-list-icon" style={{ width: "30px", paddingBottom: "4px" }} />
                            <span id="Hovereffect">Projects</span>
                        </li>
                    
                        {/* <li onClick={show} style={{cursor:"context-menu"}}>
                            <FaBlackTie className="sidebar-list-icon" style={{ width: "30px", paddingBottom: "4px" }} />
                            <span id="Hovereffect">Employee</span>
                        
                        </li> */}
                    
                        <li onClick={showAddTechnology} style={{cursor:"context-menu"}}>
                            <GrTechnology size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                            <span id="Hovereffect">Technology</span>
                            
                        </li> 

                        {/* <li onClick={showAddResource} style={{cursor:"context-menu"}}>
                            <GrTechnology size={20} style={{ width: "30px", paddingBottom: "4px" }} />
                            <span id="Hovereffect">Add Resource</span>
                            
                        </li> */}
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
                    <div className="dropdown" style={{cursor:"context-menu"}}>
                        <a className="d-flex align-items-center link-dark text-decoration-none dropdown-toggle" id="dropdownUser2" data-bs-toggle="dropdown" aria-expanded="false">
                            {/* <strong>{name}</strong> */}
                        </a>
                        <ul className="dropdown-menu text-small shadow sidebar-list" aria-labelledby="dropdownUser2">
                            {/* <li><Link to="/profile" className="dropdown-item" >Profile</Link></li>
                            <li><hr className="dropdown-divider" /></li> */}
                            {/* <li>
                                <button type="button" className="btn1 primary1 dropdown-item" onClick={logoutClick}>Logout</button>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>

            <div /*ref={dashboardDataSectionRef}*/ className="col-md-9 col-sm-9 col-7 dashboard-data-section" style={{ backgroundColor: "#d3ded6" }}>
                {/* {home && <Home />} */}
                    {/* {projectlist && <ProjectList />} */}
            {/* {addEmployee && <AddEmployees />}
            {addDepartment && <AddDepartment />} */}
            {addTechnology && <AddTechnology />}
            {/* {addResource && <AddResources />} */}
{/* 
                <div className={show} id="snackbar">Login Successfully..</div>
                <div className={show2} id="snackbar">Student details are added..</div> */}
            </div>
        </div>
    </>
);
}

export default EmployeeDashboard;
