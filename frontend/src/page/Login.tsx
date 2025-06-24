import React, { useState } from "react";
import type { UserInterface } from "../serviceApi/Interface";
import { SignIn, UserLogin } from "../serviceApi/index";
import "./stylepage.css";

const Login = () => {
    const [isRegister, setIsRegister] = useState(false);
    const [form, setForm] = useState<UserInterface>({
        Email: "",
        UserName: "",
        Password: "",
    });

    const toggleForm = () => setIsRegister(!isRegister);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isRegister) {
            console.log("🔐 Register:", form);
            let res = await SignIn(form);
            if (res?.status === 200) {
                console.log(res.data.message);
                alert(res.data.message)
                setIsRegister(false);
            } else {
                console.error("❌ register failed", res.data.message);
                alert(res.data.message)
            }
        } else {
            // console.log("🔑 Login:", form);
            let res = await UserLogin(form);
            if (res?.status === 200) {
                console.log("Login success!!!")
                localStorage.setItem("token_type", res.data.token_type);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("UserName", res.data.payload.UserName);
                localStorage.setItem("Role", res.data.payload.Role);
                localStorage.setItem("UserID", res.data.payload.UserID);
                alert(res.data.message)
            } else {
                console.error("❌ Login failed", res.data.message);
                alert(res.data.message)
            }
        }
    };

    return (
        <>
            <div className="Picture-background-login">
                <img style={{ marginLeft: '5%' }} data-aos="fade-up-right" data-aos-duration="1500" width={350} src="https://www.pngall.com/wp-content/uploads/15/Genshin-Impact-Character-PNG-Pic.png" alt="" />
                <img style={{ marginRight: '5%' }} data-aos="fade-up-left" data-aos-duration="1500" width={350} src="https://static.tvtropes.org/pmwiki/pub/images/furina_ousia_transparent.png" alt="" />
            </div>
            <div className="auth-container" data-aos="zoom-in-up">
                <h1>{isRegister ? "Register" : "Login"}</h1>
                <form onSubmit={handleSubmit} className="auth-form">
                    {isRegister && (
                        <input
                            type="text"
                            name="UserName"
                            placeholder="UserName"
                            value={form.UserName}
                            onChange={handleChange}
                            className="auth-input"
                            required
                            data-aos="zoom-in"
                        />
                    )}
                    <input
                        type="Email"
                        name="Email"
                        placeholder="Email"
                        value={form.Email}
                        onChange={handleChange}
                        className="auth-input"
                        required
                        data-aos="zoom-in"
                    />
                    <input
                        type="Password"
                        name="Password"
                        placeholder="Password"
                        value={form.Password}
                        onChange={handleChange}
                        className="auth-input"
                        required
                        data-aos="zoom-in"
                    />
                    <button type="submit" className="auth-button" >
                        {isRegister ? "Sign Up" : "Sign In"}
                    </button>
                </form>
                <p className="auth-toggle-text">
                    {isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
                    <span onClick={toggleForm} className="auth-toggle-link">
                        {isRegister ? "Login" : "Register"}
                    </span>
                </p>
            </div>
        </>
    );
};

export default Login;
