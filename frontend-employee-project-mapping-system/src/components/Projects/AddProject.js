import React, { useState, useEffect } from "react";

import AdminServices from "../../Services/AdminServices";
import { Button, Modal, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../App.css";

const AddProjects = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [location, setLocation] = useState("");
  const [managerId, setManagerId] = useState("");

  const [nameErr, setNameErr] = useState("");
  const [descriptionErr, setDescriptionErr] = useState("");
  const [startDateErr, setStartDateErr] = useState("");
  const [endDateErr, setEndDateErr] = useState("");
  const [locationErr, setLocationErr] = useState("");
  const [managerIdErr, setManagerIdErr] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  //--------------for modal--------------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    getAllProjects();
    setShow(true);
  };
  const [allProject, setAllProject] = useState([]);
  //-------------------------------------

  const getAllProjects = () => {
    console.log(localStorage.getItem("jwtToken"));
    AdminServices.getAllProjects()
      .then((response) => {
        setAllProject(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  let nameTextHandler = (event) => {
    if (nameErr !== "" || nameErr !== null) setNameErr("");

    if (errorMsg !== "" || errorMsg !== null) setErrorMsg("");
    setName(event.target.value.toUpperCase());
  };

  let descriptionTextHandler = (event) => {
    if (descriptionErr !== "" || descriptionErr !== null) setDescriptionErr("");

    if (errorMsg !== "" || errorMsg !== null) setErrorMsg("");
    setDescription(event.target.value);
  };

  let startDateTextHandler = (event) => {
    if (startDateErr !== "" || startDateErr !== null) setStartDateErr("");
    if (errorMsg !== "" || errorMsg !== null) setErrorMsg("");
    setStartDate(event.target.value);
  };

  let endDateTextHandler = (event) => {
    if (endDateErr !== "" || endDateErr !== null) setEndDateErr("");
    if (errorMsg !== "" || errorMsg !== null) setErrorMsg("");
    setEndDate(event.target.value);
  };

  let locationTextHandler = (event) => {
    if (locationErr !== "" || locationErr !== null) setLocationErr("");
    if (errorMsg !== "" || errorMsg !== null) setErrorMsg("");
    setLocation(event.target.value);
  };

  let managerIdTextHandler = (event) => {
    if (managerIdErr !== "" || managerIdErr !== null) setManagerIdErr("");
    if (errorMsg !== "" || errorMsg !== null) setErrorMsg("");
    setManagerId(event.target.value);
  };

  let validation = () => {
    setNameErr("");
    setDescriptionErr("");
    setStartDateErr("");
    setEndDateErr("");
    setLocationErr("");
    setManagerIdErr("");
    let flag = true;

    if (name === "" || name === null) {
      setNameErr("Please Enter Name");
      flag = false;
    }
    if (description === "" || description === null) {
      setDescriptionErr("Please Enter Project Description");
      flag = false;
    }

    if (startDate === "" || startDate === null) {
      setStartDateErr("Please Enter Start Date");
      flag = false;
    }

    if (endDate === "" || endDate === null) {
      setEndDateErr("Please Enter End Date");
      flag = false;
    }

    if (location === "" || location === null) {
      setLocationErr("Please Enter Location");
      flag = false;
    }
    if (managerId === "" || managerId === null) {
      setManagerIdErr("Please Enter Manager Id");
      flag = false;
    }

    if (flag) {
      return true;
    }
  };

  let addProjectDetails = (event) => {
    event.preventDefault();
    if (validation() === true) {
      let projectDetails = {
        name,
        description,
        startDate,
        endDate,
        location,
        managerId,
      };

      console.log(projectDetails);
      AdminServices.addNewProject(projectDetails)
        .then((response) => {
          setName("");
          setDescription("");
          setStartDate("");
          setEndDate("");
          setLocation("");
          setManagerId("");
          setSuccessMsg("Project Details Added Successfully");
          setErrorMsg("");
          toast.success("Project Details Added Successfully");
        })
        .catch((error) => {
          console.log(error);
          setErrorMsg("Error");
          setSuccessMsg("");
          toast.success("Something Went Wrong");
        });
    }
  };

  let handleDelete = (projectId) => {
    AdminServices.deleteProject(projectId)
      .then((response) => {
        console.log(response.data);
        getAllProjects();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="container-fluid w-50 mt-5 add-details-section form-background">
        <div className="m-3">
          <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
            Add Project Details
          </h2>
          <p className="text-50 text-success mb-3 dashboard-data-section-para">
            Please fill up the form
          </p>
          <div className="">
            <div className="m-3">
              <form className="" onSubmit={addProjectDetails}>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={name}
                    onChange={nameTextHandler}
                    placeholder="Enter Project Name"
                  />
                  <label>Project Name</label>
                  <span className="text-danger">{nameErr}</span>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={descriptionTextHandler}
                    placeholder="Enter Description"
                  />
                  <label>Description</label>
                  <span className="text-danger">{descriptionErr}</span>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    className="form-control"
                    value={startDate}
                    onChange={startDateTextHandler}
                    placeholder="Enter startdate"
                  />
                  <label>Start Date</label>
                  <span className="text-danger">{startDateErr}</span>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="date"
                    className="form-control"
                    value={endDate}
                    onChange={endDateTextHandler}
                    placeholder="End date"
                  />
                  <label>End Date</label>
                  <span className="text-danger">{endDateErr}</span>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={location}
                    onChange={locationTextHandler}
                    placeholder="Enter location"
                  />
                  <label>Location</label>
                  <span className="text-danger">{locationErr}</span>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="number"
                    className="form-control"
                    value={managerId}
                    onChange={managerIdTextHandler}
                    placeholder="Enter Manager Id"
                  />
                  <label>ManagerId</label>
                  <span className="text-danger">{managerIdErr}</span>
                </div>

                <div className="row g-1">
                  <button type="submit" className="btn btn-primary">
                    Add Project
                  </button>
                </div>
              </form>
            </div>
          </div>
          <span className="text-danger">{errorMsg}</span>
          <span className="text-success">{successMsg}</span>
        </div>
        <hr />
        <div className="modalButtonDiv">
          <Button
            className="modalButton bg-info"
            varient="info"
            onClick={handleShow}
          >
            View Projects
          </Button>
        </div>
      </div>

      {/* ----------------------modal ---------------- */}

      <Modal show={show} size="lg" onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Project List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped border hover>
            <thead>
              <tr>
                <th>Project Id</th>
                <th>Project Name</th>
                <th> Project Description</th>
                <th> Start Date</th>
                <th> End Date </th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              {allProject.map((allproject) => (
                <tr key={allproject.projectId}>
                  <td> {allproject.projectId} </td>
                  <td> {allproject.name} </td>
                  <td style = {{textAlign:'justify'}}>{allproject.description}</td>
                  <td>{allproject.startDate}</td>
                  <td>{allproject.endDate}</td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(allproject.projectId)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Modal.Body>
        <Modal.Footer>
          <Button varient="primary" onClick={handleClose}>
            {" "}
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
};

export default AddProjects;
