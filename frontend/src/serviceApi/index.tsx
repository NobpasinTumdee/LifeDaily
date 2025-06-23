import axios from "axios";
// import type { UserInterface } from "./Interface";

export interface UserRegisterInput {
    Email: string;
    UserName: string;
    Password: string;
}

const data: UserRegisterInput = {
    Email: "portest@gmail.com",
    UserName: "PorGztest",
    Password: "123456"
};

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
async function SignIn(data: UserRegisterInput) {

    return await axios

        .post(`${apiUrl}/auth/register`, data)

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

export default {
    SignIn,
    getUser,
}



// //============================User========================================
// //login
// async function SignIn(data: UserRegisterInput) {

//   return await axios

//     .post(`${apiUrl}/auth/register`, data)
//     .then((res) => {
//       console.log('✅ Register Success:', res.data);
//       return res; // ส่ง response กลับไปให้คนที่เรียกใช้
//     })
//     .catch((e) => {
//       console.error('❌ Register Error:', e.response?.data || e.message);
//       return e.response; // หรือ throw e ถ้าอยากให้ไป catch ด้านนอก
//     });

// }

// SignIn(data);