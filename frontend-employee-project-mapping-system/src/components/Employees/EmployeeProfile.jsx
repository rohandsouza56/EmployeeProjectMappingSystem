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
            <p className="header">
              Name :
              <span>
                {
                  JSON.parse(window.sessionStorage.getItem("employee"))
                  ?JSON.parse(window.sessionStorage.getItem("employee"))
                    .employeeName:""
                }
              </span>
            </p>
            <p style={{ fontWeight: "bold", color: "#ffff" }}>
              Designation :
              <span>
                {
                  JSON.parse(window.sessionStorage.getItem("employee"))
                    .designation
                }
              </span>
            </p>
          </div>
        </div>
        <div className="p-5">
          <div>
            <p className="titles">
              Information <hr />
            </p>
            <div className="row">
              <div className="col-4 mb-2 subtitles">
                Email ID :
                <span>
                  {JSON.parse(window.sessionStorage.getItem("employee")).email}
                </span>
              </div>
              <div className="col-4 mb-2 subtitles">
                Phone No :
                <span>
                  {
                    JSON.parse(window.sessionStorage.getItem("employee"))
                      .mobileNo
                  }
                </span>
              </div>
            </div>
            <div className="row">
              <div className="col-4 subtitles">
                Date of Joining :
                <span>
                  {
                    JSON.parse(window.sessionStorage.getItem("employee"))
                      .dateOfJoining
                  }
                </span>
              </div>
              <div className="col-4 subtitles">
                Gender :
                <span>
                  {JSON.parse(window.sessionStorage.getItem("employee")).gender}
                </span>
              </div>
            </div>
          </div>

          <div className="mt-5">
            <p className="titles">
              Project <hr />
            </p>
            <div className="row">
              <div className="col-4 subtitles">
                Project Name :
                <span>
                  {JSON.parse(window.sessionStorage.getItem("projects"))
                    ? JSON.parse(window.sessionStorage.getItem("projects"))
                        .name
                    : "Not Tagged Yet"}
                </span>
              </div>
              <div className="col-4 subtitles">
                Department :
                <span>
                  {JSON.parse(window.sessionStorage.getItem("departments"))
                    ? JSON.parse(window.sessionStorage.getItem("departments"))
                        .name
                    :  "Not Tagged Yet"}
                </span>
              </div>
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
