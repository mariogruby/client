import axios from 'axios';

class ExampleService {
  constructor() {
    this.api = axios.create({
      baseURL: process.env.REACT_APP_SERVER_URL || "http://localhost:5005"
    });

    // Automatically set JWT token in the headers for every request
    this.api.interceptors.request.use((config) => {
      // Retrieve the JWT token from the local storage
      const storedToken = localStorage.getItem("authToken");

      if (storedToken) {
        config.headers = { Authorization: `Bearer ${storedToken}` };
      }

      return config;
    });
  }

  // POST /api/examples
  createOne = async (id, requestBody) => {
    return this.api.post(`/task/${id}/new`, requestBody);
  }

  // GET /api/examples
  // getAll = async (id) => {
  //   return this.api.get(`/task?coupleId=${id}`);
  // }
  getAll = async (id) => {
    return this.api.get(`/task/${id}`);
  }
  getPoints = async (id) => {
    return this.api.get(`/profile/points/${id}`);
  }
  // GET /api/examples/:id
  getOneUser = async (id) => {
    return this.api.get(`/profile/${id}`);
  }
  coupleTask = async(id, requestBody)=>{
    return this.api.get(`/couple/task/${id}`, requestBody);
  }


  // PUT /api/examples/:id
  updateOne = async (id, requestBody) => {
    return this.api.put(`/task/edit/${id}`, requestBody);
  }

  createCouple = async (requestBody) => {
    return this.api.post(`/couple/new`, requestBody);
  }

  // DELETE /api/examples/:id
  deleteTask = async (id) => {
    return this.api.delete(`/task/delete/${id}`);
  } 


}

// Create one instance of the service
const exampleService = new ExampleService();

export default exampleService;