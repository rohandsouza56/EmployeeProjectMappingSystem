import React, { useState, useEffect } from "react";
import AdminServices from "../../Services/AdminServices";
import { Button, Modal, Table } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddResources = () => {
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [technologyId, setTechnologyId] = useState("");
  const [linkErr, setLinkErr] = useState("");
  const [descriptionErr, setDescriptionErr] = useState("");
  const [technologyErr, setTechnologyErr] = useState("");
  const [errorMesg, setErrorMesg] = useState("");
  const [resources, setResources] = useState([]);
  const [technologies, setTechnologies] = useState([]);

  //--------------for modal--------------
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    getAllResources();
    setShow(true);
  };
  const [allResource, setAllResources] = useState([]);
  //-------------------------------------

  const getAllResources = () => {
    AdminServices.getAllResources()
      .then((response) => {
        setResources(response.data);
        console.log(response.data);
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

  useEffect(() => {
    getAllResources();
    getAllTechnology();
  }, []);

  let linkHandler = (event) => {
    if (linkErr !== "" || linkErr !== null) setLinkErr("");
    if (errorMesg !== " " || errorMesg !== null) setErrorMesg("");
    setLink(event.target.value);
  };

  let descriptionHandler = (event) => {
    if (descriptionErr !== "" || descriptionErr !== null) setLinkErr("");
    if (errorMesg !== " " || errorMesg !== null) setErrorMesg("");
    setDescription(event.target.value);
  };

  let technologyHandler = (event) => {
    if (technologyErr !== "" || technologyErr !== null) setTechnologyErr("");
    if (errorMesg !== " " || errorMesg !== null) setErrorMesg("");
    setTechnologyId(event.target.value);
  };

  let validation = () => {
    setLinkErr("");
    setDescriptionErr("");

    let flag = true;

    if (link === "" || link === null) {
      setLinkErr("Please Enter Resource Link");
      flag = false;
    }

    if (description === "" || description === null) {
      setDescriptionErr("Please Enter Description");
      flag = false;
    }

    if (technologyId === "" || technologyId === null) {
      setTechnologyErr("Please select Technology");
      flag = false;
    }

    if (flag) {
      return true;
    }
  };

  let addResourceDetails = (event) => {
    event.preventDefault();
    if (validation() === true) {
      let resourceDetails = {
        link,
        description,
        technology: {
          technologyId,
        },
      };
      console.log(resourceDetails);
      AdminServices.addNewResouce(resourceDetails)
        .then((response) => {
          setLink("");
          setDescription("");
          setTechnologyId("");
          getAllResources();

          toast.success("Resources Details Added Successfully");
        })
        .catch((error) => {
          console.log(error);
          toast.success("Something Went Wrong");
        });
    }
  };

  let handleDelete = (resourceId) => {
    AdminServices.deleteResource(resourceId)
      .then((resp) => {
        console.log(resp.data);
        getAllResources();
        setTimeout(() => {
          clearTimeout();
        }, 3000);
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
            Add Resource Details
          </h2>
          <p className="text-50 text-success mb-3 dashboard-data-section-para">
            Please fill up the form
          </p>
          <div className="border border-0 rounded">
            <div className="m-3">
              <form onSubmit={addResourceDetails}>
                <div className="form-floating mb-3">
                  <select
                    class="form-select"
                    onChange={technologyHandler}
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
                  <span className="text-danger">{technologyErr}</span>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="url"
                    className="form-control"
                    value={link}
                    onChange={linkHandler}
                    placeholder="Enter Link here"
                  />
                  <label>Resource Link</label>
                  <span className="text-danger">{linkErr}</span>
                </div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    value={description}
                    onChange={descriptionHandler}
                    placeholder="enter Resource Name"
                  />
                  <label>Description</label>
                  <span className="text-danger">{descriptionErr}</span>
                </div>

                <div className="row g-1">
                  <button type="submit" className="btn btn-primary">
                    Add Resource
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="modalButtonDiv">
            <Button
              className="modalButton bg-info"
              varient="info"
              onClick={handleShow}
            >
              View Resources
            </Button>
          </div>
        </div>

        <hr />
        {/* ----------------------modal ---------------- */}

        <Modal show={show} size="lg" onHide={handleClose} backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>Resource List</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <table striped border hover>
              <thead className="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Technology Name</th>
                  <th>Description</th>
                  <th>Resource Link</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {resources.map((resource) => (
                  <tr key={resource.resourceId}>
                    <td>{resource.resourceId}</td>
                    <td>Tech Name</td>
                    <td>{resource.description}</td>
                    <td>{resource.link}</td>
                    <td>
                      <center>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            handleDelete(resource.resourceId);
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
    </>
  );
};
export default AddResources;
