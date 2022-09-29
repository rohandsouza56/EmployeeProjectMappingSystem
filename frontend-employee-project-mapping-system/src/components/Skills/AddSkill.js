import React from "react";
import { useEffect, useState } from "react";
import AdminServices from "../../Services/AdminServices";
import EmployeeService from "../../Services/EmployeeService";
import { Button, Modal, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../App.css";

const AddSkills = () => {
  const [skill, setSkill] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [dateOfCompletion, setDateOfCompletion] = useState("");
  const [certificationLink, setCertificationLink] = useState("");
  const [certificatePdf, setCertificatePdf] = useState("");
  const [technologyId, setTechnologyId] = useState("");

  const [skillErr, setSkillErr] = useState("");
  const [employeeIdErr, setEmployeeIdErr] = useState("");
  const [dateOfCompletionErr, setDateOfCompletionErr] = useState("");
  const [certificationLinkErr, setCertificationLinkErr] = useState("");
  const [certificatePdfErr, setCertificatePdfErr] = useState("");
  const [technologyIdErr, setTechnologyIdErr] = useState("");
  const [technologies, setTechnologies] = useState([]);
  const [successMsg, setSuccessMsg] = useState("");
   const [errorMsg, setErrorMsg] = useState("");



  //--------------for modal--------------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    getAllSkills();
    setShow(true);
  };
  const [allSkills, setAllSkills] = useState([]);
  //-------------------------------------
  useEffect(() => {
    getAllTechnology();
  }, []);

  const getAllSkills = () => {
    console.log(
      JSON.parse(window.sessionStorage.getItem("employee")).employeeId
    );
    console.log(localStorage.getItem("jwtToken"));
    EmployeeService.getSkillsByEmployeeId(
      JSON.parse(window.sessionStorage.getItem("employee")).employeeId
    )
      .then((response) => {
        console.log(response.data);
        setAllSkills(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllTechnology = () => {
    AdminServices.getAllTechnologies()
      .then((response) => {
        setTechnologies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
    setCertificatePdf(event.target.files[0]);
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
    
      setSkillErr("");
      setEmployeeIdErr("");
      setDateOfCompletionErr("");
      setCertificationLinkErr("");
      setCertificatePdfErr("");
      setTechnologyIdErr("");
      let flag = true;


    if (skill === "" || skill === null) {
      setSkillErr("This field is compulsory");
      flag = false;
    }

    if (dateOfCompletion === "" || dateOfCompletion === null) {
      setDateOfCompletionErr("This field is compulsory");
      flag = false;
    }


    if (technologyId === "" || technologyId === null) {
      setTechnologyIdErr("This field is compulsory");
      flag = false;
    }

    if (flag) return true;
  };

 

  let AddSkillsSubmit = (event) => {
    event.preventDefault();

    if (validation()=== true) {
     
      let skillDetails= {
         skill:skill,
          employee:{employeeId:JSON.parse(window.sessionStorage.getItem('employee')).employeeId},
          dateOfCompletion,
         certificationLink,
         certificatePdf,
         technologyId:{technologyId},
      };
      console.log(skillDetails);

      EmployeeService.addSkill(skillDetails)
        .then((response) => {
         

          setSkillErr("");
          setEmployeeIdErr("");
          setDateOfCompletionErr("");
          setCertificationLinkErr("");
          setCertificatePdfErr("");
          setTechnologyIdErr("");
           setErrorMsg("");
          toast.success("Skills Added Successfully");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error Uploading Details");
        });
/*
      EmployeeService.addNewSkills(skillDetails)
        .then((response) => {
          setSkillErr("");
          setEmployeeIdErr("");
          setDateOfCompletionErr("");
          setCertificationLinkErr("");
          setCertificatePdfErr("");
          setTechnologyIdErr("");
           setErrorMsg("");
          toast.success("Skills Added Successfully");
        })
        .catch((err) => {
          console.log("Error found", err);
          setErrorMsg("Error");
          setSuccessMsg("");
          toast.success("Something Went Wrong");
        });
      */  }
  };

   let handleDelete = (skillId) => {
    EmployeeService.deleteSkills(skillId)
      .then((resp) => {
        console.log(resp.data);
        getAllSkills();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    <div className="container-fluid w-50 mt-5 add-qualification-details form-background">
      <div className="m-3">
        <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
         Add  Skills
        </h2>
        <p className="text-50 text-success mb-3 dashboard-data-section-para">
          Please enter skill Details
        </p>
        <div className="border border-1 rounded">
          <div className="m-3">
            <form onSubmit={AddSkillsSubmit} className="department-form">
            <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={ JSON.parse(window.sessionStorage.getItem('employee')).employeeId}
                  onChange={employeeIdHandler}
                  placeholder="Enter Employee Id" disabled
                />
                <label>Employee Id </label>
                <span className="text-danger">{employeeIdErr}</span>
              </div>

              <div className="form-floating mb-3">
                  <select
                    class="form-select"
                    onChange={technologyIdHandler}
                    aria-label="Select Technology"
                  >
                    <option hidden disabled selected value>
                      {" "}
                      -- Select Technology --{" "}
                    </option>
                    {technologies.map((technology) => (
                      <option
                        key={technology.technologyId}
                        value={technology.technologyId}
                      >
                        {technology.technologyName}
                      </option>
                    ))}
                  </select>
                  <span className="text-danger">{technologyIdErr}</span>
                </div>
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={skill}
                  onChange={skillHandler}
                  placeholder="Enter Skill Description"
                />
                <label> Skill Description </label>
                <span className="text-danger">{skillErr}</span>
              </div>

             
              <div className="form-floating mb-3">
                <input
                  type="date"
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
                  type="text"
                  className="form-control"
                  value={certificationLink}
                  onChange={certificationLinkHandler}
                  placeholder="Certification Link"
                />
                <label>Certification Link</label>
              </div>

              
              <div class="mb-3">
                <label for="formFile" class="form-label">
                Certificate Pdf
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  onChange={certificatePdfHandler}
                  placeholder="Upload Certificate Pdf"
                ></input>
  
              </div>
              
              <div className="row g-1">
                <button type="submit" className="btn btn-primary">
                  
                  Add Skills
                </button>
              </div>
            </form>
          </div>
        </div>
        <span className="text-danger">{errorMsg}</span>
          <span className="text-success">{successMsg}</span>
      </div>

       <div className="modalButtonDiv">
          <Button
            className="modalButton bg-info"
            varient="info"
            onClick={handleShow}
          >
            View Skills
          </Button>
        </div>
      </div>

      
      

      <Modal show={show} size="lg" onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Skills</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table striped border hover>
          <thead>
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
            {allSkills.map((allSkill) => (
              <tr key={allSkill.skillId}>
                <td>{allSkill.skill}</td>
                <td>{allSkill.employeeId}</td>
                <td>{allSkill.dateOfCompletion}</td>
                <td>{allSkill.certificationLink}</td>
                <td>{allSkill.certificatePdf}</td>
                <td>{allSkill.technologyId}</td>
                <td>
                 
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(allSkill.skillId)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </Modal.Body>
        <Modal.Footer>
          <Button varient="primary" onClick={handleClose}>
            {" "}
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer/>
      
    </>
  );
  
};

export default AddSkills;