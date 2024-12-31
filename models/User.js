import { Schema, model } from "mongoose";

const userSchema = new Schema({
  email: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    lowercase: true,
    index: { unique: true }
  },
  password: {
    type: String,
    require: true,
    trim: true,
  }
})

export const User = model('user', userSchema)
