import axios from 'axios'

const Employee_BASE_REST_API_URL = 'http://localhost:8082/admin/';


    

const projectMapping= (addMapping) =>{
    return axios.put(Employee_BASE_REST_API_URL+"/projectMapping",addMapping);
}

const addNewEmployee = (employeeDetails) =>{
    return axios.post(Employee_BASE_REST_API_URL + 'addEmployee',employeeDetails);
}
// export default new ProjectService();
export default {projectMapping,addNewEmployee};