import axios from "axios";

const Employee_BASE_REST_API_URL = "http://localhost:8082/employee/";

const getAllSkills = () => {
  return axios.get(Employee_BASE_REST_API_URL + "skills");
};
const addSkills = (skillDetails) => {
  return axios.post(Employee_BASE_REST_API_URL + "addskills", skillDetails);
};

const deleteSkills = (skillId) => {
  return axios.delete(Employee_BASE_REST_API_URL + "deleteskills", skillId);
};

const addResume = (file) => {
  console.log(localStorage.getItem("jwtToken"));
  let formData = new FormData();
  formData.append("files", file);
  return axios.post(Employee_BASE_REST_API_URL + "resume/1", formData, {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
      "Content-Type": "multipart/form-data",
    },
  });
};

const getAllDepartments = () => {
  return axios.get(Employee_BASE_REST_API_URL + "departments", {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};
/*
const getSingleEmployee = (employeeId) => {
  return axios.get(Employee_BASE_REST_API_URL + , {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};*/
// export default new ProjectService();


const getSingleEmployeeByUserName = (userName) => {
  return axios.get(Employee_BASE_REST_API_URL +"employeebyusername?userName="+userName , {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};
export default {
  getAllSkills,
  addSkills,
  deleteSkills,
  addResume,
  getAllDepartments,
  getSingleEmployeeByUserName
};
