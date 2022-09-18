import React, { useEffect, useRef, useState } from "react";
import admin from "../Images/Admin.jpg";
// import AdminService from "../../Services/AdminService";

const Home = () => {

    

    return (
        <div className="container-fluid">
            <div className="border border-1 rounded" style={{ margin: "10%", backgroundColor: "#548a69" }}>
                <div className="m-3">
                    <div className="d-flex justify-content-center">
                        <img
                            src={admin}
                            alt="Admin"
                            width={170} height={200}
                        />
                    </div>
                    <h2 className="display-5 text-center mt-3" style={{ color: "white" }}><b>Welcome Back <span>Admin</span></b></h2>
                </div>
                
            </div>
        </div>
    )
}

export default Home;