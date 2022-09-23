import axios from 'axios'

const Quiz_BASE_REST_API_URL = 'http://localhost:8082/quiz/';



const getAllQuestions = (technologyId) => {
    return axios.get(Quiz_BASE_REST_API_URL + "questions/1", {
      headers: {
        Authorization: localStorage.getItem("jwtToken"),
      },
    });
  };

// export default new ProjectService();
export default {getAllQuestions  };