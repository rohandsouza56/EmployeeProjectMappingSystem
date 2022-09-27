import React, { useState, useEffect } from "react";
import AdminServices from "../../Services/AdminServices";

// import EmployeeService from '../../Services/EmployeeService';
import "react-toastify/dist/ReactToastify.css";
import EmployeeService from "../../Services/EmployeeService";

const AddEmployees = () => {
  const [name, setName] = useState("");
  const [designation, setDesignation] = useState("");
  const [dateOfJoining, setDateOfJoining] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [roleId, setRoleId] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [designationErr, setDesignationErr] = useState("");
  const [dateOfJoiningErr, setDateOfJoiningErr] = useState("");
  const [mobileNoErr, setMobileNoErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [genderErr, setGenderErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [roleIdErr, setRoleIdErr] = useState("");

  const [errorMesg, setErrorMesg] = useState("");

  let nameTextHandler = (event) => {
    if (nameErr !== "" || nameErr !== null) setNameErr("");

    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setName(event.target.value.toUpperCase());
  };

  let designationTextHandler = (event) => {
    if (designationErr !== "" || designationErr !== null) setDesignationErr("");

    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setDesignation(event.target.value);
  };

  let dateOfJoiningTextHandler = (event) => {
    if (dateOfJoiningErr !== "" || dateOfJoiningErr !== null)
      setDateOfJoiningErr("");

    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setDateOfJoining(event.target.value);
  };

  let mobileNoTextHandler = (event) => {
    if (mobileNoErr !== "" || mobileNoErr !== null) setMobileNoErr("");

    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setMobileNo(event.target.value);
  };

  let emailTextHandler = (event) => {
    if (emailErr !== "" || emailErr !== null) setEmailErr("");

    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setEmail(event.target.value);
  };

  let genderTextHandler = (event) => {
    if (genderErr !== "" || genderErr !== null) setGenderErr("");

    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setGender(event.target.value);
  };

  let passwordTextHandler = (event) => {
    if (passwordErr !== "" || passwordErr !== null) setPasswordErr("");

    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setPassword(event.target.value);
  };

  let roleIdTextHandler = (event) => {
    if (roleIdErr !== "" || roleIdErr !== null) setRoleIdErr("");

    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setRoleId(event.target.value);
  };

  let validation = () => {
    setNameErr("");
    setDesignationErr("");
    setDateOfJoiningErr("");
    setMobileNoErr("");
    setEmailErr("");
    setGenderErr("");
    setPasswordErr("");
    setRoleIdErr("");

    let flag = true;
    let regex = /[a-zA-Z0-9]+@{1}[a-zA-Z0-9]+\.[a-zA-Z]+/;
    let passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    let mobileRegx = /^[789]{1}[0-9]{9}$/;

    if (name === "" || name === null) {
      setNameErr("Please Enter Name");
      flag = false;
    }
    if (designation === "" || designation === null) {
      setDesignationErr("Please Enter Designation ");
      flag = false;
    }

    if (dateOfJoining === "" || dateOfJoining === null) {
      setDateOfJoiningErr("Please Enter Date Of Joining");
      flag = false;
    }

    if (mobileNo === "" || mobileNo === null) {
      setMobileNoErr("Please Enter Mobile Number");
      flag = false;
    } else if (mobileRegx.test(mobileNo) === false) {
      setMobileNoErr("Mobile no should be in 10 digit");
      flag = false;
    }

    if (email === "" || email === null) {
      setEmailErr("Please Enter Email Id");
      flag = false;
    } else if (regex.test(email) === false) {
      setEmailErr("Email is in wrong format. Example: abc@gmail.com");
      flag = false;
    }

    if (gender === "" || gender === null) {
      setGenderErr("This field is compulsory");
      flag = false;
    }

    if (password === "" || password === null) {
      setPasswordErr("Please Enter Password");
      flag = false;
    } else if (password.length < 8 || password.length > 15) {
      setPasswordErr("Password should contain characters between 8 to 15");
    } else if (passwordRegex.test(password) === false) {
      setPasswordErr(
        "Password should have 1 capital letter, 1 special character and a number"
      );
      flag = false;
    }

    if (roleId === "" || roleId === null) {
      setRoleIdErr("Please Enter Role Id");
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
      setGenderErr("");
      setPasswordErr("");
      setRoleIdErr("");

      let employeeDetails = {
        name,
        designation,
        dateOfJoining,
        mobileNo,
        email,
        gender,
        password,
        roleId,
      };
      console.log(employeeDetails);
      AdminServices.addNewEmployee(employeeDetails)
        .then((response) => {
          setName("");
          setDesignation("");
          setDateOfJoining("");
          setMobileNo("");
          setEmail("");
          setGender("");
          setPassword("");
          setRoleId("");
        })
        .catch((error) => {
          console.log(error);
          //setErrorMesg(error.response.data);
        });
    }
  };

  return (
    <>
      <div className="container-fluid w-75 mt-5 add-details-section form-background">
        <div className="m-3">
          <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
            Add Employee Details
          </h2>
          <p className="text-50 text-success mb-3 dashboard-data-section-para">
            Please fill up the form
          </p>
          <div className="">
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
                      <b className="text-danger">{emailErr}</b>
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
                        value={roleId}
                        onChange={roleIdTextHandler}
                        placeholder="Enter roleId"
                      />
                      <label>roleId</label>
                      <span className="text-danger">{roleIdErr}</span>
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
