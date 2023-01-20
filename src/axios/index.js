import axios from "axios";
// import store from "../store/index";
// import router from "./router";

const axiosClient = axios.create({
    baseURL: `http://localhost:3000/`
})

axiosClient.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

// axiosClient.interceptors.request.use(config => {
//     config.headers.Authorization = `Bearer ${store.state.user.token}`
//     return config;
// })

export default axiosClient