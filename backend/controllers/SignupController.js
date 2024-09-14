import { Router } from "express";
import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";

const signupController = Router();

signupController.post("/", async (req, res) => {
  const userData = req.body;
  if (!userData.username || !userData.password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });
  const duplicateCheck = await UserModel.findOne({
    username: userData.username,
  }).exec();
  if (duplicateCheck) return res.sendStatus(409);

  try {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    userData.password = hashedPassword;
    const newUser = new UserModel(userData);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default signupController;
