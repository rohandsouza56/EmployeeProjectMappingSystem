import React from "react";
import { useEffect, useState } from "react";
import EmployeeService from "../../Services/EmployeeService";
// import SkillService from "../../Services/SkillService";
//import SkillService from "../../Services/SkillService";


const AddProjectMapping = () => {
    
    // let studentId = window.sessionStorage.getItem("id");

    
    const [employeeId, setEmployeeId] = useState("");
    const [projectId, setProjectId] = useState("");
    
    const [departmentId, setDepartmentId] = useState("");
    
    
    
    const [employeeIdErr, setEmployeeIdErr] = useState("");
    const [departmentIdErr, setDepartmentIdErr] = useState("");
    const [projectIdErr, setProjectIdErr] = useState("");

    
    // const [show, setShow] = useState("");
    // const [show1, setShow1] = useState("");
     const [error, setError] = useState("");
    // const [disable, setDisable] = useState("")

     const [mapping, setMapping] = useState([]);

    // const init = () => {
    //     StudentService.getEducationDetailsOfStudent(studentId).then(response => {
    //         console.log(response.data);
    //         setEducations(response.data);
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }
    // useEffect(() => {
    //     init();
    //     AdminService.getAcademicDates().then(resp => {
    //         let updationDate = resp.data.updationDate;
    //         let resultDate = resp.data.resultDate;
    //         if (((Date.parse(updationDate)) <= (Date.parse(new Date())))||((Date.parse(resultDate)) <= (Date.parse(new Date())))) {
    //             setDisable("Disabled");
    //         }
    //         else {
    //             setDisable("");
    //         }
    //     }).catch(err => {
    //         console.log(err);
    //     })
    // }, []);

   

    let employeeIdHandler = (event) => {
        setEmployeeId(event.target.value);
        if (employeeIdErr !== "" || employeeIdErr !== null) {
            employeeIdHandler("");
        }
    }

    let projectIdHandler = (event) => {
        setProjectId(event.target.value);
        if (projectIdErr !== "" || projectIdErr !== null) {
            projectIdHandler("");
        }
    }

    let departmentIdHandler = (event) => {
        setDepartmentId(event.target.value);
        if (departmentIdErr !== "" || departmentIdErr !== null) {
            departmentIdHandler("");
        }
    } 
  

    let validation = () => {
        
        let flag = true;
        

        if (projectId === "" || projectId === null) {
            setProjectIdErr("Please select correct Project Id");
            flag = false;
        }

        if (departmentId === "" || departmentId === null) {
            setDepartmentIdErr("This field is compulsory");
            flag = false;
          }
          if (employeeId === "" || employeeId === null) {
            setEmployeeIdErr("This field is compulsory");
            flag = false;
          }

        if (flag)
            return true;

    }

    // let handleDelete = (skillId) => {
    //     //if (disable === "") {
    //         SkillService.deleteSkills(skillId).then(resp=> {
    //         // StudentService.deleteEducation(educationId, studentId).then(resp => {
    //             console.log(resp.data);
    //             // init();
    //             // setShow1("show");
    //             setTimeout(() => {
    //                 // setShow1("");
    //                 clearTimeout();
    //             }, 3000);
    //         }).catch(err => {
    //             console.log(err);
    //         })
    //     }
    //     else {
    //         alert("Last Date for Updating Student Details is OVER..");
    //     }
     


    let onProjectMappingSubmit = (event) => {
        event.preventDefault();
        // if (disable === "") {
            if (validation()) {
                setProjectIdErr("");
                setDepartmentIdErr("");
                setEmployeeIdErr("");
                
                // console.log("...." + skillId);
                // let skill = { "skillId": skillId, "skill": skill, "employeeId": employeeId, "dateOfCompletion": dateOfCompletion, "certificationLink": certificationLink, "certificatePdf": certificatePdf, "technologyId":technologyId };
                // console.log(skill);

                let mappingDetails = {
                    projectId,
                    employeeId,
                    departmentId
                   
                  };
                
                EmployeeService.projectMapping(mappingDetails).then(response => {
                    //console.log("Education Added", response.data);
                    setDepartmentIdErr("");
                    setEmployeeIdErr("");
                    setProjectIdErr("");
                   
                    // init();
                    // setShow("show");
                    // setTimeout(function () { setShow(""); clearTimeout(); }, 3000)
                }).catch(err => {
                    console.log("Error found", err);
                    setError("Something went wrong");
                })

            }
        }
        

    

    return (
        <div className="container-fluid w-50 mt-5 add-qualification-details">
            <div className="m-3">
                <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">Skills</h2>
                <p className="text-50 text-success mb-3 dashboard-data-section-para">Please enter Employee-Project Mapping Details</p>
                <div className="border border-1 rounded">
                    <div className="m-3">
                        <form onSubmit={onProjectMappingSubmit} className="department-form">
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control"
                                    value={employeeId}
                                    onChange={employeeIdHandler}
                                    placeholder="Enter Employee Id"
                                />
                                <label>Employee Id</label>
                                <span className="text-danger">{employeeIdErr}</span>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" 
                                    value={projectId}
                                    onChange={projectIdHandler}
                                    placeholder="enter Project Id"   
                                />
                                <label> Project Id </label>
                                <span className="text-danger">{projectIdErr}</span>
                            </div>

                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={departmentId}
                                onChange={departmentIdHandler}
                                placeholder="Enter Department Id"    
                            />
                            <label>Department Id </label>
                            <span className="text-danger">{departmentIdErr}</span>
                            </div>
                           
                            

                           

                            <div className="row g-1">
                            <button type="submit" className="btn btn-primary"> Add Mapping </button>
                            </div>

                                {/* <div className="form-floating mb-3">
                                    <select className="form-select" value={name} onChange={onNameHandler} disabled={disable}>
                                        <option value="" selected>--SELECT--</option>
                                        <option value="SSC">Department 1</option>
                                        <option value="HSC">Department 2</option>
                                    </select>
                                    <label>Department</label>
                                    <span className="text-danger">{nameErr}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={institute} onChange={instituteHandler} placeholder="Enter Institute" disabled={disable} />
                                    <label>Name of your Institute</label>
                                    <span className="text-danger">{instituteErr}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={percentage} onChange={percentageHandler} placeholder="Enter Percentage" disabled={disable} />
                                    <label>Percentage</label>
                                    <span className="text-danger">{percentageErr}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <select className="form-select" value={yop} onChange={yopHandler} disabled={disable}>
                                        <option value="" selected>--SELECT--</option>
                                        {yearArray.map((ele, key) => {
                                            return (
                                                <option value={ele}>{ele}</option>
                                            );
                                        })}
                                    </select>
                                    <label>Year of Passing</label>
                                    <span className="text-danger">{yopErr}</span>
                                </div>
                                <div className="row g-1">
                                    <button type="submit" className="btn1 primary1">Add Qualification</button>
                                </div> */}
                        </form>
                    </div>
                </div>
                <span className="text-danger">{error}</span>
                {/* <div className={show} id="snackbar">Education Details Added Successfully<output></output></div>
                <div className={show1} id="snackbar">Education Details Deleted<output></output></div> */}
            </div>

            <hr />
            {/* <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Project Id</th>
                        <th>Department Id</th>
                        <th>Employee Id</th>
                       
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        mapping.map(projectMapping => (
                            <tr key={projectMapping.projectId}>
                                <td>{projectMapping.skill}</td>
                                <td>{skills.employeeId}</td>
                                <td>{skills.dateOfCompletion}</td>
                                <td>{skills.certificationLink}</td>
                                <td>{skills.certificatePdf}</td>
                                <td>{skills.technologyId}</td>
                               <td>
                                    <center><button className="btn1 primary1 rounded" onClick={() => {
                                        handleDelete(skills.skillId);
                                    }}>Delete</button></center>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div> */}
        </div>
    );
}


export default AddProjectMapping;