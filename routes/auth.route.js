import express from "express";
import { login, register } from "../controllers/auth.controller.js";

import {loginValidate, registerValidate} from "../validators/auth.request.js";

const router = express.Router();

router.post(
  "/login",
  loginValidate,
  login
);

router.post(
  "/register",
  registerValidate,
  register
);

export default router;
