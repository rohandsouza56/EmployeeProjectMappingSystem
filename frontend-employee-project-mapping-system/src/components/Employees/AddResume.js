import React, { useState, useEffect } from "react";
import AdminService from "../../Services/AdminServices";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import EmployeeService from "../../Services/EmployeeService";

const AddResume = () => {
  const [resume, setResume] = useState([]);

  const [resumeErr, setResumeErr] = useState("");

  let resumeHandler = (event) => {
    setResume(event.target.files[0]);
    if (resumeErr !== "" || resumeErr !== null) {
      setResumeErr("");
    }
  };

  let validation = () => {
    let flag = true;

    if (resume === "") {
      setResumeErr("Please Enter Resume");
      flag = false;
    }

    if (flag) {
      return true;
    }
  };

  let addResumeSubmit = (event) => {
    event.preventDefault();

    if (validation()) {
      setResumeErr("");

      console.log(resume);
      EmployeeService.addResume(resume)
        .then((response) => {
          setResume("");

          toast.success("Resume Details Added Successfully");
        })
        .catch((error) => {
          console.log(error);
          toast.error("Error Uploading Details");
        });
    }
  };

  return (
    <div className="container-fluid w-50 mt-5 add-qualification-details form-background">
      <div className="m-3">
        <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
          Add Resume
        </h2>
        <p className="text-50 text-success mb-3 dashboard-data-section-para">
          Please enter Resume Details Here
        </p>
        <div className="border border-1 rounded">
          <div className="m-3">
            <form onSubmit={addResumeSubmit} className="department-form">
              <div class="mb-3">
                <label for="formFile" class="form-label">
                  Resume
                </label>
                <input
                  class="form-control"
                  type="file"
                  id="formFile"
                  onChange={resumeHandler}
                  placeholder="Upload Resume"
                ></input>
                <span className="text-danger">{resumeErr}</span>
              </div>
              <div className="row g-1">
                <button type="submit" className="btn btn-primary">
                  Add Resume
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <hr />
      <div className="table-responsive">
        <ToastContainer />
      </div>
    </div>
  );
};

export default AddResume;
