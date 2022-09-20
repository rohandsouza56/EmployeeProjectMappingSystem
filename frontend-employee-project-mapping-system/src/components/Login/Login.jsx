import { React, useContext } from "react";
import { useState, useEffect } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import user from "../Images/user-picture.png";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoginServices from "../../Services/LoginServices";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //------------------------------

  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  //---------------------------

  const [loggedInAsEmployee, setLoggedInEmployee] = useState(false);
  const [loggedInAsManager, setLoggedInAsManager] = useState(false);
  const [loggedInAsAdmin, setLoggedInAsAdmin] = useState(false);

  //-------------------------

  const navigate = useNavigate();

  let emailTextHandler = (event) => {
    setEmailErr("");
    if (errorMsg !== "" || errorMsg !== null) setErrorMsg("");
    setEmail(event.target.value);
  };

  let passwordTextHandler = (event) => {
    setPasswordErr("");
    if (errorMsg !== "" || errorMsg !== null) setErrorMsg("");
    setPassword(event.target.value);
  };

  let validation = () => {
    let emailFlag = true;
    let passwordFlag = true;

    let regex = /[a-zA-Z0-9]+@{1}[a-zA-Z0-9]+\.[a-zA-Z]+/;

    if (email === "" || email === null) {
      setEmailErr("Please Enter Email Id");
      emailFlag = false;
    } else if (regex.test(email) === false) {
      setEmailErr("Email is in wrong format. Example: abc@gmail.com");
      emailFlag = false;
    }

    if (password === "" || password === null) {
      setPasswordErr("Please Enter Password");
      passwordFlag = false;
    }

    if (emailFlag && passwordFlag) {
      return true;
    }
  };

  let onLoginSubmit = (event) => {
    event.preventDefault();

    if (validation()) {
      let loginRequest = {
        email,
        password,
      };

      LoginServices.login(loginRequest)
        .then((response) => {
          setEmail("");
          setPassword("");
          toast.success("Login Success");
          navigate("/admindashboard");

          // if (response.data.role === "ADMIN") {
          //     const user = response.data;
          //     // window.sessionStorage.setItem('user', JSON.stringify(user));
          //     // window.sessionStorage.setItem("email", user.email);
          //     // window.sessionStorage.setItem("name", user.name);
          //     // window.sessionStorage.setItem("snackbar", "show");
          //     // console.log(user);
          //    setLoggedInAsAdmin(true);
          // }

          // else if(response.data.role === "MANAGER"){
          //     setLoggedInAsManager(true);
          // }

          // else if(response.data.role === "EMPLOYEE"){
          //     setLoggedInEmployee(true);
          // }
        })
        .catch((error) => {
          setErrorMsg(error.response.data);
          toast.error("Incorrect Details entered");
        });
    }
  };

  return (
    <>
      {loggedInAsAdmin && <Navigate to="/admindashboard" />}
      {loggedInAsEmployee && <Navigate to="/employeedashboard" />}
      {loggedInAsManager && <Navigate to="/managerdashboard" />}
      {/* <div className="container-fluid w-50 mt-5">
                <div className="m-3 bg-success">
                    <div className='row'>
                    div
                    <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                    <p className="text-50 text-primary mb-3">
                        Please enter your login and password!
                    </p>
                    <div className='border border-1 rounded'>
                        <div className='m-3'>
                            <form onSubmit={onLoginSubmit}>
                                <div className='form-floating mb-3'>
                                    <input type='email' className='form-control form-control-sm'
                                        value={email} onChange={emailTextHandler}
                                        placeholder="name@example.com"
                                    />
                                    <label>Email Address</label>
                                    <span className='text-danger'>{emailErr}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="password"
                                        className="form-control form-control-sm"
                                        value={password} onChange={passwordTextHandler}
                                        placeholder="password"
                                    />
                                    <label>Password</label>
                                    <span className="text-danger">{passwordErr}</span>
                                </div>
                                <div className="row g-1">
                                    <div className="text-center mb-2">
                                        <Link to="/forgot_password" className="link-primary">
                                        Forgot password?
                                        </Link>
                                    </div>
                                    <button type="submit" className="btn1 btn btn-primary">
                                        Login
                                    </button>
                                    <hr className="my-4" />
                                
                                </div>
                            </form>                        
                        </div>
                        </div>
                    </div>
                </div>
            </div> */}

      <div className="container-fluid w-50 mt-5 login-component" >
        <div
          className="row border rounded"
          style={{ backgroundColor: "lightBlue" }}
        >
          <div className="col-4 ">
            <img
              src={user}
              className="rounded-start img-fluid mt-5"
              style={{ width: "300px" }}
            ></img>
          </div>

          <div className="col-8">
            <div className="border border-0 rounded p-2">
              <h2 className="fw-bold mb-2 mt-2 text-uppercase">Login</h2>
              <p className="text-50 text-dark mb-3">
                Please enter your login and password!
              </p>
              <div className="">
                <form onSubmit={onLoginSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="text"
                      className="form-control form-control-sm"
                      value={email}
                      onChange={emailTextHandler}
                      placeholder="name@example.com"
                    />
                    <label>Email Address</label>
                    <span className="text-danger">{emailErr}</span>
                  </div>
                  <div className="form-floating mb-3">
                    <input
                      type="password"
                      className="form-control form-control-sm"
                      value={password}
                      onChange={passwordTextHandler}
                      placeholder="password"
                    />
                    <label>Password</label>
                    <span className="text-danger">{passwordErr}</span>
                  </div>
                  <div className="row g-1">
                    <div className="text-center mb-2">
                      <Link to="/forgot_password" className="link-primary">
                        Forgot password?
                      </Link>
                    </div>
                    <button type="submit" className="btn1 btn btn-primary">
                      Login
                    </button>
                  </div>
                </form>
                <ToastContainer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
