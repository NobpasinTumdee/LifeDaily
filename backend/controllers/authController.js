import prisma from "../config/prisma.js";
import createError from "../utils/createError.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    // code body
    // TODO
    /*
    1. Check Body
    2. Check Email In DB
    3. Encrypt Password -> bcryptjs
    4. Insert into DB
    5. Response
  */
    // 1. Check body
    const { Email, UserName, Password } = req.body;
    // 2. Check in DB
    const user = await prisma.user.findFirst({
      where: {
        Email: Email,
        deletedAt: null,// Query แบบไม่เอาที่ถูกลบแล้ว
      },
    });
    if (user) {
      createError(400, "Email already exist!!!");
    }
    // 3. Encrypt Password
    const hashPassword = bcrypt.hashSync(Password, 10);

    // 4. Insert into DB
    const result = await prisma.user.create({
      data: {
        Email: Email,
        UserName: UserName,
        Password: hashPassword,
      },
    });

    // console.log(result);

    res.json({ message: "Register Success!!!" });
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    /* 
        1. Validate
        2. Check Email
        3. Check Password
        4. Generate Token
        5. Response
    */
    // 1 Validate
    const { Email, Password } = req.body;

    // 2 Check Email
    const user = await prisma.user.findFirst({
      where: {
        Email: Email,
        deletedAt: null,// Query แบบไม่เอาที่ถูกลบแล้ว
      },
    });
    if (!user) {
      createError(400, "Email or Password is Invalid!!");
    }

    const checkPassword = bcrypt.compareSync(Password, user.Password);

    if (!checkPassword) {
      createError(400, "Email or Password is Invalid!!");
    }

    //  4. Generate Token
    const payload = {
      id: user.id,
      UserName: user.UserName,
      role: user.role,
    };
    const token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1d" });
    console.log(token);

    res.json({
      message: "Login Success!!!",
      payload: payload,
      token: token,
    });
  } catch (error) {
    next(error);
  }
};

// export default