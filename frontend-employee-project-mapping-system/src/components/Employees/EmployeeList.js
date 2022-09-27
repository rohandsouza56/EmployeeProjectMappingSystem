import { useState, useEffect } from "react";
// import EmployeeService from "../../Services/EmployeeService";

// import ManagerServices from "../../Services/ManagerServices";

import ManagerServices from "../../Services/ManagerServices";

import EmployeeListSub from "./EmployeeListSub";
// import "./ProjectListSub.css";
const EmployeeList = () => {
  const [employee, setEmployee] = useState([]);
  const [fliteremployee, setFilterEmployee] = useState([]);

  useEffect(() => {
    getAllEmployees();
  }, []);

  const getAllEmployees = () => {
    console.log(localStorage.getItem("jwtToken"));
    ManagerServices.getAllEmployees()
      .then((response) => {
        setEmployee(response.data);
        setFilterEmployee(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const filterCards = (event) => {
    const value = event.target.value.toLowerCase();
    const filteredEmployees = fliteremployee.filter((employee) =>
      `${employee.name} ${employee.email}`.toLowerCase().includes(value)
    );
    setEmployee(filteredEmployees);
  };
  return (
    <div className="project-list">
      <h1 style={{ textAlign: "center" }}>Employees</h1>
      {/* <span>Search </span> */}
      <input
        className="search-box"
        onInput={filterCards}
        placeholder="Search Employee"
      />
      
      <div className="cards-container row offset-1">
        {employee.map((employee, index) => (
          <EmployeeListSub key={index} employeeData={employee} />
        ))}
      </div>
    </div>
  );
};

export default EmployeeList;
