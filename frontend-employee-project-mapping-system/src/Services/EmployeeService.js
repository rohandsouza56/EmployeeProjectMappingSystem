import axios from 'axios'

const Employee_BASE_REST_API_URL = 'http://localhost:8080/admin/';


    

const projectMapping= (addMapping) =>{
    return axios.put(Employee_BASE_REST_API_URL+"/projectMapping",addMapping);
}

// export default new ProjectService();
export default {projectMapping};