import React, { useState, useEffect } from "react";
// import EmployeeService from '../../Services/EmployeeService';

const AddEmployees = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [panNumber, setPanNumber] = useState("");
  const [gender, setGender] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [projectId, setProjectId] = useState("");
  const [departmentId, setDepartmentId] = useState("");
  const [isManager, setIsManager] = useState("");
  const [managerId, setManagerId] = useState("");
  const [skillId, setSkillId] = useState("");
  const [resume, setResume] = useState("");
  const [isTagged, setIsTagged] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [designationErr, setDesignationErr] = useState("");
  const [dateOfJoiningErr, setDateOfJoiningErr] = useState("");
  const [mobileNoErr, setMobileNoErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [panNumberErr, setPanNumberErr] = useState("");
  const [genderErr, setGenderErr] = useState("");
  const [userNameErr, setUserNameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [projectIdErr, setProjectIdErr] = useState("");
  const [departmentIdErr, setDepartmentIdErr] = useState("");
  const [isManagerErr, setIsManagerErr] = useState("");
  const [managerIdErr, setManagerIdErr] = useState("");
  const [skillIdErr, setSkillIdErr] = useState("");
  const [resumeErr, setResumeErr] = useState("");
  const [isTaggedErr, setIsTaggedErr] = useState("");

  const [errorMesg, setErrorMesg] = useState("");

  let nameTextHandler = (event) => {
    if (nameErr !== "" || nameErr !== null) setNameErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setName(event.target.value.toUpperCase());
  };

  let designationTextHandler = (event) => {
    if (designationErr !== "" || designationErr !== null) setDesignationErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setDesignation(event.target.value);
  };

  let dateOfJoiningTextHandler = (event) => {
    if (dateOfJoiningErr !== "" || dateOfJoiningErr !== null)
      setDateOfJoiningErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setDateOfJoining(event.target.value);
  };

  let mobileNoTextHandler = (event) => {
    if (mobileNoErr !== "" || mobileNoErr !== null) setMobileNoErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setMobileNo(event.target.value);
  };

  let emailTextHandler = (event) => {
    if (emailErr !== "" || emailErr !== null) setEmailErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setEmail(event.target.value);
  };

  let panNumberTextHandler = (event) => {
    if (panNumberErr !== "" || panNumberErr !== null) setPanNumberErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setPanNumber(event.target.value);
  };

  let genderTextHandler = (event) => {
    if (genderErr !== "" || genderErr !== null) setGenderErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setGender(event.target.value);
  };

  let userNameTextHandler = (event) => {
    if (userNameErr !== "" || userNameErr !== null) setUserNameErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setUserName(event.target.value);
  };

  let passwordTextHandler = (event) => {
    if (passwordErr !== "" || passwordErr !== null) setPasswordErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setPassword(event.target.value);
  };

  let projectIdTextHandler = (event) => {
    if (projectIdErr !== "" || projectIdErr !== null) setProjectIdErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setProjectId(event.target.value);
  };

  let departmentIdTextHandler = (event) => {
    if (departmentIdErr !== "" || departmentIdErr !== null)
      setDepartmentIdErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setDepartmentId(event.target.value);
  };

  let isManagerTextHandler = (event) => {
    if (isManagerErr !== "" || isManagerErr !== null) setIsManagerErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setIsManager(event.target.value);
  };

  let managerIdTextHandler = (event) => {
    if (managerIdErr !== "" || managerIdErr !== null) setManagerIdErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setManagerId(event.target.value);
  };

  let skillIdTextHandler = (event) => {
    if (skillIdErr !== "" || skillIdErr !== null) setSkillIdErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setSkillId(event.target.value);
  };

  let resumeTextHandler = (event) => {
    if (resumeErr !== "" || resumeErr !== null) setResumeErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setResume(event.target.value);
  };

  let isTaggedTextHandler = (event) => {
    if (isTaggedErr !== "" || isTaggedErr !== null) setIsTaggedErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setIsTagged(event.target.value);
  };

  let validation = () => {
    setNameErr("");
    setDesignationErr("");
    setDateOfJoiningErr("");
    setMobileNoErr("");
    setEmailErr("");
    setPanNumberErr("");
    setGenderErr("");
    setUserNameErr("");
    setPasswordErr("");
    setProjectIdErr("");
    setDepartmentIdErr("");
    setIsManagerErr("");
    setManagerIdErr("");
    setSkillIdErr("");
    setResumeErr("");
    setIsTaggedErr("");

    let flag = true;

    if (name === "" || name === null) {
      setNameErr("This field is compulsory");
      flag = false;
    }
    if (designation === "" || designation === null) {
      setDesignationErr("This field is compulsory");
      flag = false;
    }

    if (dateOfJoining === "" || dateOfJoining === null) {
      setDateOfJoiningErr("This field is compulsory");
      flag = false;
    }

    if (mobileNo === "" || mobileNo === null) {
      setMobileNoErr("This field is compulsory");
      flag = false;
    }

    if (email === "" || email === null) {
      setEmailErr("This field is compulsory");
      flag = false;
    }
    if (panNumber === "" || panNumber === null) {
      setPanNumberErr("This field is compulsory");
      flag = false;
    }

    if (gender === "" || gender === null) {
      setGenderErr("This field is compulsory");
      flag = false;
    }

    if (userName === "" || userName === null) {
      setUserNameErr("This field is compulsory");
      flag = false;
    }

    if (password === "" || password === null) {
      setPasswordErr("This field is compulsory");
      flag = false;
    }

    if (projectId === "" || projectId === null) {
      setProjectIdErr("This field is compulsory");
      flag = false;
    }

    if (departmentId === "" || departmentId === null) {
      setDepartmentIdErr("This field is compulsory");
      flag = false;
    }

    if (isManager === "" || isManager === null) {
      setIsManagerErr("This field is compulsory");
      flag = false;
    }

    if (managerId === "" || managerId === null) {
      setManagerIdErr("This field is compulsory");
      flag = false;
    }

    if (skillId === "" || skillId === null) {
      setSkillIdErr("This field is compulsory");
      flag = false;
    }

    if (resume === "" || resume === null) {
      setResumeErr("This field is compulsory");
      flag = false;
    }

    if (isTagged === "" || isTagged === null) {
      setIsTaggedErr("This field is compulsory");
      flag = false;
    }

    if (flag) {
      return true;
    }
  };

  let addEmployeeDetails = (event) => {
    event.preventDefault();
    if (validation()) {
      setNameErr("");
      setDesignationErr("");
      setDateOfJoiningErr("");
      setMobileNoErr("");
      setEmailErr("");
      setPanNumberErr("");
      setGenderErr("");
      setUserNameErr("");
      setPasswordErr("");
      setProjectIdErr("");
      setDepartmentIdErr("");
      setIsManagerErr("");
      setManagerIdErr("");
      setSkillIdErr("");
      setResumeErr("");
      setIsTaggedErr("");

      let EmployeeDetails = {
        name,
        designation,
        dateOfJoining,
        mobileNo,
        email,
        panNumber,
        gender,
        userName,
        password,
        projectId,
        departmentId,
        isManager,
        managerId,
        skillId,
        resume,
        isTagged,
      };

      //   EmployeeService
      //     .addNewEmployee(EmployeeDetails)
      //     .then((response) => {
      //       setName("");
      //       setDesignation("");
      //       setDateOfJoining("");
      //       setMobileNo("");
      //       setEmail("");
      //       setPanNumber("");
      //       setGender("");
      //       setUserName("");
      //       setPassword("");
      //       setProjectId("");
      //       setDepartmentId("");
      //       setIsManager("");
      //       setManagerId("");
      //       setSkillId("");
      //       setResume("");
      //       setIsTagged("");

      //     })
      //     .catch((error) => {
      //       console.log(error)
      //       //setErrorMesg(error.response.data);
      //     });
    }
  };

  return (
    <>
      <div className="container-fluid w-75 mt-5 add-details-section">
        <div className="m-3">
          <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
            Add Employee Details
          </h2>
          <p className="text-50 text-success mb-3 dashboard-data-section-para">
            Please fill up the form
          </p>
          <div className="border border-1 rounded">
            <div className="m-3">
              <form onSubmit={addEmployeeDetails}>
                <div className="row">
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={nameTextHandler}
                        placeholder="Enter Employee Name"
                      />
                      <label>Employee Name</label>
                      <span className="text-danger">{nameErr}</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        value={designation}
                        onChange={designationTextHandler}
                        placeholder="enter designation"
                      />
                      <label>Designation</label>
                      <span className="text-danger">{designationErr}</span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input
                        type="date"
                        className="form-control"
                        value={dateOfJoining}
                        onChange={dateOfJoiningTextHandler}
                        placeholder="Enter date Of Joining"
                      />
                      <label>date Of Joining</label>
                      <span className="text-danger">{dateOfJoiningErr}</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        value={mobileNo}
                        onChange={mobileNoTextHandler}
                        placeholder="mobile no"
                      />
                      <label>mobile No</label>
                      <span className="text-danger">{mobileNoErr}</span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        value={email}
                        onChange={emailTextHandler}
                        placeholder="Enter emailId"
                      />
                      <label>email Id</label>
                      <span className="text-danger">{emailErr}</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        value={gender}
                        onChange={genderTextHandler}
                        placeholder="Enter PanNumber"
                      />
                      <label>Gender</label>
                      <span className="text-danger">{genderErr}</span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        value={userName}
                        onChange={userNameTextHandler}
                        placeholder="enter username"
                      />
                      <label>userName</label>
                      <span className="text-danger">{userNameErr}</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={passwordTextHandler}
                        placeholder="Enter Password"
                      />
                      <label>password</label>
                      <span className="text-danger">{passwordErr}</span>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        value={projectId}
                        onChange={projectIdTextHandler}
                        placeholder="Enter Project Id"
                      />
                      <label>project Id</label>
                      <span className="text-danger">{projectIdErr}</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        value={departmentId}
                        onChange={departmentIdTextHandler}
                        placeholder="Enter departmenr id"
                      />
                      <label>department Id</label>
                      <span className="text-danger">{departmentIdErr}</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        value={isManager}
                        onChange={isManagerTextHandler}
                        placeholder="Enter IsManager"
                      />
                      <label>isManager</label>
                      <span className="text-danger">{isManagerErr}</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        value={managerId}
                        onChange={managerIdTextHandler}
                        placeholder="Enter Manager id"
                      />
                      <label>Manager Id</label>
                      <span className="text-danger">{managerIdErr}</span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        value={resume}
                        onChange={resumeTextHandler}
                        placeholder="Enter resume"
                      />
                      <label>resume</label>
                      <span className="text-danger">{resumeErr}</span>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        value={isTagged}
                        onChange={isTaggedTextHandler}
                        placeholder="Enter isTagged"
                      />
                      <label>isTagged</label>
                      <span className="text-danger">{isTaggedErr}</span>
                    </div>
                  </div>
                </div>

                {/* <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        value={panNumber}
                        onChange={panNumberTextHandler}
                        placeholder="Enter PanNumber"
                      />
                      <label>panNumber</label>
                      <span className="text-danger">{panNumberErr}</span>
                    </div> */}

                <div className="row g-1">
                  <button type="submit" className="btn btn-primary">
                    Add Employee
                  </button>
                </div>
              </form>
            </div>
          </div>
          {/* <span className="text-success">
                <b>{successMesg}</b>
              </span>
              <span className="text-danger">
                <b>{errorMesg}</b>
              </span> */}
        </div>
      </div>
    </>
  );
};

export default AddEmployees;
