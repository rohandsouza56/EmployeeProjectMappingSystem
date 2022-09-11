import axios from "axios";

const Project_BASE_REST_API_URL = "http://localhost:8082/admin/";

// class ProjectService{

//     getAllProjects(){
//         return axios.get(Project_BASE_REST_API_URL + 'projects')
//     }

// }
const getAllSkills = () => {
  return axios.get(Project_BASE_REST_API_URL + "skills");
};
const AddSkills = (skillDetails) => {
  return axios.post(Project_BASE_REST_API_URL + "addskills",
    skillDetails
  );
};

const deleteSkills = (skillId) => {
  return axios.delete(
    Project_BASE_REST_API_URL + "deleteskills",
    skillId
  );
};
// export default new ProjectService();
export default { getAllSkills, AddSkills, deleteSkills };
