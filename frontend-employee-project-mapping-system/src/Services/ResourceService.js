import axios from "axios";

const RESOURCE_BASE_REST_API_URL = "http://localhost:8082/admin/";

const getAllResources = () => {
  return axios.get(RESOURCE_BASE_REST_API_URL + "resource");
};
const addNewResouce = (resourceDetails) => {
  return axios.post(RESOURCE_BASE_REST_API_URL + "addresource",resourceDetails);
};

const deleteResource = (resourceId) => {
  return axios.delete(
    RESOURCE_BASE_REST_API_URL + "deleteteresource",resourceId);
};

export default { getAllResources, addNewResouce, deleteResource };
