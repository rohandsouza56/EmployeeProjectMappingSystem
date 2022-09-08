import axios from 'axios'

const Project_BASE_REST_API_URL = 'http://localhost:8082/admin/';

// class ProjectService{

//     getAllProjects(){
//         return axios.get(Project_BASE_REST_API_URL + 'projects')
//     }

   
    
// }
const getAllProjects = () =>{
    return axios.get(Project_BASE_REST_API_URL + 'projects')
}
const addNewProject = (projectDetails) =>{
    return axios.post(Project_BASE_REST_API_URL + 'addproject',projectDetails);
}
// export default new ProjectService();
export default {getAllProjects,addNewProject};