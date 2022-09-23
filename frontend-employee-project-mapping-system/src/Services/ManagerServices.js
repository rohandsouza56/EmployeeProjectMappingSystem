import axios from 'axios'

const MANAGER_BASE_REST_API_URL = 'http://localhost:8082/employee/';

const getAllEmployees = () => {
  return axios.get(MANAGER_BASE_REST_API_URL + "employees", {
    headers: {
      Authorization: localStorage.getItem("jwtToken"),
    },
  });
};

export default {getAllEmployees};