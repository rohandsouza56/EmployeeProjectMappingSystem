import React, { useEffect, useRef, useState } from "react";
import admin from "../Images/Admin.jpg";
// import AdminService from "../../Services/AdminService";

const Home = () => {
  return (
    <div className="container-fluid">
      <div
        className="border border-0 rounded adminhome"
        style={{ margin: "10%" }}
      >
        <div className="m-3">
          <div className="d-flex justify-content-center">
            {/* <img src={admin} alt="Admin" width={170} height={200} /> */}
          </div>
          <h1 className="display-5 text-center mt-3">
            Welcome Back <span>Admin</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
