import axios from "axios";

const PROJECTREQUIRMENT_BASE_REST_API_URL = "http://localhost:8082/admin/";

const getProjectRequirment = () => {
  return axios.get(PROJECTREQUIRMENT_BASE_REST_API_URL + "getrequirment");
};
const AddRequirment = (requirment) => {
  return axios.post(PROJECTREQUIRMENT_BASE_REST_API_URL + "addrequirment",requirment);
};

const deleteProjectRequirment = (requirmentId) => {
  return axios.delete(
    PROJECTREQUIRMENT_BASE_REST_API_URL + "deleterequirment",requirmentId);
};

export default { getProjectRequirment, AddRequirment, deleteProjectRequirment };
