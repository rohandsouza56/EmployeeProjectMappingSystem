import React from "react";


const AddProjects = () => {
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
                  <form>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                       // value={name}
                        //onChange={nameTextHandler}
                        placeholder="Enter Project Name"
                        
                      />
                      <label>Project Name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        // value={email}
                        // onChange={emailTextHandler}
                        placeholder="enter description"
                        
                      />
                      <label>description</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="date"
                        className="form-control"
                        // value={age}
                        // onChange={ageTextHandler}
                        placeholder="Enter startdate"
                        
                      />
                      <label>startdate</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="date"
                        className="form-control"
                        // value={city}
                        // onChange={cityTextHandler}
                        placeholder="End date"
                      />
                      <label>End date</label>
                      {/* <span className="text-danger">{cityError}</span> */}
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        // value={states}
                        // onChange={stateTextHandler}
                        placeholder="Enter location"
                      />
                      <label>location</label>
                      {/* <span className="text-danger">{stateError}</span> */}
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        // value={country}
                        // onChange={countryTextHandler}
                        placeholder="Enter ManagerId"
                      />
                      <label>ManagerId</label>
                      {/* <span className="text-danger">{countryError}</span> */}
                    </div>
                    
                    <div className="row g-1">
                      <button type="submit" className="btn1 primary1">
                        Update Details
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
        </>
      );
    };
    
    export default AddProjects;
    