import React from "react";
import { useState } from "react";
import member1 from "../Images/Rohan_Dsouza.jpeg";
import member2 from "../Images/Sachin_Bichitkar.jpeg";
import member3 from "../Images/Sakshi_Arzare.jpg";
import member4 from "../Images/Sanket_Dongare.jpeg";
import member5 from "../Images/Shubham_Pawar.jpeg";

const TeamPage = () => {
  // const [teamMembers, setTeamMembers] = useState(team);

  return (
    <div className="team-page my-5" style={{backgroundColor:"rgb(96 192 249 / 54%)"}}>
      <h1 className="team-heading text-center my-3">Our Team</h1>
      <div className="container">
        <center>
          <div className="row">
            <div className="col-4 ">
              <img
                src={member1}
                className="rounded-start img-fluid mt-5"
                style={{ width: "300px ", height: "320px"}}
              ></img>
              <p>Rohan Dsouza</p>
            </div>
            <div className="col-3 ">
              <img
                src={member2}
                className="rounded-start img-fluid mt-5"
                style={{ width: "300px", height: "320px" }}
              ></img>
              <p>Sachin Bichitkar</p>
            </div>
            <div className="col-3 ">
              <img
                src={member3}
                className="rounded-start img-fluid mt-5"
                style={{ width: "300px",height: "320px" }}
              ></img>
              <p>Sakshi Arzare</p>
            </div>
             <div className="col-4 ">
              <img
                src={member4}
                className="rounded-start img-fluid mt-5"
                style={{ width: "300px" ,height: "320px"}}
              ></img>
              <p>Sanket Dongare</p>
            </div>
            <div className="col-5 ">
              <img
                src={member5}
                className="rounded-start img-fluid mt-5"
                style={{ width: "300px" ,height: "320px"}}
              ></img>
              <p>Shubham Pawar</p>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
};

export default TeamPage;
