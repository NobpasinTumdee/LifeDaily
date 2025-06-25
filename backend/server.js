import express from "express";
import cors from "cors";
import morgan from "morgan";

// Middlewares Jwt
import { verifyToken } from "./middlewares/verifyToken.js";

// Routing
import authRoute from "./routes/auth.js";
import getRoute from "./routes/get.js";

const app = express();

// Middlewares
app.use(cors()); // Allows Cross Domains
app.use(morgan("dev")); // Show Logs
app.use(express.json()); // For read JSON

// Routing
app.use("/auth", authRoute);//http://localhost:8000/auth/register - login

// ต้องใส่ token ก่อนถึงจะใช้อันนี้ได้
app.use("/get", verifyToken, getRoute);//http://localhost:8000/get/user - sheets

// Error handling
app.use((err, req, res, next) => {
  const statusCode = typeof err.code === "number" ? err.code : 500;
  res.status(statusCode).json({
    message: err.message || "Something went wrong!",
    code: err.code,
  });
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));