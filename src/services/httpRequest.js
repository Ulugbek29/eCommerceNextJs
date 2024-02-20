import axios from "axios";


const request = axios.create({
  baseURL: "https://dummyjson.com",
  timeout: 100000,
});

const errorHandler = (error) => {
    if (error && error.response) {
      console.log(error);
    }
  
    console.log(error.response)
    return Promise.reject(error.response);
  };



  

request.interceptors.response.use(
  (response) => response.data,
  errorHandler
);

export default request;
