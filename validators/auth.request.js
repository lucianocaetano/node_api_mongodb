import { body } from "express-validator";

export const loginValidate = [
  body("email")
    .notEmpty()
    .withMessage("Is required")
    .trim()
    .isEmail()
    .withMessage("It must be an email")
    .normalizeEmail(),
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
    .normalizeEmail(),
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
      return true
    }),
];
