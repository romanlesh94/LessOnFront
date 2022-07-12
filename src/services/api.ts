import axios from "axios";

const api = axios.create({
    baseURL: "https://localhost:5001/api",
    headers: {
        "Content-Type": "application/json"
    },
});

const token = localStorage.getItem('token');

api.interceptors.request.use(
    (config: any) => {
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

api.interceptors.response.use(
    function (response) {return response},
    function (error) {
        if (!token || error.response.status === 401 ) {
            window.location.href = "/log-in";
        }
        return Promise.reject(error);
    }
)

export default api;
