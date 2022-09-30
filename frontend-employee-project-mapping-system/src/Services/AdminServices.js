import axios from "axios";

const ADMIN_BASE_REST_API_URL = "http://localhost:8082/admin/";


const getAllProjects = () => {
  console.log(localStorage.getItem("jwtToken"));
  return axios.get(ADMIN_BASE_REST_API_URL + "projects", {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};

const addNewProject = (projectDetails) => {
  console.log(localStorage.getItem("jwtToken"));
  return axios.post(ADMIN_BASE_REST_API_URL + "project/add", projectDetails, {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
};
const deleteProject = (projectId) => {
  return axios.delete(ADMIN_BASE_REST_API_URL + "project/delete/"+projectId, {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    }
  });
};
const getAllDepartments = () => {
  return axios.get(ADMIN_BASE_REST_API_URL + "departments", {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};

const getAllDepartmenrByProjectId = (projectId) => {
  return axios.get(ADMIN_BASE_REST_API_URL + "department/"+projectId, {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};

const addDepartment = (departmentDetails) => {
  return axios.post(
    ADMIN_BASE_REST_API_URL + "department/add",
    departmentDetails, {
      headers: {
        Authorization: localStorage.getItem("jwtToken"),
      },
    }
  );
};

const deleteDepartment = (departmentId) => {
  return axios.delete(
    ADMIN_BASE_REST_API_URL + "department/delete/"+departmentId, {
      headers: {
        Authorization: localStorage.getItem("jwtToken"),
      },
    }
  );
};

const addNewEmployee = (employeeDetails) => {
  console.log(employeeDetails);
  return axios.post(ADMIN_BASE_REST_API_URL + "employee/add", employeeDetails, {
    headers: { Authorization: localStorage.getItem("jwtToken") },
  });
};

const getAllTechnologies = () => {
  return axios.get(ADMIN_BASE_REST_API_URL + "technologies", {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};
const addTechnology = (technologyDetails) => {
  return axios.post(
    ADMIN_BASE_REST_API_URL + "technology/add",
    technologyDetails, {
      headers: {
        Authorization: localStorage.getItem("jwtToken"),
      },
    }
  );
};

const deleteTechnology = (technologyId) => {
  return axios.delete(
    ADMIN_BASE_REST_API_URL + "technology/delete",
    technologyId, {
      headers: {
        Authorization: localStorage.getItem("jwtToken"),
      },
    }
  );
};

const getAllResources = () => {
  return axios.get(ADMIN_BASE_REST_API_URL + "resources", {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};
const addNewResouce = (resourceDetails) => {
  let formData = new FormData();
  formData.append("files", resourceDetails.resourceZip);
  return axios.post(ADMIN_BASE_REST_API_URL + "resource/add/"+resourceDetails.technology.technologyId+"?link="+resourceDetails.link+"&description="+resourceDetails.description, formData, {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};

const deleteResource = (resourceId) => {
  return axios.delete(ADMIN_BASE_REST_API_URL + "resource/delete", resourceId, {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};

const getProjectRequirment = () => {
  return axios.get(ADMIN_BASE_REST_API_URL + "getrequirement");
};
const addRequirment = (requirement) => {
  return axios.post(ADMIN_BASE_REST_API_URL + "projectreq/add", requirement, {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};



const deleteProjectRequirment = (requirmentId) => {
  return axios.delete(
    ADMIN_BASE_REST_API_URL + "/projectreq/delete",
    requirmentId
  );
};

const projectMapping = (mappingDetails) => {
  console.log(mappingDetails);
  return axios.post(ADMIN_BASE_REST_API_URL + "map/employee", mappingDetails, {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};


const getAdminByEmail = (email) => {
  return axios.get(ADMIN_BASE_REST_API_URL +"getadmin?email="+email , {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};

const getResumeById= (id) => {
  return axios.get(ADMIN_BASE_REST_API_URL +"downloadFile/"+id ,{
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
      responseType: 'blob',
    }, 
  }
  );
};

const sendEmail = (employee,managerId) => {
  return axios.post(ADMIN_BASE_REST_API_URL + "email/requestchange/6", employee, {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};



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
  projectMapping,
  getAllDepartmenrByProjectId,
  getAdminByEmail,
  getResumeById,
  sendEmail,
};
