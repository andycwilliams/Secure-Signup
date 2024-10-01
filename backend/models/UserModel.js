import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  roles: {
    User: {
      type: Number,
      default: 101,
    },
    Editor: Number,
    Admin: Number,
  },
  refreshToken: String,
});

const User = mongoose.model("User", userSchema);

export default User;
