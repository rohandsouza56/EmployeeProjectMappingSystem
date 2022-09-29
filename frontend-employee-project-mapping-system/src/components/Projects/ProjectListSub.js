import "./ProjectListSub.css";
import { Button, Modal } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import AdminServices from "../../Services/AdminServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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

  let sendEmail = () => {
    
      let employee = {
        employeeId:JSON.parse(window.sessionStorage.getItem("employee")).employeeId,
        employeeName:JSON.parse(window.sessionStorage.getItem("employee")).employeeName,
        designation:JSON.parse(window.sessionStorage.getItem("employee")).designation,
        dateOfJoining:JSON.parse(window.sessionStorage.getItem("employee")).dateOfJoining,
        mobileNo:JSON.parse(window.sessionStorage.getItem("employee")).mobileNo,
        email:JSON.parse(window.sessionStorage.getItem("employee")).email,
        gender:JSON.parse(window.sessionStorage.getItem("employee")).gender

      };

      console.log(employee);
      AdminServices.sendEmail(employee,projectData.managerId)
        .then((response) => {
          toast.success("Email sent to respective Manager");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Something Went Wrong");
        });
    };


  return (
    <>
      <div className="col-11">
        <div className="card">
          <div className="card__title">Name: {projectData.name}</div>

          <div className="card__body">
          <table className="table  table-striped">
              <tr>
                <th>Id :</th>
                <td>{projectData.projectId}</td>
              </tr>
              <tr>
                <th>Description:</th>
                <td style ={{textAlign:"justify"}}>{projectData.description}</td>
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
              <tr>
                <th rowspan={projectData.projectRequirement.length+1}>Project Requirements:</th><td></td></tr>
                
                {projectData.projectRequirement.map((technology) => (
                  <tr>
              <td>
                {technology.technology.technologyName}
              </td>
              </tr>
                ))}
             
            
           
            </table>

            {/* <p>Manager Id: {projectData.managerId}</p> */}
            <Button className="project-sub-button mt-2" onClick={handleShow}>
              View Departments
            </Button>

            <Button
              className="project-req-button"

              onClick={sendEmail}
            >
              Request Change
            </Button>
            <ToastContainer />
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
