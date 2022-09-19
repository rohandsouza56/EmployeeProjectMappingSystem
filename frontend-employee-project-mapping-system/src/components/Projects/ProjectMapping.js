import React from "react";
import { useEffect, useState } from "react";
import AdminServices from "../../Services/AdminServices";
import EmployeeService from "../../Services/EmployeeService";

const AddProjectMapping = () => {
  

  const [employeeId, setEmployeeId] = useState("");
  const [projectId, setProjectId] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [employeeIdErr, setEmployeeIdErr] = useState("");
  const [departmentIdErr, setDepartmentIdErr] = useState("");
  const [projectIdErr, setProjectIdErr] = useState("");
  const [departmentProjects, setDepartmentProjects] = useState([]);

 
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [mapping, setMapping] = useState([]);

  let employeeIdHandler = (event) => {
    setEmployeeId(event.target.value);
    if (employeeIdErr !== "" || employeeIdErr !== null) {
      employeeIdHandler("");
    }
  };

  let projectIdHandler = (event) => {
    setProjectId(event.target.value);
    getAllDepartmenrByProjectId(event.target.value);
    if (projectIdErr !== "" || projectIdErr !== null) {
      projectIdHandler("");
    }
  };

  let departmentIdHandler = (event) => {
    setDepartmentId(event.target.value);
    if (departmentIdErr !== "" || departmentIdErr !== null) {
      departmentIdHandler("");
    }
  };

  let validation = () => {
    let flag = true;

    if (projectId === "" || projectId === null) {
      setProjectIdErr("Please select correct Project Id");
      flag = false;
    }

    if (departmentId === "" || departmentId === null) {
      setDepartmentIdErr("Please Enter Department Id");
      flag = false;
    }
    if (employeeId === "" || employeeId === null) {
      setEmployeeIdErr("Please Enter Employee Id");
      flag = false;
    }

    if (flag) return true;
  };

  let getAllDepartmenrByProjectId = (projectId) =>{
   

      AdminServices.getAllDepartmenrByProjectId(projectId)
        .then((response) => {
          console.log(response.data);
          setDepartmentProjects(response.data);
          setErrorMsg("");
      
        })
        .catch((err) => {
          console.log("Error found", err);
          setErrorMsg("Incorrect Details Entered");
          setDepartmentProjects([]);
          setSuccessMsg("");
        });
  }

  let onProjectMappingSubmit = (event) => {
    event.preventDefault();
    
    if (validation()) {
      setProjectIdErr("");
      setDepartmentIdErr("");
      setEmployeeIdErr("");

     
      let mappingDetails = {
        employeeId,
        projects: {
          projectId,
        },
        departments: {
          departmentId,
        },
      };

      AdminServices.projectMapping(mappingDetails)
        .then((response) => {
          setDepartmentIdErr("");
          setEmployeeIdErr("");
          setProjectIdErr("");
          setSuccessMsg("Employee Mapping Changed Successfully");
          setErrorMsg("");
          
        })
        .catch((err) => {
          console.log("Error found", err);
          setErrorMsg("Incorrect Details Entered");
          setSuccessMsg("");
        });
    }
  };

  return (
    <div className="container-fluid w-50 mt-5 add-qualification-details form-background">
      <div className="m-3">
        <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
          Employee Project Mapping
        </h2>
        <p className="text-50 text-success mb-3 dashboard-data-section-para">
          Please enter Employee-Project Mapping Details
        </p>
        <div className="border border-1 rounded">
          <div className="m-3">
            <form onSubmit={onProjectMappingSubmit} className="department-form">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={employeeId}
                  onChange={employeeIdHandler}
                  placeholder="Enter Employee Id"
                />
                <label>Employee Id</label>
                <span className="text-danger">{employeeIdErr}</span>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={projectId}
                  onChange={projectIdHandler}
                  placeholder="enter Project Id"
                />
                <label> Project Id </label>
                <span className="text-danger">{projectIdErr}</span>
              </div>

  
                <div className="form-floating mb-3">
                  <select
                    class="form-select"
                    onChange={departmentIdHandler}
                    aria-label="Select Technology"
                  >
                    <option hidden disabled selected value> -- Select Department -- </option>
                    {departmentProjects.map((department) => (
                      <option
                        key={department.departmentId}
                        value={department.departmentId}
                      >
                        {department.name}
                      </option>
                    ))}
                  </select>
                  <span className="text-danger">{departmentIdErr}</span>
                </div>

              <div className="row g-1">
                <button type="submit" className="btn btn-primary">
                  Update Mapping
                </button>
              </div>
            </form>
          </div>
        </div>
        <span className="text-danger">{errorMsg}</span>
        <span className="text-success">{successMsg}</span>
       
      </div>
    </div>
  );
};

export default AddProjectMapping;
