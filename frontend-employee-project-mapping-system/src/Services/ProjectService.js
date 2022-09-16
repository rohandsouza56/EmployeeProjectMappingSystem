import axios from "axios";

const Project_BASE_REST_API_URL = "http://localhost:8080/admin/";

// class ProjectService{

//     getAllProjects(){
//         return axios.get(Project_BASE_REST_API_URL + 'projects')
//     }

// }
// const getAllProjects = () =>{
//     return axios.get(Project_BASE_REST_API_URL + 'projects')
// }
const getAllProjects = () => {
  console.log(localStorage.getItem("jwtToken"));
  return axios.get(Project_BASE_REST_API_URL + "projects", {
    headers: { "Authorization": localStorage.getItem("jwtToken") },
  });
};

const addNewProject = (projectDetails) => {
  return axios.post(Project_BASE_REST_API_URL + "addproject", projectDetails);
};
const deleteProject = (projectId) => {
  return axios.delete(Project_BASE_REST_API_URL + "deleteproject", projectId);
};
// export default new ProjectService();
export default { getAllProjects, addNewProject, deleteProject };
