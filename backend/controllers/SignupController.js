import { Router } from "express";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import User from "../models/UserModel.js";

const signupController = Router();

signupController.post("/", async (req, res) => {
  // const { username, password } = req.body;
  const userData = req.body;
  console.log("Creating new user...");

  if (!userData.username || !userData.password)
    // if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  const duplicateCheck = await UserModel.findOne({
    username: userData.username,
  }).exec();
  if (duplicateCheck)
    return res.status(409).json({ message: "User already exists." });

  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    userData.password = hashedPassword;

    const newUser = new UserModel(userData);
    // const newUser = {
    //   username: username,
    //   password: hashedPassword,
    // };
    await newUser.save();

    // const newUser = await User.create({
    //   username: username,
    //   password: hashedPassword,
    // });
    console.log("New user:");
    console.log(newUser);

    res
      .status(201)
      .json({ message: "User successfully registered!", user: newUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

export default signupController;
