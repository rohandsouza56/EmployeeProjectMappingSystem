import axios from "axios";

const ADMIN_BASE_REST_API_URL = "http://localhost:8082/admin/";

const getAllProjects = () => {
  console.log(localStorage.getItem("jwtToken"));
  return axios.get(ADMIN_BASE_REST_API_URL + "projects", {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
};

const addNewProject = (projectDetails) => {
  console.log(localStorage.getItem("jwtToken"));
  return axios.post(ADMIN_BASE_REST_API_URL + "project/add", projectDetails, {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
};
const deleteProject = (projectId) => {
  return axios.delete(ADMIN_BASE_REST_API_URL + "project/delete", projectId);
};
const getAllDepartments = () => {
  return axios.get(ADMIN_BASE_REST_API_URL + "departments");
};
const addDepartment = (departmentDetails) => {
  return axios.post(
    ADMIN_BASE_REST_API_URL + "department/add",
    departmentDetails
  );
};

const deleteDepartment = (departmentId) => {
  return axios.delete(
    ADMIN_BASE_REST_API_URL + "department/delete",
    departmentId
  );
};

const addNewEmployee = (employeeDetails) => {
  console.log(employeeDetails);
  return axios.post(ADMIN_BASE_REST_API_URL + "employee/add", employeeDetails, {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
};

const getAllTechnologies = () => {
  return axios.get(ADMIN_BASE_REST_API_URL + "technologies");
};
const addTechnology = (technologyDetails) => {
  return axios.post(
    ADMIN_BASE_REST_API_URL + "technology/add",
    technologyDetails
  );
};

const deleteTechnology = (technologyId) => {
  return axios.delete(
    ADMIN_BASE_REST_API_URL + "technology/delete",
    technologyId
  );
};

const getAllResources = () => {
  return axios.get(ADMIN_BASE_REST_API_URL + "resources");
};
const addNewResouce = (resourceDetails) => {
  return axios.post(ADMIN_BASE_REST_API_URL + "resource/add", resourceDetails);
};

const deleteResource = (resourceId) => {
  return axios.delete(ADMIN_BASE_REST_API_URL + "resource/delete", resourceId);
};

const getProjectRequirment = () => {
  return axios.get(ADMIN_BASE_REST_API_URL + "getrequirement");
};
const addRequirment = (requirement) => {
  return axios.post(ADMIN_BASE_REST_API_URL + "projectreq/add", requirement);
};

const deleteProjectRequirment = (requirmentId) => {
  return axios.delete(
    ADMIN_BASE_REST_API_URL + "/projectreq/delete",
    requirmentId
  );
};

const projectMapping= (mappingDetails) =>{
  console.log(mappingDetails);
  return axios.post(ADMIN_BASE_REST_API_URL+"map/employee",mappingDetails);
}


export default {
  getAllProjects,
  addNewProject,
  deleteProject,
  addNewEmployee,
  getAllTechnologies,
  addTechnology,
  deleteTechnology,
  getAllResources,
  addNewResouce,
  deleteResource,
  getAllDepartments,
  addDepartment,
  deleteDepartment,
  addRequirment,
  projectMapping
};
