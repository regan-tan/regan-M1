import axios from "axios"

// function determineBaseURL(environment){
//     if(environment === 'deployed'){
//         return 'https://backend-production-cbdf.up.railway.app'
//     }
//     else {
//         return 'http://localhost:8000'
//     }
// }

// const baseURL = determineBaseURL(import.meta.env.VITE_ENVIRONMENT)

// Create Axios Instance
const axiosInstance = axios.create({
    // baseURL: baseURL,
    headers: { "Content-Type": "application/json" },
    withCredentials: false,
})

// Set up request interceptor
axiosInstance.interceptors.request.use(config => {
    const token = sessionStorage.getItem('token'); 
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export default axiosInstance;