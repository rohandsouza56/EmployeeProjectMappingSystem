import axios from "axios";

const ADMIN_BASE_REST_API_URL = "http://localhost:8080/admin/";

// class ProjectService{

//     getAllProjects(){
//         return axios.get(ADMIN_BASE_REST_API_URL + 'projects')
//     }

// }
// const getAllProjects = () =>{
//     return axios.get(ADMIN_BASE_REST_API_URL + 'projects')
// }
const getAllProjects = () => {
  console.log(localStorage.getItem("jwtToken"));
  return axios.get(ADMIN_BASE_REST_API_URL + "projects", {
    headers: { Authorization: localStorage.getItem("jwtToken") }
  })

};

const addNewProject = (projectDetails) => {
  console.log(localStorage.getItem("jwtToken"));
  return axios.post(ADMIN_BASE_REST_API_URL + "project/add", projectDetails, {
    headers: { "Authorization": localStorage.getItem("jwtToken") }
  });
};
const deleteProject = (projectId) => {
  return axios.delete(ADMIN_BASE_REST_API_URL + "project/delete", projectId);
};


const addNewEmployee = (employeeDetails) =>{
  console.log(employeeDetails);
  return axios.post(ADMIN_BASE_REST_API_URL + 'employee/add',employeeDetails);
}
export default { getAllProjects, addNewProject, deleteProject,addNewEmployee };
