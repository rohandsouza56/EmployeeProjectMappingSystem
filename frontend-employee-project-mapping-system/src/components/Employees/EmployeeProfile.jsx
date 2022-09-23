import { useState } from "react";
import EmployeeService from "../../Services/EmployeeService";
import "../Employees/EmployeeProfile.css";

const EmployeeProfile = () => {
  const [employee, setEmployee] = useState("");
  const [skills, setSkills] = useState("");

  const getSkills = () => {};
  const getEmployee = () => {};
  return (
    <>
      <div className="container">
        <div className=" headpart">
          <div className="p-4">
            <p className="header">Name :</p>
            <p style={{ fontWeight: "bold", color: "#ffff" }}>Designation :</p>
          </div>
        </div>
        <div className="p-5">
          <div>
            <p className="titles">
              Information <hr />
            </p>
            <div className="row">
              <div className="col-4 mb-2 subtitles">Email ID :</div>
              <div className="col-4 mb-2 subtitles">Phone No :</div>
            </div>
            <div className="row">
              <div className="col-4 subtitles">Date of Joining :</div>
              <div className="col-4 subtitles">Gender :</div>
            </div>
          </div>

          <div className="mt-5">
            <p className="titles">
              Project <hr />
            </p>
            <div className="row">
              <div className="col-4 subtitles">Project Name :</div>
              <div className="col-4 subtitles">Department :</div>
            </div>
          </div>

          <div className="mt-5">
            <p className=" titles">
              Skills <hr />
            </p>
            <div className="row">
              <table class="table table-borderless">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" className="col-1 text-end">
                      1
                    </th>
                    <td>Mark</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmployeeProfile;
