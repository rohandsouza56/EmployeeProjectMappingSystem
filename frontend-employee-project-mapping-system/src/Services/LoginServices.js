import axios from "axios";

const USER_API_SERVICE_URL = "http://localhost:8082";

const login = (loginRequest) => {
  return axios
    .post(USER_API_SERVICE_URL + "/admin/authenticate", loginRequest)
    .then((response) => {
      let token = response.data.token;
      console.log(token);
      localStorage.setItem("jwtToken", "Bearer " + token);
    });
};

const userDetails = (email) => {
  return axios.get(USER_API_SERVICE_URL + "/details/", email);
};

const changePassword = (newPasswordObj) => {
  return axios.put(USER_API_SERVICE_URL + "/changePassword", newPasswordObj);
};

const loginEmployee = (loginRequest) => {
  return axios
    .post(USER_API_SERVICE_URL + "/employee/authenticate", loginRequest)
    .then((response) => {
      let token = response.data.token;
      console.log(token);
      localStorage.setItem("jwtToken", "Bearer " + token);
    });
};


export default { login, userDetails, changePassword, loginEmployee };
