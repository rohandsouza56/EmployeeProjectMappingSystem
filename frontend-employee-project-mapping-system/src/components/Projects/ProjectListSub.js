import "./ProjectListSub.css";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import AdminServices from "../../Services/AdminServices";

const ProjectListSub = ({ projectData }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    getAllDepartmenrByProjectId(projectData.projectId);
    setShow(true);
  };
  const [departments, setDepartments] = useState([]);

  let getAllDepartmenrByProjectId = (projectId) => {
    AdminServices.getAllDepartmenrByProjectId(projectId)
      .then((response) => {
        console.log(response.data);
        setDepartments(response.data);
      })
      .catch((err) => {
        console.log("Error found", err);
        setDepartments([]);
      });
  };

  return (
    <>
      <div className="col-5">
        <div className="card">
          <div className="card__title">Name: {projectData.name}</div>
          console.log(projectData);
          <div className="card__body">
            <table className="table">
              <tr>
                <th>Id :</th>
                <td>{projectData.projectId}</td>
              </tr>
              <tr>
                <th>Description:</th>
                <td>{projectData.description}</td>
              </tr>
              <tr>
                <th>Location:</th>
                <td>{projectData.location}</td>
              </tr>
              <tr>
                <th>Start Date:</th>
                <td>{projectData.startDate}</td>
              </tr>
              <tr>
                <th>End Date:</th>
                <td>{projectData.endDate}</td>
              </tr>
              {/* <tr>
                <th>Project Requirements</th>
                <td>
                  {projectData.projectRequirement[0].technology.technologyName}
                </td>
              </tr> */}
            </table>

            {/* <p>Manager Id: {projectData.managerId}</p> */}
            <Button className="project-sub-button mt-2" onClick={handleShow}>
              View Departments
            </Button>

            <Button
              className="project-req-button"

              // onClick={handleShow}
            >
              Request Change
            </Button>
          </div>
        </div>
      </div>
      <Modal show={show} size="md" onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>DEPARTMENTS in {projectData.name} </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped>
            <thead>
              <tr>
                <th>Department ID</th>
                <th>Department Names</th>
                <th>Current Strength</th>
                <th>Max Strength</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department) => (
                <tr key={department.departmentId}>
                  <td> {department.departmentId} </td>
                  <td> {department.name} </td>
                  <td>{department.currentStrength}</td>
                  <td>{department.maximumStrength}</td>
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
    </>
  );
};

export default ProjectListSub;
