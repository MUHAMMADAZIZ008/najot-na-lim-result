import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ["user", "admin", "superAdmin"],
    default: "user",
  },
  is_active: {
    type: Boolean,
    default: false,
    required: true,
  },
  activate_link_id: {
    type: String
  },
});

export const User = mongoose.model("User", userSchema);
