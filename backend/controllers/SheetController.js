import prisma from "../config/prisma.js";

export const getSheets = async (req, res, next) => {
    try {
        const result = await prisma.sheet.findMany({
            where: {
                deletedAt: null,
            }
        })
        if (result.length === 0) {
            return res.json({ message: "No sheets in database!" });
        }
        res.json({
            message: "get sheets success!",
            data: result,
        });
    } catch (error) {
        next(error);
    }
}
