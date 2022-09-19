import React, { useState, useEffect } from "react";
import AdminServices from "../../Services/AdminServices";

const AddProjectRequirment = () => {
  const [technologyId, setTechnologyId] = useState("");
  const [techName, setTechName] = useState("");
  const [projectId, setProjectId] = useState("");
  const [projectName, setProjectName] = useState("");

  const [technologyErr, setTechnologyErr] = useState("");
  const [techNameErr, setTechNameErr] = useState("");
  const [projectIdErr, setProjectIdErr] = useState("");

  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const [technologies, setTechnologies] = useState([]);
  const [projects, setProjects] = useState([]);

  const getAllTechnologies = () => {
    AdminServices.getAllTechnologies()
      .then((response) => {
        setTechnologies(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAllProjects = () => {
    AdminServices.getAllProjects()
      .then((response) => {
        setProjects(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getAllTechnologies();
    getAllProjects();
  }, []);

  let technologyHandler = (event) => {
    if (technologyErr !== "" || technologyErr !== null) setTechnologyErr("");
    if (errorMsg !== " " || errorMsg !== null) setErrorMsg("");
    setTechnologyId(event.target.value);
  };

  let projectIdHandler = (event) => {
    setProjectId(event.target.value);
    if (projectIdErr !== "" || projectIdErr !== null) {
      setProjectIdErr("");
    }
  };

  let validation = () => {
    let flag = true;

    if (technologyId === "") {
      setTechnologyErr("Please Enter Technology Id");
      flag = false;
    }

    if (projectId === "" || projectId === null) {
      setProjectIdErr("Please Enter Project Id");
      flag = false;
    }

    if (flag) {
      return true;
    }
  };

  let handleDelete = (technologyId) => {
    //if (disable === "") {
    AdminServices.deleteTechnology(technologyId)
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
  };

  let onSubmit = (event) => {
    event.preventDefault();

    if (validation()) {
      setTechnologyErr("");
      setProjectIdErr("");

      let requirment = {
        technology: {
          technologyId,
        },
        projects: {
          projectId,
        },
      };

      AdminServices.addRequirment(requirment)
        .then((response) => {
          setTechnologyId("");
          setProjectId("");
          setErrorMsg("");
          setSuccessMsg("Project Requirement Details Added Successfully");
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
    <div className="container-fluid w-50 mt-5 add-qualification-details form-background">
      <div className="m-3">
        <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
          Project Requirment
        </h2>
        <p className="text-50 text-success mb-3 dashboard-data-section-para">
          Please enter Project and Technology Id's
        </p>
        <div className="border border-1 rounded">
          <div className="m-3">
            <form onSubmit={onSubmit} className="department-form">
              <div className="form-floating mb-3">
                <input
                  type="text"
                  className="form-control"
                  value={projectId}
                  onChange={projectIdHandler}
                  placeholder="Enter Technology Name"
                />
                <label>Project Id</label>
                <span className="text-danger">{projectIdErr}</span>
              </div>

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
              <div className="row g-1">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
        <span className="text-danger">{errorMsg}</span>
        <span className="text-success">{successMsg}</span>
      </div>

      <hr />
    </div>
  );
};

export default AddProjectRequirment;
