import React from "react";
import { useEffect, useState } from "react";
import AdminServices from "../../Services/AdminServices";

const AddSkills = () => {
  // let studentId = window.sessionStorage.getItem("id");

  const [skillId, setSkillId] = useState("");
  const [skill, setSkill] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [dateOfCompletion, setDateOfCompletion] = useState("");
  const [certificationLink, setCertificationLink] = useState("");
  const [certificatePdf, setCertificatePdf] = useState("");
  const [technologyId, setTechnologyId] = useState("");

  const [skillIdErr, setSkillIdErr] = useState("");
  const [skillErr, setSkillErr] = useState("");
  const [employeeIdErr, setEmployeeIdErr] = useState("");
  const [dateOfCompletionErr, setDateOfCompletionErr] = useState("");
  const [certificationLinkErr, setCertificationLinkErr] = useState("");
  const [certificatePdfErr, setCertificatePdfErr] = useState("");
  const [technologyIdErr, setTechnologyIdErr] = useState("");

  // const [show, setShow] = useState("");
  // const [show1, setShow1] = useState("");
  const [error, setError] = useState("");
  // const [disable, setDisable] = useState("")

  const [skills, setSkills] = useState([]);

  // const init = () => {
  //     StudentService.getEducationDetailsOfStudent(studentId).then(response => {
  //         console.log(response.data);
  //         setEducations(response.data);
  //     }).catch(err => {
  //         console.log(err);
  //     })
  // }
  // useEffect(() => {
  //     init();
  //     AdminService.getAcademicDates().then(resp => {
  //         let updationDate = resp.data.updationDate;
  //         let resultDate = resp.data.resultDate;
  //         if (((Date.parse(updationDate)) <= (Date.parse(new Date())))||((Date.parse(resultDate)) <= (Date.parse(new Date())))) {
  //             setDisable("Disabled");
  //         }
  //         else {
  //             setDisable("");
  //         }
  //     }).catch(err => {
  //         console.log(err);
  //     })
  // }, []);

  let skillIdHandler = (event) => {
    setSkillId(event.target.value);
    if (skillIdErr !== "" || skillIdErr !== null) {
      setSkillIdErr("");
    }
  };

  let skillHandler = (event) => {
    setSkill(event.target.value);
    if (skillErr !== "" || skillErr !== null) {
      setSkillErr("");
    }
  };

  let employeeIdHandler = (event) => {
    setEmployeeId(event.target.value);
    if (employeeIdErr !== "" || employeeIdErr !== null) {
      setEmployeeIdErr("");
    }
  };

  let dateOfCompletionHandler = (event) => {
    setDateOfCompletion(event.target.value);
    if (dateOfCompletionErr !== "" || dateOfCompletionErr !== null) {
      setDateOfCompletionErr("");
    }
  };

  let certificationLinkHandler = (event) => {
    setCertificationLink(event.target.value);
    if (certificationLinkErr !== "" || certificationLinkErr !== null) {
      setCertificationLinkErr("");
    }
  };

  let certificatePdfHandler = (event) => {
    setCertificatePdf(event.target.value);
    if (certificatePdfErr !== "" || certificatePdfErr !== null) {
      setCertificatePdfErr("");
    }
  };

  let technologyIdHandler = (event) => {
    setTechnologyId(event.target.value);
    if (technologyIdErr !== "" || technologyIdErr !== null) {
      setTechnologyIdErr("");
    }
  };

  let validation = () => {
    let flag = true;

    if (skillId === "" || skillId === null) {
      setSkillIdErr("Please select correct Skill Id");
      flag = false;
    }

    if (skill === "" || skill === null) {
      setSkillErr("This field is compulsory");
      flag = false;
    }
    if (employeeId === "" || employeeId === null) {
      setEmployeeIdErr("This field is compulsory");
      flag = false;
    }

    if (dateOfCompletion === "" || dateOfCompletion === null) {
      setDateOfCompletionErr("This field is compulsory");
      flag = false;
    }

    if (certificationLink === "" || certificationLink === null) {
      setCertificationLinkErr("This field is compulsory");
      flag = false;
    }
    if (certificatePdf === "" || certificatePdf === null) {
      setCertificatePdfErr("This field is compulsory");
      flag = false;
    }

    if (technologyId === "" || technologyId === null) {
      setTechnologyIdErr("This field is compulsory");
      flag = false;
    }

    if (flag) return true;
  };

  let handleDelete = (skillId) => {
    //if (disable === "") {
    AdminServices.deleteSkills(skillId)
      .then((resp) => {
        // StudentService.deleteEducation(educationId, studentId).then(resp => {
        console.log(resp.data);
        // init();
        // setShow1("show");
        setTimeout(() => {
          // setShow1("");
          clearTimeout();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  //     else {
  //         alert("Last Date for Updating Student Details is OVER..");
  //     }

  let onAddSkillsSubmit = (event) => {
    event.preventDefault();
    // if (disable === "") {
    if (validation()) {
      setSkillIdErr("");
      setSkillErr("");
      setEmployeeIdErr("");
      setDateOfCompletionErr("");
      setCertificationLinkErr("");
      setCertificatePdfErr("");
      setTechnologyIdErr("");
      console.log("...." + skillId);
      let skill = {
        skillId: skillId,
        skill: skill,
        employeeId: employeeId,
        dateOfCompletion: dateOfCompletion,
        certificationLink: certificationLink,
        certificatePdf: certificatePdf,
        technologyId: technologyId,
      };
      console.log(skill);

      let skillDetails = {
        skillId,
        skill,
        employeeId,
        dateOfCompletion,
        certificationLink,
        certificatePdf,
        technologyId,
      };

      AdminServices.addSkills(skillDetails)
        .then((response) => {
          //console.log("Education Added", response.data);
          setSkillIdErr("");
          setSkillErr("");
          setEmployeeIdErr("");
          setDateOfCompletionErr("");
          setCertificationLinkErr("");
          setCertificatePdfErr("");
          setTechnologyIdErr("");
          // init();
          // setShow("show");
          // setTimeout(function () { setShow(""); clearTimeout(); }, 3000)
        })
        .catch((err) => {
          console.log("Error found", err);
          setError("Something went wrong");
        });
    }
  };

  return (
    <div className="container-fluid w-50 mt-5 add-qualification-details">
      <div className="m-3">
        <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
          Skills
        </h2>
        <p className="text-50 text-success mb-3 dashboard-data-section-para">
          Please enter skill Details
        </p>
        <div className="border border-1 rounded">
          <div className="m-3">
            <form onSubmit={onAddSkillsSubmit} className="department-form">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={skillId}
                  onChange={skillIdHandler}
                  placeholder="Enter Skill Id"
                />
                <label>Skill Id</label>
                <span className="text-danger">{skillIdErr}</span>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={skill}
                  onChange={skillHandler}
                  placeholder="enter skill"
                />
                <label> Skill </label>
                <span className="text-danger">{skillErr}</span>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={employeeId}
                  onChange={employeeIdHandler}
                  placeholder="Enter Employee Id"
                />
                <label>Employee Id </label>
                <span className="text-danger">{employeeIdErr}</span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={dateOfCompletion}
                  onChange={dateOfCompletionHandler}
                  placeholder="Date Of Completion"
                />
                <label>Date Of Completion</label>
                <span className="text-danger">{dateOfCompletionErr}</span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={certificationLink}
                  onChange={certificationLinkHandler}
                  placeholder="Certification Link"
                />
                <label>Certification Link</label>
                <span className="text-danger">{certificationLinkErr}</span>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={certificatePdf}
                  onChange={certificatePdfHandler}
                  placeholder="Certificate Pdf"
                />
                <label>Certificate Pdf</label>
                <span className="text-danger">{certificatePdfErr}</span>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={technologyId}
                  onChange={technologyIdHandler}
                  placeholder="Technology Id"
                />
                <label>Technology Id</label>
                <span className="text-danger">{technologyIdErr}</span>
              </div>

              <div className="row g-1">
                <button type="submit" className="btn btn-primary">
                  {" "}
                  Add Skills{" "}
                </button>
              </div>

              {/* <div className="form-floating mb-3">
                                    <select className="form-select" value={name} onChange={onNameHandler} disabled={disable}>
                                        <option value="" selected>--SELECT--</option>
                                        <option value="SSC">Department 1</option>
                                        <option value="HSC">Department 2</option>
                                    </select>
                                    <label>Department</label>
                                    <span className="text-danger">{nameErr}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={institute} onChange={instituteHandler} placeholder="Enter Institute" disabled={disable} />
                                    <label>Name of your Institute</label>
                                    <span className="text-danger">{instituteErr}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" value={percentage} onChange={percentageHandler} placeholder="Enter Percentage" disabled={disable} />
                                    <label>Percentage</label>
                                    <span className="text-danger">{percentageErr}</span>
                                </div>
                                <div className="form-floating mb-3">
                                    <select className="form-select" value={yop} onChange={yopHandler} disabled={disable}>
                                        <option value="" selected>--SELECT--</option>
                                        {yearArray.map((ele, key) => {
                                            return (
                                                <option value={ele}>{ele}</option>
                                            );
                                        })}
                                    </select>
                                    <label>Year of Passing</label>
                                    <span className="text-danger">{yopErr}</span>
                                </div>
                                <div className="row g-1">
                                    <button type="submit" className="btn1 primary1">Add Qualification</button>
                                </div> */}
            </form>
          </div>
        </div>
        <span className="text-danger">{error}</span>
        {/* <div className={show} id="snackbar">Education Details Added Successfully<output></output></div>
                <div className={show1} id="snackbar">Education Details Deleted<output></output></div> */}
      </div>

      <hr />
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Skill Id</th>
              <th>Skill</th>
              <th>Employee Id</th>
              <th>Date Of Completion</th>
              <th>Certification Link</th>
              <th>Certificate Pdf</th>
              <th>Technology Id</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr key={skills.skillId}>
                <td>{skills.skill}</td>
                <td>{skills.employeeId}</td>
                <td>{skills.dateOfCompletion}</td>
                <td>{skills.certificationLink}</td>
                <td>{skills.certificatePdf}</td>
                <td>{skills.technologyId}</td>
                <td>
                  <center>
                    <button
                      className="btn1 primary1 rounded"
                      onClick={() => {
                        handleDelete(skills.skillId);
                      }}
                    >
                      Delete
                    </button>
                  </center>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddSkills;
