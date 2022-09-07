// import React from 'react'

// const Login = () => <h1> login page</h1>

// return (
//     <>
      
//       <div className="container-fluid w-50 mt-5 login-section">
//         <div className="m-3">
//           <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
//           <p className="text-50 text-success mb-3">
//             Please enter your login and password!
//           </p>
//           <div className="border border-1 rounded">
//             <div className="m-3">
//               <form onSubmit={onLoginSubmit}>
//                 <div className="form-floating mb-3">
//                   <input
//                     type="email"
//                     className="form-control form-control-sm"
//                     value={email}
//                     onChange={emailTextHandler}
//                     placeholder="name@example.com"
//                   />
//                   <label>Email address</label>
//                   <span className="text-danger">{emailErr}</span>
//                 </div>
//                 <div className="form-floating mb-3">
//                   <input
//                     type="password"
//                     className="form-control form-control-sm"
//                     value={password}
//                     onChange={passwordTextHandler}
//                     placeholder="password"
//                   />
//                   <label>Password</label>
//                   <span className="text-danger">{passwordError}</span>
//                 </div>

//                 <div className="row g-1">
//                   <div className="text-center mb-2">
//                     <Link to="/forgot_password" className="link-success">
//                       Forgot password?
//                     </Link>
//                   </div>
//                   <button type="submit" className="btn1 btn btn-sm primary1">
//                     Login
//                   </button>
//                   <hr className="my-4" />
//                   <p>
//                     Don't have an account?{" "}
//                     <Link to="/register/student" className="link-success">
//                       Register as Student
//                     </Link>
//                     <span className="text-secondary"> OR </span>
//                     <a href="/register/college" className="link-success">
//                       College
//                     </a>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//           <span className="text-danger">
//             <b>{errorMesg}</b>
//           </span>
//         </div>
//       </div>
//       <div className={show} id="snackbar">
//         You have successfully logged out..
//       </div>
//       <div className={show1} id="snackbar">
//         College Registered Successfully..
//       </div>
//       <div className={show2} id="snackbar">
//         Password Updated Successfully..
//       </div>
//       <div className={show3} id="snackbar">
//         Student Registered Successfully..
//       </div>
//     </>
//   );
// //};

// export default Login;
