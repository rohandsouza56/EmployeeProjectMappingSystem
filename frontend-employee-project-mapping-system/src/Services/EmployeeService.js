import axios from 'axios'

const Employee_BASE_REST_API_URL = 'http://localhost:8082/employee/';



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

  const addResume = (file) => {
    console.log(localStorage.getItem("jwtToken"));
    let formData = new FormData();
    formData.append("files", file);
    return axios.post(Employee_BASE_REST_API_URL + "resume/1", formData, {
      headers: { Authorization: localStorage.getItem("jwtToken"),
      'Content-Type': 'multipart/form-data'
     },
    });
  };

// export default new ProjectService();
export default {getAllSkills, addSkills, deleteSkills , addResume };