import axios from "axios";

const USER_API_SERVICE_URL = "http://localhost:8080";

const login = (loginRequest) => {
  return axios
    .post(USER_API_SERVICE_URL + "/authenticate", loginRequest)
    .then((response) => {
      let token = response.data.token;
      console.log(token);
      localStorage.setItem("jwtToken", "Bearer " + token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
      // (this.$router.push({name:'HomePage'}));
    });
};



const userDetails = (email) => {
  return axios.get(USER_API_SERVICE_URL + "/details/", email);
};

const changePassword = (newPasswordObj) => {
  return axios.put(USER_API_SERVICE_URL + "/changePassword", newPasswordObj);
};

export default { login, userDetails, changePassword };
