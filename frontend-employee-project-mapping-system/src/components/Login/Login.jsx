import {React,useContext} from 'react';
import {useState, useEffect} from 'react';
import { Link,Navigate,useNavigate } from 'react-router-dom';

import LoginServices from '../../Services/LoginServices';

const Login =()=>{
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    //------------------------------

    const [emailErr,setEmailErr] = useState('');
    const [passwordErr,setPasswordErr] = useState('');
    const [errorMsg,setErrorMsg] = useState('');

    //---------------------------

    const [loggedInAsEmployee,setLoggedInEmployee] = useState(false);
    const [loggedInAsManager,setLoggedInAsManager] = useState(false);
    const [loggedInAsAdmin,setLoggedInAsAdmin] = useState(false);

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

    let validation = () =>{
        let emailFlag = true;
        let passwordFlag = true;

        if(email === ""||email === null){
            setEmailErr("Please Enter Email");
            emailFlag = false;
        }

        if(password === ""||password === null){
            setPasswordErr("Please Enter Password");
            passwordFlag = false;
        }

        if(emailFlag && passwordFlag){
            return true;
        }
      };

      let onLoginSubmit = (event) =>{
        event.preventDefault();

        if(validation()){

            let loginRequest = {
                email,password
            }

            LoginServices.login(loginRequest).then(response =>{
                setEmail("");
                setPassword("");

                // if (response.data.role === "ADMIN") {
                //     const user = response.data;
                //     // window.sessionStorage.setItem('user', JSON.stringify(user));
                //     // window.sessionStorage.setItem("email", user.email);
                //     // window.sessionStorage.setItem("name", user.name);
                //     // window.sessionStorage.setItem("snackbar", "show");
                //     // console.log(user);
                //     setLoggedInAsAdmin(true);
                // }

                // else if(response.data.role === "MANAGER"){
                //     setLoggedInAsManager(true);
                // }

                // else if(response.data.role === "EMPLOYEE"){
                //     setLoggedInEmployee(true);
                // }

            }).catch(error=>{setErrorMsg(error.response.data);})

        }
    }

    return(


        <>
            {loggedInAsAdmin && <Navigate to="/admindashboard"/>}
            {loggedInAsEmployee && <Navigate to="/employeedashboard" />}
            {loggedInAsManager &&<Navigate to="/managerdashboard"/>}
            <div className="container-fluid w-50 mt-5">
                <div className="m-3">
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
      </>
    );



};

export default Login;