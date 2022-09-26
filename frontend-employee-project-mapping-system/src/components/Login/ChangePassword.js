import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from "react-bootstrap";
import EmployeeService from "../../Services/EmployeeService";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const ChangePassword = () => {
  const [employeeId, setEmployeeId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  let emailTextHandler = (event) => {
    setEmailErr("");
    //if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setEmail(event.target.value);
  };

  let passwordTextHandler = (event) => {
    setPasswordError("");
    //if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setPassword(event.target.value);
  };
  let confirmPasswordTextHandler = (event) => {
    setConfirmPasswordError("");
    //if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setConfirmPassword(event.target.value);
  };


  let validation = () => {
    let flag = true;
    let passwordRegex =
      /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
    if (password === "" || password === null) {
      setPasswordError("Please Enter New Password here");
      flag = false;
    } else if (passwordRegex.test(password) === false) {
      setPasswordError(
        "Password should have atleast one capital letter, one special character and a number.\nAlso, the size of password should lies between 8 to 15 characters"
      );
      flag = false;
    }
    if (confirmPassword === "" || confirmPassword === null) {
      setConfirmPasswordError("Please Re-Enter your Password");
      flag = false;
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Password is not matching");
      flag = false;
    }
    if (flag) {
      return true;
    }
  };

  let onPasswordSubmit = (event) => {
    event.preventDefault();


    if (validation()=== true) {
     
      let employeeDetails= {
        employeeId:JSON.parse(window.sessionStorage.getItem('employee')).employeeId,
        email:JSON.parse(window.sessionStorage.getItem('employee')).email,
        password
      };
      console.log(employeeDetails);

      EmployeeService.updateEmployeePassword(employeeDetails)
        .then((response) => {
          setPasswordError("");
          setConfirmPasswordError("");
          toast.success("Password Changed Successfully");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error Can not Change Password");
        });

      }

  };

  return (
    <div className="container-fluid w-50 mt-5 mb-5 login-section">
      <div className="m-3 p-3" style={{ backgroundColor: "lightBlue" }}>
        <h2 className="fw-bold mb-2 text-uppercase">Update Password</h2>
        <p className="text-50 text-dark mb-3">
          Please fill this form to change your password!
        </p>
        <div className="border border-0 rounded">
          <div className="m-3">
            <form onSubmit={onPasswordSubmit}>

            <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={ JSON.parse(window.sessionStorage.getItem('employee')).employeeId}
                  placeholder="Employee Id" disabled
                />
                <label>Employee Id </label>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={ JSON.parse(window.sessionStorage.getItem('employee')).email}
                  placeholder="Email Id" disabled
                />
                <label>Email Id </label>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control form-control-sm"
                  value={password}
                  onChange={passwordTextHandler}
                  placeholder="password"
                />
                <label>New Password</label>
                <span className="text-danger">{passwordError}</span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="password"
                  className="form-control form-control-sm"
                  value={confirmPassword}
                  onChange={confirmPasswordTextHandler}
                  placeholder="password"
                />
                <label>Confirm Password</label>
                <span className="text-danger">{confirmPasswordError}</span>
              </div>
              <div className="row g-1 ">
                <button type="submit" className="text-light btn bg-primary" >
                  Update Password
                </button>
              </div>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ChangePassword;
