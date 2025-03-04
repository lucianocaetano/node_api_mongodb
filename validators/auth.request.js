import { body } from "express-validator";
import { User } from "../models/User.js";

export const loginValidate = [
  body("email")
    .notEmpty()
    .withMessage("Is required")
    .trim()
    .isEmail()
    .withMessage("It must be an email")
    .normalizeEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (!user) {
        throw new Error("This email does not exist.");
      }

      return true;
    }),
  body("password")
    .notEmpty()
    .withMessage("Is required")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Min 3 character"),
];

export const registerValidate = [
  body("email")
    .notEmpty()
    .withMessage("Is required")
    .trim()
    .isEmail()
    .withMessage("It must be an email")
    .normalizeEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (user) {
        throw new Error("This email is already registered.");
      }

      return true;
    }),
  body("password")
    .notEmpty()
    .withMessage("Is required")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Min 3 character"),
  body("confirm_password")
    .notEmpty()
    .withMessage("Is required")
    .trim()
    .isLength({ min: 3 })
    .withMessage("Min 3 character")
    .custom((value, { req }) => {
      if (req.body.password !== value) {
        throw new Error("passwords do not match");
      }
      return true;
    }),
];
