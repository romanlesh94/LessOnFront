import axios from "axios";

class AuthService {

    login (login: string, password: string) {
        return axios
            .post(`https://localhost:5001/log-in`, {login, password})
            .then(response => {
               if (response.data.token) {
                   localStorage.setItem("token", response.data.token);
                   localStorage.setItem("username", response.data.username);
                   localStorage.setItem("email", response.data.email);
                   localStorage.setItem("country", response.data.country);
                   window.location.href = "http://localhost:3000/";
               }
            });
    }

    logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.removeItem("country");
        window.location.href = "http://localhost:3000/log-in"
    }

    signup (login: string, password: string, email: string, country: string) {
        return axios
            .post(`https://localhost:5001/sign-up`, {login, password, email, country})
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("token", response.data.token);
                    localStorage.setItem("username", response.data.username);
                    localStorage.setItem("email", response.data.email);
                    localStorage.setItem("country", response.data.country);

                    window.location.href = "http://localhost:3000/";
                }
            });
    }

}

export default new AuthService();