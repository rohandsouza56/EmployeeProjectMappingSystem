import React, { useState, useEffect } from "react";
import AdminServices from "../../Services/AdminServices";
import { Button, Modal, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddDepartment = () => {
  const [departmentId, setDepartmentId] = useState("");
  const [projectId, setProjectId] = useState("");
  const [name, setName] = useState("");
  const [currentStrength, setCurrentStrength] = useState("");
  const [maximumStrength, setMaximumStrength] = useState("");

  const [departmentIdErr, setDepartmentIdErr] = useState("");
  const [projectIdErr, setProjectIdErr] = useState("");
  const [nameErr, setNameErr] = useState("");
  const [currentStrengthErr, setCurrentStrengthErr] = useState("");
  const [maximumStrengthErr, setMaximumStrengthErr] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [departments, setDepartments] = useState([]);

  //--------------for modal--------------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    getAllDepartments();
    setShow(true);
  };
  const [allDepartment, setAllDepartment] = useState([]);
  //-------------------------------------

  const getAllDepartments = () => {
    AdminServices.getAllDepartments(departmentId)
      .then((response) => {
        console.log(response.data);
        setDepartments(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {}, []);

  let onProjectIdHandler = (event) => {
    setProjectId(event.target.value);
    if (projectIdErr !== "" || projectIdErr !== null) {
      setProjectIdErr("");
    }
  };

  let onNameHandler = (event) => {
    setName(event.target.value);
    if (nameErr !== "" || nameErr !== null) {
      setNameErr("");
    }
  };

  let onCurrentStrengthHandler = (event) => {
    setCurrentStrength(event.target.value);
    if (currentStrengthErr !== "" || currentStrengthErr !== null) {
      setCurrentStrengthErr("");
    }
  };

  let onMaximumStrengthHandler = (event) => {
    setMaximumStrength(event.target.value);
    if (maximumStrengthErr !== "" || maximumStrengthErr !== null) {
      setMaximumStrengthErr("");
    }
  };

  let validation = () => {
    let flag = true;

    if (projectId === "" || projectId === null) {
      setProjectIdErr("Please Enter Project ID");
      flag = false;
    }

    if (name === "") {
      setNameErr("Please Enter Department Name");
      flag = false;
    }

    if (currentStrength === "" || currentStrength === null) {
      setCurrentStrengthErr("Please Enter Curretnt Stregth");
      flag = false;
    }
    if (maximumStrength === "" || maximumStrength === null) {
      setMaximumStrengthErr("Please Enter Maximum Strength");
      flag = false;
    }

    if (flag) return true;
  };

  let handleDelete = (departmentId) => {
    AdminServices.deleteDepartment(departmentId)
      .then((resp) => {
        console.log(resp.data);
        getAllDepartments();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  let onAddDepartmentSubmit = (event) => {
    event.preventDefault();

    if (validation()) {
      setDepartmentIdErr("");
      setProjectIdErr("");
      setNameErr("");
      setCurrentStrengthErr("");
      setMaximumStrengthErr("");

      let departmentDetails = {
        projects: {
          projectId,
        },
        name,
        currentStrength,
        maximumStrength,
      };
      console.log(departmentDetails);
      AdminServices.addDepartment(departmentDetails)
        .then((response) => {
          setDepartmentId("");
          setProjectId("");
          setName("");
          setCurrentStrength("");
          setMaximumStrength("");
          setSuccessMsg("Department Details Added Successfully");
          setErrorMsg("");
          toast.success("Department Details Added Successfully");
        })
        .catch((error) => {
          console.log(error);
          setSuccessMsg("");
          toast.success("Something Went Wrong");
        });
    }
  };

  return (
    <div className="container-fluid w-50 mt-5 add-qualification-details form-background">
      <div className="m-3">
        <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
          Department Details
        </h2>
        <p className="text-50 text-success mb-3 dashboard-data-section-para">
          Please enter Department Details
        </p>
        <div className="border border-0 rounded">
          <div className="m-3">
            <form onSubmit={onAddDepartmentSubmit} className="department-form">
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={projectId}
                  onChange={onProjectIdHandler}
                  placeholder="enter Project Id"
                />
                <label> Project Id </label>
                <span className="text-danger">{projectIdErr}</span>
              </div>

              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={onNameHandler}
                  placeholder="Enter Text"
                />
                <label>Department Name </label>
                <span className="text-danger">{nameErr}</span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={currentStrength}
                  onChange={onCurrentStrengthHandler}
                  placeholder="Current Strength"
                />
                <label>Current Strength</label>
                <span className="text-danger">{currentStrengthErr}</span>
              </div>
              <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={maximumStrength}
                  onChange={onMaximumStrengthHandler}
                  placeholder="Maximum Strength"
                />
                <label>Maximum Strength</label>
                <span className="text-danger">{maximumStrengthErr}</span>
              </div>

              <div className="row g-1">
                <button type="submit" className="btn btn-primary">
                  {" "}
                  Add Department{" "}
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
          View Departments
        </Button>
      </div>

      {/* ----------------------modal ---------------- */}

    
      <Modal show={show} size="lg" onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Department List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table className="table table-bordered table-striped">
            <thead className="thead-dark">
              <tr>
                <th>Department Id</th>
                {/* <th>Project Id</th> */}
                <th>Name of Department</th>
                <th>Current Strength</th>
                <th>Max Strength</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department) => (
                <tr key={department.departmentId}>
                  <td>{department.departmentId}</td>
                  <td>{department.name}</td>
                  <td>{department.currentStrength}</td>
                  <td>{department.maximumStrength}</td>
                  <td>
                    <center>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete(department.departmentId);
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
        </Modal.Body>
        <Modal.Footer>
          <Button varient="primary" onClick={handleClose}>
            {" "}
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </div>
  );
};

export default AddDepartment;
