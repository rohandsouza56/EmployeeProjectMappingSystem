import React, { useState, useEffect } from "react";
import AdminService from "../../Services/AdminServices";

const AddTechnology = () => {
  const [technologyName, settechnologyName] = useState("");
  const [resourceId, setResourceId] = useState("");

  const [technologyNameErr, settechnologyNameErr] = useState("");
  const [resourceIdErr, setResourceIdErr] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [techlogies, setTechnologies] = useState([]);

  const getAllTechnologies = () => {
    AdminService.getAllTechnologies()
      .then((response) => {
        setTechnologies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllTechnologies();
  }, []);

  let technologyNameHandler = (event) => {
    settechnologyName(event.target.value);
    if (technologyNameErr !== "" || technologyNameErr !== null) {
      settechnologyNameErr("");
    }
  };

  let resourceIdHandler = (event) => {
    setResourceId(event.target.value);
    if (resourceIdErr !== "" || resourceIdErr !== null) {
      setResourceIdErr("");
    }
  };

  let validation = () => {
    let flag = true;

    if (technologyName === "") {
      settechnologyNameErr("Please Enter Technology");
      flag = false;
    }

    // if (resourceId === "" || resourceId === null) {
    //   setResourceIdErr("Please Enter Resource Id");
    //   flag = false;
    // }

    if (flag) {
      return true;
    }
  };

  let handleDelete = (technologyId) => {
    //if (disable === "") {
    AdminService.deleteTechnology(technologyId)
      .then((resp) => {
        console.log(resp.data);
        getAllTechnologies();
        // setShow1("show");
        setTimeout(() => {
          //setShow1("");
          clearTimeout();
        }, 3000);
      })
      .catch((err) => {
        console.log(err);
      });
    //  }
    //  else {
    //      alert("Last Date for Updating Student Details is OVER..");
    //   }
  };

  let addTechnologySubmit = (event) => {
    event.preventDefault();

    if (validation()) {
      settechnologyNameErr("");
      setResourceIdErr("");

      let technolodyDetails = {
        technologyName,
        // resource: { resourceId },
      };
      console.log(technolodyDetails);
      AdminService.addTechnology(technolodyDetails)
        .then((response) => {
          settechnologyName("");
          setResourceId("");
          setErrorMsg("");
          setSuccessMsg("Department Details Added Successfully");
          setErrorMsg("");
        })
        .catch((error) => {
          console.log(error);
          setSuccessMsg("");
          setErrorMsg("Error");
        });
    }
  };

  return (
    <div className="container-fluid w-50 mt-5 add-qualification-details">
      <div className="m-3">
        <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
          Add Technology
        </h2>
        <p className="text-50 text-success mb-3 dashboard-data-section-para">
          Please enter Technology Details Here
        </p>
        <div className="border border-1 rounded">
          <div className="m-3">
            <form onSubmit={addTechnologySubmit} className="department-form">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={technologyName}
                  onChange={technologyNameHandler}
                  placeholder="Enter Technology Name"
                />
                <label>Technology Name</label>
                <span className="text-danger">{technologyNameErr}</span>
              </div>

              {/* <div className="form-floating mb-3">
                <input
                  type="number"
                  className="form-control"
                  value={resourceId}
                  onChange={resourceIdHandler}
                  placeholder="enter Resource"
                />
                <label> Resource </label>
                <span className="text-danger">{resourceIdErr}</span>
              </div> */}
              <div className="row g-1">
                <button type="submit" className="btn btn-primary">
                  {" "}
                  Add Technology{" "}
                </button>
              </div>
            </form>
          </div>
        </div>
        <span className="text-danger">{errorMsg}</span>
        <span className="text-success">{successMsg}</span>
      </div>

      <hr />
      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Technology Id</th>
              <th>Technology Name</th>
              <th>Resource</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {techlogies.map((technology) => (
              <tr key={technology.technologyId}>
                <td>{technology.technologyId}</td>
                <td>{technology.technologyName}</td>
                <td>{technology.resourceId}</td>
                <td>
                  <center>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleDelete(technology.technologyId);
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

export default AddTechnology;
