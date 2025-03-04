import { Schema, model } from "mongoose";
import bcryptjs from "bcryptjs";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: { unique: true },
  },
  password: {
    type: String,
    require: true,
    trim: true,
  },
});

userSchema.pre("save", async function (next) {
  const user = this;

  try {
    const salt = await bcryptjs.genSalt(10);
    user.password = await bcryptjs.hash(user.password, salt);
    next();
  } catch (err) {
    next(err);
  }
});

userSchema.methods.compare_password = async function (pass) {
  return await bcryptjs.compare(pass, this.password);
};

export const User = model("user", userSchema);
