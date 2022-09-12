import React, { useEffect, useState } from "react";
import AddDepartment from "../Departments/AddDepartment";
import AddEmployees from "../Employees/Employee";
import AddProjects from "../Projects/project";

import AddTechnology from "../Technology/AddTechnology";

const AdminDashboard = () => {
    const [addDepartment, setAddDepartment] = useState(false);

    const [addproject, setAddProject] = useState(false);
    const [addTechnology, setAddTechnology] = useState(false);

    const [Projectlist, setProjectList] = useState(false);
    const [addEmployee, setAddEmployee] = useState(false);


  let showAddProject = () => {
    // if (home) {
    //     setHome(false);
    // }
    // if (Projectlist) {
    //   setProjectList(false);
    // }
    if (addEmployee) {
      setAddEmployee(false);
    }
    if (addDepartment) {
      setAddDepartment(false);
    }
    if (addTechnology) {
      setAddTechnology(false);
    }
    setAddProject(true);
  };

  let showAddEmployee = () => {
    if (addproject) {
        setAddProject(false);
    }
    
    if (addDepartment) {
      setAddDepartment(false);
    }
    if (addTechnology) {
      setAddTechnology(false);
    }
    setAddEmployee(true);
  };

  let showAddTechnology = () => {
      
      if(addEmployee){
        setAddEmployee(false);
      }
      if (addDepartment) {
        setAddDepartment(false);
      }
      if (addproject) {
        setAddProject(false);
      }
      setAddTechnology(true);
  }

  // let showDashboard = () => {
  //     if (home) {
  //         setHome(false);
  //     }
  //     if(course){
  //         setCourse(false);
  //     }
  //     if (listOfStudents) {
  //         setListOfStudents(false);
  //     }
  //     if (declareResult) {
  //         setDeclareResult(false);
  //     }
  //     setDashboard(true);
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
                
                {/* <a href="#" className="hello-text d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                    <FaUserGraduate style={{ width: "30px" }} />
                    <span className="fs-4">Hello <span className="text-success"><b>{name}</b></span></span>
                </a> */}
                <hr />
                <ul className="nav nav-pills flex-column mb-auto sidebar-list">
                    <li onClick={showAddProject} style={{cursor:"context-menu"}}>
                        {/* <AiTwotoneHome className="sidebar-list-icon" style={{ width: "30px", paddingBottom: "4px" }} /> */}
                        Projects
                    </li>
                    <li onClick={showAddEmployee} style={{cursor:"context-menu"}}>
                        {/* <AiFillDashboard className="sidebar-list-icon" style={{ width: "30px", paddingBottom: "4px" }} /> */}
                       Employee
                    </li>
                     <li onClick={showAddTechnology} style={{cursor:"context-menu"}}>
                        {/* <FaBook size={20} style={{ width: "30px", paddingBottom: "4px" }} /> */}
                        Technology
                    </li>
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
                    {addproject && <AddProjects />}
            {addEmployee && <AddEmployees />}
            {addDepartment && <AddDepartment />}
            {addTechnology && <AddTechnology />}
{/* 
                <div className={show} id="snackbar">Login Successfully..</div>
                <div className={show2} id="snackbar">Student details are added..</div> */}
            </div>
        </div>
    </>
);
}

export default AdminDashboard;
