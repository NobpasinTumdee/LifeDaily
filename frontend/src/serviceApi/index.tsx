import axios from "axios";
import type { UserInterface } from "./Interface";


const apiUrl = 'http://localhost:8000'
//=========================== Header Config =============================
const Authorization = localStorage.getItem("token");
const Bearer = localStorage.getItem("token_type") || "Bearer";

const requestOptions = {
    headers: {
        "Content-Type": "application/json",
        Authorization: `${Bearer} ${Authorization}`,
    },
};

//============================User========================================
//register
async function SignIn(data: UserInterface) {

    return await axios

        .post(`${apiUrl}/auth/register`, data)

        .then((res) => res)

        .catch((e) => e.response);

}
//login
async function UserLogin(data: UserInterface) {

    return await axios

        .post(`${apiUrl}/auth/login`, data)

        .then((res) => res)

        .catch((e) => e.response);

}
//get user
async function getUser() {

    return await axios

        .get(`${apiUrl}/get/user`, requestOptions)

        .then((res) => res)

        .catch((e) => e.response);

}

export {
    SignIn,
    getUser,
    UserLogin,
}