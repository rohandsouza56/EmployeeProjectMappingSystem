import { Button } from "react-bootstrap";
const EmployeeListSub = ({ employeeData }) => {
  return (
    <div className="col-5">
      <div className="card">
        <div className="card__title">Name: {employeeData.name}</div>

        <div className="card__body">
          <table className="table  table-striped">
            <tr>
              <th>Name :</th>
              <td>{employeeData.name}</td>
            </tr>
            <tr>
              <th>Id:</th>
              <td>{employeeData.employeeId}</td>
            </tr>
            <tr>
              <th>Designation:</th>
              <td>{employeeData.designation}</td>
            </tr>
            <tr>
              <th>Date of Joining:</th>
              <td>{employeeData.dateOfJoining}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{employeeData.email}</td>
            </tr>

            <tr>
              <th>Gender:</th>
              <td>{employeeData.gender}</td>
            </tr>

            <tr>
                <th rowspan={employeeData.skills.length+1}>Skills:</th><td></td></tr>
                
                {employeeData.skills.map((technology) => (
                  <tr>
              <td>
                {technology.technologyId.technologyName}
              </td>
              </tr>
                ))}
          </table>

          <Button className="project-sub-button">Download Resume</Button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeListSub;
