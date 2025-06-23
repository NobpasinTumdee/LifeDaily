// const express = require('express') commonjs
import express from "express";
import cors from "cors";
import morgan from "morgan";
// Middlewares Jwt
import { verifyToken } from "./middlewares/verifyToken.js";
// Routing
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";

const app = express();

// Middlewares
app.use(cors()); // Allows Cross Domains
app.use(morgan("dev")); // Show Logs
app.use(express.json()); // For read JSON

// Routing http://localhost:8000/auth/register  http://localhost:8000/auth/login
app.use("/auth", authRoute);
app.use("/get",verifyToken, userRoute); // ต้องใส่ token ก่อนถึงจะใช้อันนี้ได้

// Error handling
app.use((err, req, res, next) => {
  //   console.log(err);
  res
    .status(err.code || 500)
    .json({ message: err.message || "Something Wrong!!!" });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));