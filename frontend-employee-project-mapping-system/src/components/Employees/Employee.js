import React, {useState, useEffect} from 'react'
import EmployeeService from '../../Services/EmployeeService';



const AddEmployees = () => {
  

  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [panNumber, setPanNumber] = useState("");
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
    if(nameErr!=="" || nameErr!==null) setNameErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setName(event.target.value.toUpperCase());
  };

  let designationTextHandler = (event) => {
    if(DesignationErr!=="" || DesignationErr!==null) setDesignationErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setDesignation(event.target.value);
  };

  let dateOfJoiningTextHandler = (event) => {
    if(DateOfJoiningErr!=="" || DateOfJoiningErr!==null) setDateOfJoiningErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setDateOfJoining(event.target.value);
  };

  let mobileNoTextHandler = (event) => {
    if(MobileNoErr!=="" || MobileNoErr!==null) setmobileNoErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setMobileNo(event.target.value);
  };

  let emailTextHandler = (event) => {
    if(EmailErr!=="" || EmailErr!==null) setEmailErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setEmail(event.target.value);
  };

  let panNumberTextHandler = (event) => {
    if(panNumberErr!=="" || panNumberErr!==null) setPanNumberErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setpanNumber(event.target.value);
  };

  let userNameTextHandler = (event) => {
    if(userNameErr!=="" || userNameErr!==null) setuserNameErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setuserName(event.target.value);
  };

  let passwordTextHandler = (event) => {
    if(passwordErr!=="" || passwordErr!==null) setpasswordErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setpassword(event.target.value);
  };

  let projectIdTextHandler = (event) => {
    if(projectIdErr!=="" || projectIdErr!==null) setprojectIdErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setprojectId(event.target.value);
  };

  let departmentIdTextHandler = (event) => {
    if(departmentIdErr!=="" || departmentIdErr!==null) setdepartmentIdErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setdepartmentId(event.target.value);
  };

  let isManagerTextHandler = (event) => {
    if(isManagerErr!=="" || isManagerErr!==null) setisManagerErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setisManager(event.target.value);
  };

  let managerIdTextHandler = (event) => {
    if(managerIdErr!=="" || managerIdErr!==null) setmanagerIdErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setmanagerId(event.target.value);
  };

  let skillIdTextHandler = (event) => {
    if(skillIdErr!=="" || skillIdErr!==null) setskillIdErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setskillId(event.target.value);
  };

  let resumeTextHandler = (event) => {
    if(resumeErr!=="" || resumeErr!==null) setresumeErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setresume(event.target.value);
  };

  let isTaggedTextHandler = (event) => {
    if(isTaggedErr!=="" || isTaggedErr!==null) setisTaggedErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setisTagged(event.target.value);
  };

        
        

  let validation = () => {
    setNameErr("");
    setdesignationErr("");
    setdateOfJoiningErr("");
    setmobileNoErr("");
    setemailErr("");
    setpanNumberErr("");
    setuserNameErr("");
    setpasswordErr("");
    setprojectIdErr("");
    setdepartmentIdErr("");
    setisManagerErr("");
    setmanagerIdErr("");
    setskillIdErr("");
    setresumeErr("");
    setisTaggedErr("");

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
      setdateOfJoiningErr("This field is compulsory");
      flag = false;
    } 

    if (mobileNo === "" || mobileNo === null) {
      setmobileNoErr("This field is compulsory");
      flag = false;
    } 

    if (email === "" || email === null) {
      setemailErr("This field is compulsory");
      flag = false;
    } 
    if (panNumber === "" || panNumber === null) {
      setpanNumberErr("This field is compulsory");
      flag = false;
    } 
    if (userName === "" || userName === null) {
        setuserNameErr("This field is compulsory");
        flag = false;
      } 

    if (password === "" || password === null) {
        setpasswordErr("This field is compulsory");
        flag = false;
    } 

    if (projectId === "" || projectId === null) {
        setprojectIdErr("This field is compulsory");
        flag = false;
    } 

    if (departmentId === "" || departmentId === null) {
        setdepartmentIdErr("This field is compulsory");
        flag = false;
    } 

    if (isManager === "" || isManager === null) {
        setisManagerErr("This field is compulsory");
        flag = false;
    } 

    if (managerId === "" || managerId === null) {
        setmanagerIdErr("This field is compulsory");
        flag = false;
    } 

    if (skillId === "" || skillId === null) {
        setskillIdErr("This field is compulsory");
        flag = false;
    } 

    if (resume === "" || resume === null) {
        setresumeErr("This field is compulsory");
        flag = false;
    } 

    
    if (isTagged === "" || isTagged === null) {
        setisTaggedErr("This field is compulsory");
        flag = false;
    } 
    

    

  

    if (flag) {
      return true;
    }
  };



  let addEmployeeDetails = (event) => {
    event.preventDefault();
    
      let EmployeeDetails = {
        name,
        designation,
        dateOfJoining,
        mobileNo,
        email,
        panNumber,
        userName,
        password,
        projectId,
        departmentId,
        isManager,
        managerId,
        skillId,
        resume,
        isTagged
      };
      EmployeeService
        .addNewEmployee(EmployeeDetails)
        .then((response) => {
          setName("");
          setDesignation("");
          setdateOfJoining("");
          setmobileNo("");
          setEmail("");
          setpanNumber("");
          setuserName("");
          setPassword("");
          setprojectId("");
          setdepartmentId("");
          setisManager("");
          setManagerId("");
          setskillId("");
          setResume("");
          setisTagged("");

    
         
        })
        .catch((error) => {
          console.log(error)
          //setErrorMesg(error.response.data);
        });
    
  };



    return (
        <>
          
          <div className="container-fluid w-50 mt-5 add-details-section">
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
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                       // value={name}
                        //onChange={nameTextHandler}
                        placeholder="Enter Employee Name"
                        
                      />
                      <label>Employee Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        // value={email}
                        // onChange={emailTextHandler}
                        placeholder="enter designation"
                        
                      />
                      <label>description</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="date"
                        className="form-control"
                        // value={age}
                        // onChange={ageTextHandler}
                        placeholder="Enter date Of Joining"
                        
                      />
                      <label>date Of Joining</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        // value={city}
                        // onChange={cityTextHandler}
                        placeholder="mobile no"
                      />
                      <label>mobile No</label>
                      {/* <span className="text-danger">{cityError}</span> */}
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="email"
                        className="form-control"
                        // value={states}
                        // onChange={stateTextHandler}
                        placeholder="Enter emailId"
                      />
                      <label>email Id</label>
                      {/* <span className="text-danger">{stateError}</span> */}
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        // value={country}
                        // onChange={countryTextHandler}
                        placeholder="Enter PanNumber"
                      />
                      <label>panNumber</label>
                      {/* <span className="text-danger">{countryError}</span> */}
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        // value={country}
                        // onChange={countryTextHandler}
                        placeholder="Enter Gender"
                      />
                      <label>Genderr</label>
                      {/* <span className="text-danger">{countryError}</span> */}
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        // value={country}
                        // onChange={countryTextHandler}
                        placeholder="enter username"
                      />
                      <label>userName</label>
                      {/* <span className="text-danger">{countryError}</span> */}
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="password"
                        className="form-control"
                        // value={country}
                        // onChange={countryTextHandler}
                        placeholder="Enter Password"
                      />
                      <label>password</label>
                      {/* <span className="text-danger">{countryError}</span> */}
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        // value={country}
                        // onChange={countryTextHandler}
                        placeholder="Enter Project Id"
                      />
                      <label>project Id</label>
                      {/* <span className="text-danger">{countryError}</span> */}
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        // value={country}
                        // onChange={countryTextHandler}
                        placeholder="Enter departmenr id"
                      />
                      <label>department Id</label>
                      {/* <span className="text-danger">{countryError}</span> */}
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        // value={country}
                        // onChange={countryTextHandler}
                        placeholder="Enter IsManager"
                      />
                      <label>isManager</label>
                      {/* <span className="text-danger">{countryError}</span> */}
                    </div>
                    

                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        // value={country}
                        // onChange={countryTextHandler}
                        placeholder="Enter Skill id"
                      />
                      <label>skill id</label>
                      {/* <span className="text-danger">{countryError}</span> */}
                    </div>


                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        // value={country}
                        // onChange={countryTextHandler}
                        placeholder="Enter resume"
                      />
                      <label>resume</label>
                      {/* <span className="text-danger">{countryError}</span> */}
                    </div>

                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        // value={country}
                        // onChange={countryTextHandler}
                        placeholder="Enter isTagged"
                      />
                      <label>isTagged</label>
                      {/* <span className="text-danger">{countryError}</span> */}
                    </div>

                    <div className="row g-1">
                      <button type="submit" className="btn primary">
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
    