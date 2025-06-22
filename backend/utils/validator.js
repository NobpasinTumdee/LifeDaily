// Validate with yup
import { object, string } from "yup";

// req.body.email

export const registerSchema = object({
  email: string().email("Email ไม่ถูกต้อง").required("กรุณากรอก Email"),
  name: string().min(3, "Name ต้องมากกว่า 3 อักขระ"),
  password: string().min(6, "Password ต้องมากกว่า 6 อักขระ"),
});

export const loginSchema = object({
  email: string().email("Email ไม่ถูกต้อง").required("กรุณากรอก Email"),
  password: string().min(6, "Password ต้องมากกว่า 6 อักขระ"),
});

export const validate = (schema) => async (req, res, next) => {
  try {
    await schema.validate(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const errTxt = error.errors.join(",");
    // console.log(errTxt);
    const err = new Error(errTxt);
    next(err);
  }
};