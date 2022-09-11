import axios from "axios";

const DEPARTMENT_BASE_REST_API_URL = "http://localhost:8082/admin/";

// class ProjectService{

//     getAllProjects(){
//         return axios.get(Project_BASE_REST_API_URL + 'projects')
//     }

// }
const getAllDepartments = () => {
  return axios.get(DEPARTMENT_BASE_REST_API_URL + "departments");
};
const AddDepartment = (departmentDetails) => {
  return axios.post(DEPARTMENT_BASE_REST_API_URL + "adddepartment",
    departmentDetails
  );
};

const deleteDepartment = (departmentId) => {
  return axios.delete(
    DEPARTMENT_BASE_REST_API_URL + "deletedepartment",
    departmentId
  );
};
// export default new ProjectService();
export default { getAllDepartments, AddDepartment, deleteDepartment };
