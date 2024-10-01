import { Router } from "express";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

const signupController = Router();

signupController.post("/", async (req, res) => {
  const { user, password } = req.body;

  if (!user || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  const duplicateCheck = await UserModel.findOne({
    username: user,
  }).exec();
  if (duplicateCheck)
    return res.status(409).json({ message: "User already exists." });

  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    // userData.password = hashedPassword;

    // const newUser = new UserModel(userData);
    const newUser = {
      username: user,
      roles: { User: 101 },
      password: hashedPassword,
    };
    await newUser.save();
    res
      .status(201)
      .json({ message: "User successfully registered!", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

export default signupController;
