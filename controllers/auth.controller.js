import { validationResult } from "express-validator";

export const login = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(402).json({ errors: errors.array() });
  }

  res.json(req.body);
};

export const register = (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(402).json({ errors: errors.array() });
  }
  
  res.json({ ok: true });
};
