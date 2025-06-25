import express from "express";
const router = express.Router();
// Controller
import { getSheets } from "../controllers/SheetController.js";
import { getUser } from "../controllers/UserController.js";

// ENDPOINT
router.get("/user", getUser);
router.get("/sheets", getSheets);

export default router;