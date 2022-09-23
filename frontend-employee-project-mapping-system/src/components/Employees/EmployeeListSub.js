
import { Button } from "react-bootstrap";
const EmployeeListSub = ({ employeeData }) => {
  return (
    <div className="col-5">
      <div className="card">
        <div className="card__title">Name: {employeeData.name}</div>
        <div className="card__body">
          <p>
            <span className="span-head">Id: </span> {employeeData.employeeId}
          </p>
          <p>
            <span className="span-head">Designation: </span>{" "}
            {employeeData.designation}
          </p>
          <p>
            <span className="span-head">Location: </span> {employeeData.dateOfJoining}
          </p>
          <p>
            <span className="span-head">Mobile No: </span>
            {employeeData.mobileNo}
          </p>
          <p>
            <span className="span-head">Email:</span> {employeeData.email}
          </p>
           <p>
            <span className="span-head">Gender:</span> {employeeData.gender}
          </p>
        <p>
            <span className="span-head">Role Id:</span> {employeeData.roleId}
        </p>
         
          <Button
            className="project-sub-button"

            
          >
            View Employee
          </Button>

          
        </div>
      </div>
    </div>
  );
};

export default EmployeeListSub;
