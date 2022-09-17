import axios from 'axios'

const Employee_BASE_REST_API_URL = 'http://localhost:8082/admin/';



const getAllSkills = () => {
    return axios.get(Employee_BASE_REST_API_URL + "skills");
  };
  const addSkills = (skillDetails) => {
    return axios.post(Employee_BASE_REST_API_URL + "addskills",
      skillDetails
    );
  };
  
  const deleteSkills = (skillId) => {
    return axios.delete(
        Employee_BASE_REST_API_URL + "deleteskills",
      skillId
    );
  };
// export default new ProjectService();
export default {getAllSkills, addSkills, deleteSkills };