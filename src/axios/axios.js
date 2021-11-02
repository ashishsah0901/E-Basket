import axios from "axios";

const instance = axios.create({
    baseURL: 'http://localhost:5001/clone-c7a82/us-central1/api'
});

export default instance