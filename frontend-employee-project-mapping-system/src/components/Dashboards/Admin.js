import React, { useState, useEffect } from "react";

// import AdminServices from "../../Services/AdminServices";
import AdminServices from "../../Services/AdminServices";
import { Button, Modal, Table } from "react-bootstrap";

 const Admin = () => {
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

    return ( <> 
 <Button className="ms-5" varient="secondary" onClick={handleShow}>
        View Projects
      </Button>
      <Modal
        show={show}
        size="lg"
        onHide={handleClose}
        backdrop="static"
        // dialogClassName='modal-90w'
      >
        <Modal.Header closeButton>
          <Modal.Title>Project List</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table striped border hover>
            <thead>
              <tr>
                <th>#</th>
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
                  <td>{allproject.description}</td>
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
    </>
  );
};


export default Admin;
