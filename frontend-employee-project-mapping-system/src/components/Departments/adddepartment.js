import React, {useState, useEffect} from 'react'
import DepartmentService from '../../Services/DepartmentService';
import './Department.css'


const AddDepartments = () => {
  

  const [projectId, setprojectId] = useState("");
  const [name, setName] = useState("");
  const [currentStrength, setCurrentStrength] = useState("");
  const [maximumStrength, setMaximumStrength] = useState("");
  
  


  // useEffect(() => {
  //   if(studentId!=null){
  //     checkUpdation(studentId);
  //   }
  //   //---------------------------------------------------------------------
  //   if (studentName !== null && studentEmail !== null && studentAge !== null) {
  //     setName(obj.studentName);
  //     setEmail(obj.studentEmail);
  //     setAge(obj.studentAge);
  //   } else {
  //     setLoggedInStudentFalse(true);
  //   }
  // }, []);

  let addDepartmentDetails = (event) => {
    event.preventDefault();
    
      let DepartmentDetails = {
        projectId,
        name,
        currentStrength,
        maximumStrength
        
      };
      DepartmentService
        .addNewDepartment(DepartmentDetails)
        .then((response) => {
          setProjectId("");
          setName("");
          setCurrentStrength("");
          setMaximumStrength("");
          
    
          // setSuccessMesg("User Created Successfully");
         // window.sessionStorage.setItem("snackbar_registration","show");
          //toastr.success("Student Profile Created Successfully");
          //navigate("/login");
        })
        .catch((error) => {
          console.log(error)
          //setErrorMesg(error.response.data);
        });
    
  };



    return (
        <>
          {/* {loggedInStudentFalse && <Navigate to="/home" />}
          {studentProfileUpdated && <Navigate to="/student_dashboard" />} */}
          {/* <div className="container-fluid w-50 mt-5 add-details-section" > */}
          <div className="row-cols-2" >


            <div className="m-3">
              <h2 className="fw-bold mb-2 text-uppercase dashboard-data-section-heading">
                Add Department Details
              </h2>
              <p className="text-50 text-success mb-3 dashboard-data-section-para">
                Please fill up the form
              </p>
              <div className="border border-1 rounded">
                <div className="m-3">
                  <form onSubmit={addDepartmentDetails}>
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                       // value={name}
                        //onChange={nameTextHandler}
                        placeholder="Enter ProjectId"
                        
                      />
                      <label>Project Id</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="text"
                        className="form-control"
                        // value={email}
                        // onChange={emailTextHandler}
                        placeholder="enter name"
                        
                      />
                      <label>enter name</label>
                    </div>
                    <div className="form-floating mb-3">
                      <input
                        type="number"
                        className="form-control"
                        // value={age}
                        // onChange={ageTextHandler}
                        placeholder="Current Strength"
                        
                      />
                      <label>Current Strength</label>
                    </div>
                    <div className="form-floating mb-3 ">
                      <input
                        type="number"
                        className="form-control"
                        // value={city}
                        // onChange={cityTextHandler}
                        placeholder="Maximum Strength"
                      />
                      <label>Maximum Strength</label>
                      {/* <span className="text-danger">{cityError}</span> */}
                    </div>
                    
                      
                    
                    <div className="row g-1">
                      <button type="submit" className="btn btn-primary">
                        Add Department
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
    
    export default AddDepartments;
    