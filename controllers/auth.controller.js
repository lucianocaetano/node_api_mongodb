import { validationResult } from "express-validator";
import { User } from "../models/User.js";
import {generate_token} from "../utils/generate_token.js";

export const login = async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  const authorization = await user.compare_password(password);

  if (!authorization) {
    return res.status(400).json({
      password: "Invalid password",
    });
  }

  const access_token = generate_token(user)

  res.json({
    access_token,
    message: "OK"
  });
};

export const register = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const data = req.body;

  const user = new User(data);

  user.save();

  const access_token = generate_token(user)

  res.status(201).json({ access_token, message: "OK" });
};
