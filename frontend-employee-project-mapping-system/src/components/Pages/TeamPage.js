import React from "react";
import { useState } from "react";
import member1 from "../Images/Rohan_Dsouza.jpeg";
import member2 from "../Images/Sachin_Bichitkar.jpeg";
import member3 from "../Images/Sakshi_Arzare.jpg";
import member4 from "../Images/Sanket_Dongare.jpeg";
import member5 from "../Images/Shubham_Pawar.jpeg";
import background from "../Images/MaterialUI.png";

const TeamPage = () => {
  // const [teamMembers, setTeamMembers] = useState(team);

  return (
    <div className="team-page">
      <h1 className="team-heading text-center my-3">Our Team</h1>
      <div className="container">
        <center>
          <div className="row">
            <div className="col-4 ">
              <img
                src={member1}
                className="rounded-start img-fluid mt-5"
                style={{ width: "300px ", height: "320px",border:"2px solid black"}}
              ></img>
              <p>Rohan Dsouza</p>
            </div>
            <div className="col-4 ">
              <img
                src={member2}
                className="rounded-start img-fluid mt-5"
                style={{ width: "300px", height: "320px", border:"2px solid black"}}
              ></img>
              <p>Sachin Bichitkar</p>
            </div>
            <div className="col-4 ">
              <img
                src={member3}
                className="rounded-start img-fluid mt-5"
                style={{ width: "300px",height: "320px", border:"2px solid black" }}
              ></img>
              <p>Sakshi Arzare</p>
            </div>

            <div className="col-2">
              
            </div>
             <div className="col-4 ">
              <img
                src={member4}
                className="rounded-start img-fluid mt-5"
                style={{ width: "300px" ,height: "320px" , border:"2px solid black"}}
              ></img>
              <p>Sanket Dongare</p>
            </div>
            <div className="col-4 ">
              <img
                src={member5}
                className="rounded-start img-fluid mt-5"
                style={{ width: "300px" ,height: "320px", border:"2px solid black"}}
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
