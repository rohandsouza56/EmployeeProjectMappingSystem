import React from "react";
import { useEffect, useState } from "react";
import EmployeeService from "../../Services/EmployeeService";
import { Button, Modal, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../App.css";

const AddSkills = () => {
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


  const getAllSkills = () => {
    console.log(localStorage.getItem("jwtToken"));
    EmployeeService.getAllSkills()
      .then((response) => {
        setAllSkills(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
    setSkillIdErr("");
      setSkillErr("");
      setEmployeeIdErr("");
      setDateOfCompletionErr("");
      setCertificationLinkErr("");
      setCertificatePdfErr("");
      setTechnologyIdErr("");
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

 

  let AddSkillsSubmit = (event) => {
    event.preventDefault();

    if (validation()=== true) {
     
      let skillDetails= {
         skillId,
         skill,
          employeeId,
         dateOfCompletion,
         certificationLink,
         certificatePdf,
         technologyId,
      };
      console.log(skillDetails);


      EmployeeService.addNewSkills(skillDetails)
        .then((response) => {
          setSkillIdErr("");
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
    }
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
