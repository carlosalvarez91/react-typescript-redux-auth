import axios from "axios";

const API_URL = "https://jsonplaceholder.typicode.com/";

class ApiService {
  getAllTodos() {
    return axios
      .get(API_URL + "todos/")
      .then(response => {
            return response;
      });
  }
}

export default new ApiService();
