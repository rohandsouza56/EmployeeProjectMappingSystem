// import React from "react";
import React, {useState, useEffect} from 'react'
import DepartmentService from "../../Services/DepartmentService";

const AddDepartment = () => {
    // var yearArray = [];
    // for (let i = 2008; i < 2018; i++) {
    //     yearArray.push(i);
    // }
    // let studentId = window.sessionStorage.getItem("id");

    const [departmentId, setDepartmentId] = useState("");
    const [projectId, setProjectId] = useState("");
    const [name, setName] = useState("");
    const [currentStrength, setCurrentStrength] = useState("");
    const [maximumStrength, setMaximumStrength] = useState("");
   
    const [departmentIdErr, setDepartmentIdErr] = useState("");
    const [projectIdErr, setProjectIdErr] = useState("");
    const [nameErr, setNameErr] = useState("");
    const [currentStrengthErr, setCurrentStrengthErr] = useState("");
    const [maximumStrengthErr, setMaximumStrengthErr] = useState("");
    const [error, setError] = useState("");

    const [departments, setDepartments] = useState([]);

    const init = () => {
        DepartmentService.getAllDepartments(departmentId).then(response => {
            console.log(response.data);
            setDepartments(response.data);
        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        init();
    }, []);

    

    let onDepartmentIdHandler = (event) => {
        setDepartmentId(event.target.value);
        if (departmentIdErr !== "" || departmentIdErr !== null) {
            setDepartmentIdErr("");
        }
    }

    let onProjectIdHandler = (event) => {
        setProjectId(event.target.value);
        if (projectIdErr !== "" || projectIdErr !== null) {
            setProjectIdErr("");
        }
    }

    let onNameHandler = (event) => {
        setName(event.target.value);
        if (nameErr !== "" || nameErr !== null) {
            setNameErr("");
        }
    }

    let onCurrentStrengthHandler = (event) => {
        setCurrentStrength(event.target.value);
        if (currentStrengthErr !== "" || currentStrengthErr !== null) {
            setCurrentStrengthErr("");
        }
    }

    let onMaximumStrengthHandler = (event) => {
        setMaximumStrength(event.target.value);
        if (maximumStrengthErr !== "" || maximumStrengthErr !== null) {
            setMaximumStrengthErr("");
        }
    }

    let validation = () => {
        // console.log(studentId);
        let flag = true;
        // let percentageRegex = /[A-Za-z\@\?\/\!\~]+/;
        // if (type === "") {
        //     setTypeErr("Please select Course");
        //     flag = false;
        // }

        if (departmentId === "" || departmentId === null) {
            setDepartmentIdErr("Please Enter Department ID");
            flag = false;
        }

        if (projectId === "" || projectId === null) {
            setProjectIdErr("Please Enter Project ID");
            flag = false;
        }

        if (name === "") {
            setNameErr("Please Enter Department Name");
            flag = false;
        }

        if (currentStrength === "" || currentStrength === null) {
            setCurrentStrengthErr("Please Enter Curretnt Stregth");
            flag = false;
        }
        if (maximumStrength === "" || maximumStrength === null) {
            setMaximumStrengthErr("Please Enter Maximum Strength");
            flag = false;
        }
        
        if (flag)
            return true;

    }

    let handleDelete = (departmentId) => {
        //if (disable === "") {
            DepartmentService.deleteDepartment(departmentId).then(resp => {
                console.log(resp.data);
                init();
               // setShow1("show");
                setTimeout(() => {
                    //setShow1("");
                    clearTimeout();
                }, 3000);
            }).catch(err => {
                console.log(err);
            })
      //  }
      //  else {
      //      alert("Last Date for Updating Student Details is OVER..");
     //   }
    }


    let onAddDepartmentSubmit = (event) => {
        event.preventDefault();
     //   if (disable === "") {
            if (validation()) {
                setDepartmentIdErr("");
                setProjectIdErr("");
                setNameErr("");
                setCurrentStrengthErr("");
                setMaximumStrengthErr("");
                console.log("...." + departmentId);
                let department = { "DepartmentId": departmentId, "ProjectId": projectId, "Name": name, "CurrentStrength": currentStrength, "MaximumStrength": maximumStrength };
                console.log(department);

                      let departmentDetails = {
                        departmentId,
                        projectId,
                        name,
                        currentStrength,
                        maximumStrength,
                      };
                      DepartmentService.AddDepartment(departmentDetails)
                        .then((response) => {
                          setDepartmentId("");
                          setProjectId("");
                          setName("");
                          setCurrentStrength("");
                          setMaximumStrength("");
                          setError("");
                    
                          // setSuccessMesg("User Created Successfully");
                         // window.sessionStorage.setItem("snackbar_registration","show");
                          //toastr.success("Student Profile Created Successfully");
                          //navigate("/login");
                        })
                        .catch((error) => {
                          console.log(error)
                          setError("Something went wrong");
                        });    
            }
      //  }
      //  else {
      //      alert("Last Date for Updating Student Details is OVER..");
     // }

    }

    return (
        <div className="container-fluid w-50 mt-5 add-qualification-details">
            <div className="m-3">
                <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">Department Details</h2>
                <p className="text-50 text-success mb-3 dashboard-data-section-para">Please enter Department Details</p>
                <div className="border border-1 rounded">
                    <div className="m-3">
                        <form onSubmit={onAddDepartmentSubmit} className="department-form">
                            <div className="form-floating mb-3">
                                <input type="number" className="form-control"
                                    value={departmentId}
                                    onChange={onDepartmentIdHandler}
                                    placeholder="Enter Department Id"
                                />
                                <label>Department Id</label>
                                <span className="text-danger">{departmentIdErr}</span>
                            </div>

                            <div className="form-floating mb-3">
                                <input type="number" className="form-control" 
                                    value={projectId}
                                    onChange={onProjectIdHandler}
                                    placeholder="enter Project Id"   
                                />
                                <label> Project Id </label>
                                <span className="text-danger">{projectIdErr}</span>
                            </div>

                            <div className="form-floating mb-3">
                            <input
                                type="text"
                                className="form-control"
                                value={name}
                                onChange={onNameHandler}
                                placeholder="Enter Text"    
                            />
                            <label>Department Name </label>
                            <span className="text-danger">{nameErr}</span>
                            </div>
                            <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control"
                                value={currentStrength}
                                onChange={onCurrentStrengthHandler}
                                placeholder="Current Strength"
                            />
                            <label>Current Strength</label>
                            <span className="text-danger">{currentStrengthErr}</span>
                            </div>
                            <div className="form-floating mb-3">
                            <input
                                type="number"
                                className="form-control"
                                value={maximumStrength}
                                onChange={onMaximumStrengthHandler}
                                placeholder="Maximum Strength"
                            />
                            <label>Maximum Strength</label>
                            <span className="text-danger">{maximumStrengthErr}</span>
                            </div>

                            <div className="row g-1">
                            <button type="submit" className="btn btn-primary"> Add Department </button>
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
            <div className="table-responsive">
            <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Department Id</th>
                        <th>Project Id</th>
                        <th>Name of Department</th>
                        <th>Current Strength</th>
                        <th>Max Strength</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        departments.map(department => (
                            <tr key={department.departmentId}>
                                <td>{department.projectId}</td>
                                <td>{department.name}</td>
                                <td>{department.currentStrength}</td>
                                <td>{department.maximumStrength}</td>
                               <td>
                                    <center><button className="btn1 primary1 rounded" onClick={() => {
                                        handleDelete(department.departmentId);
                                    }}>Delete</button></center>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
}

export default AddDepartment;