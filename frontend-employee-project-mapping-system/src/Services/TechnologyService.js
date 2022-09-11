import axios from "axios";

const TECHNOLOGY_BASE_REST_API_URL = "http://localhost:8082/admin/";

const getAllTechnologies = () => {
  return axios.get(TECHNOLOGY_BASE_REST_API_URL + "technology");
};
const AddTechnology = (technologyDetails) => {
  return axios.post(TECHNOLOGY_BASE_REST_API_URL + "addtechnology",technologyDetails);
};

const deleteTechnology = (technologyId) => {
  return axios.delete(
    TECHNOLOGY_BASE_REST_API_URL + "deletetechnology",technologyId);
};

export default { getAllTechnologies, AddTechnology, deleteTechnology };
