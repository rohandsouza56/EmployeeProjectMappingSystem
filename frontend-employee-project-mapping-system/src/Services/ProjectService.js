import axios from 'axios'

const Project_BASE_REST_API_URL = 'http://localhost:8080/admin/projects';

class ProjectService{

    getAllProjects(){
        return axios.get(Project_BASE_REST_API_URL)
    }

    // createProject(Project){
    //     return axios.post(Project_BASE_REST_API_URL, Project)
    // }

    // getProjectById(ProjectId){
    //     return axios.get(Project_BASE_REST_API_URL + '/' + ProjectId);
    // }

    // updateProject(ProjectId, Project){
    //     return axios.put(Project_BASE_REST_API_URL + '/' +ProjectId, Project);
    // }

    // deleteProject(ProjectId){
    //     return axios.delete(Project_BASE_REST_API_URL + '/' + ProjectId);
    // }
}

export default new ProjectService();