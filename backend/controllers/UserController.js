import prisma from "../config/prisma.js";

export const getUser = async (req, res, next) => {
    try {
        const result = await prisma.user.findMany({
            where: {
                deletedAt: null,
            }
        });
        if (result.length === 0) {
            return res.json({ message: "No User in database!" });
        }
        res.json({
            message: "get user success!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}