import { Router } from "express";
import UserModel from "../models/UserModel.js";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authController = Router();

authController.post("/", async (req, res) => {
  // console.log(req.body);
  const { id, username, email, password } = req.body;
  // console.log(id, username, email, password);

  if (!username || !password)
    return res
      .status(400)
      .json({ message: "Username and password are required." });

  // if (!mongoose.Types.ObjectId.isValid(id)) {
  //   return res.status(400).send({ message: "Invalid user ID" });
  // }


  const foundUser = await UserModel.findOne({ username: username }).exec();
  // const foundUser = await UserModel.findById(id);
  if (!foundUser) return res.sendStatus(401);
  console.log("User found!", foundUser);

  const matchUser = await bcrypt.compare(password, foundUser.password);

  if (matchUser) {
    console.log("User matches!");
    const accessToken = jwt.sign(
      { username: foundUser.username },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "30s" }
    );
    console.log(accessToken);
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    console.log(refreshToken);

    // const otherUsers = await UserModel.find({ _id: { $ne: id } });
    // const currentUser = { ...foundUser, refreshToken };

    // res.cookie("jwt", refreshToken, {
    //   httpOnly: true,
    //   maxAge: 24 * 60 * 60 * 1000,
    // });
    res.json({ success: `User ${username} is logged in!` });
    // res.json({ accessToken });
  } else {
    res.sendStatus(401);
    console.log("Login unsuccessful...");
  }
});

export default authController;
