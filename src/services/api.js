import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.117:8000"
});

export default api;

// exp://ga-eqw.anonymous.mobile.exp.direct:80
// exp://192.168.0.117:19000
