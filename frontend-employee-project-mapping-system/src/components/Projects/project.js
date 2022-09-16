import React, {useState, useEffect} from 'react'
import ProjectService from '../../Services/ProjectService';
import { Button,Modal,Table } from 'react-bootstrap';


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

  const [errorMesg, setErrorMesg] = useState("");

    //--------------for modal--------------
    const [show,setShow] = useState(false);
    const handleClose = () =>setShow(false);
    const handleShow = () => {
      getAllProjects();
      setShow(true);
    }
    const [allProject,setAllProject] = useState([]);
  //-------------------------------------

  const getAllProjects =()=>{
    ProjectService.getAllProjects().then((response)=>{
        setAllProject(response.data);
        console.log(response.data);
    }).catch((error)=>{
      console.log(error);
    })
  }

  // useEffect(()=>{
  //   getAllProjects();
  // },[])
  
 
  let nameTextHandler = (event) => {
    if(nameErr!=="" || nameErr!==null) setNameErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setName(event.target.value.toUpperCase());
  };

  let descriptionTextHandler = (event) => {
    if(descriptionErr!=="" || descriptionErr!==null) setDescriptionErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setDescription(event.target.value);
  };

  let startDateTextHandler = (event) => {
    if(startDateErr!=="" || startDateErr!==null) setStartDateErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setStartDate(event.target.value);
  };

  let endDateTextHandler = (event) => {
    if(endDateErr!=="" || endDateErr!==null) setEndDateErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setEndDate(event.target.value);
  };

  let locationTextHandler = (event) => {
    if(locationErr!=="" || locationErr!==null) setLocationErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
    setLocation(event.target.value);
  };

  let managerIdTextHandler = (event) => {
    if(managerIdErr!=="" || managerIdErr!==null) setManagerIdErr("");
    // if (successMesg !== "" || successMesg !== null) setSuccessMesg("");
    if (errorMesg !== "" || errorMesg !== null) setErrorMesg("");
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
      setNameErr("This field is compulsory");
      flag = false;
    }
    if (description === "" || description === null) {
      setDescriptionErr("This field is compulsory");
      flag = false;
    } 

    if (startDate === "" || startDate === null) {
      setStartDateErr("This field is compulsory");
      flag = false;
    } 

    if (endDate === "" || endDate === null) {
      setEndDateErr("This field is compulsory");
      flag = false;
    } 

    if (location === "" || location === null) {
      setLocationErr("This field is compulsory");
      flag = false;
    } 
    if (managerId === "" || managerId === null) {
      setManagerIdErr("This field is compulsory");
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
        managerId
      };
      ProjectService
      .addNewProject(projectDetails)
      .then((response) => {
        setName("");
        setDescription("");
        setStartDate("");
        setEndDate("");
        setLocation("");
        setManagerId("");
  
        // setSuccessMesg("User Created Successfully");
       // window.sessionStorage.setItem("snackbar_registration","show");
        //toastr.success("Student Profile Created Successfully");
        //navigate("/login");
      })
      .catch((error) => {
        console.log(error)
        setErrorMesg(error.response.data);
      });
    }
  };

  let handleDelete = (projectId) => {
     
      ProjectService.deleteProject(projectId).then(response=>{
        console.log(response.data);
        getAllProjects();
      }).catch(err => {
            console.log(err);
        })
}










    return (
        <>
          {/* {loggedInStudentFalse && <Navigate to="/home" />}
          {studentProfileUpdated && <Navigate to="/student_dashboard" />} */}
          <div className="container-fluid w-50 mt-5 add-details-section">
            <div className="m-3">
              <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
                Add Project Details
              </h2>
              <p className="text-50 text-success mb-3 dashboard-data-section-para">
                Please fill up the form
              </p>
              <div className="border border-1 rounded">
                <div className="m-3">
                  <form onSubmit={addProjectDetails}>
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
              {/* <span className="text-success">
                <b>{successMesg}</b>
              </span>
              <span className="text-danger">
                <b>{errorMesg}</b>
              </span> */}
            </div>
          </div>

          {/* ----------------------modal ---------------- */}
          <Button className='ms-5' varient ="secondary" onClick={handleShow} >Show/Delete from ProjectList</Button>
          <Modal 
            show={show}
            size ='lg'
            onHide ={handleClose}
            backdrop ="static"
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
                    {
                      allProject.map((allproject) =>(
                            <tr key = {allproject.projectId}> 
                                <td> {allproject.projectId} </td>
                                <td> {allproject.name} </td>
                                <td>{allproject.description}</td>
                                <td>{allproject.startDate}</td>
                                <td>{allproject.endDate}</td>
                                <td>
                                    <button className = "btn btn-danger" onClick = {() => handleDelete(allproject.projectId)} 
                                    style = {{marginLeft:"10px"}}> Delete</button>
                                </td>
                            </tr>
                      ))
                    }
                </tbody>
              </Table>
            </Modal.Body>
            <Modal.Footer>
              <Button varient="primary" onClick={handleClose}> Close</Button>
            </Modal.Footer>
          </Modal>
        </>
      );
    };
    
    export default AddProjects;
    