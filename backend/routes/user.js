import express from "express";
import prisma from "../config/prisma.js";
const router = express.Router();

export const getUser = async (req, res, next) => {
    try {
        const result = await prisma.user.findMany({
            where: {
                deletedAt: null,
            }
        });
        console.log(result);
        res.json({
            message: "get user success!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}
router.get("/user", getUser);

export default router;