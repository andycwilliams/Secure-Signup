import { Router } from "express";
import UserModel from "../models/UserModel.js";
// import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const authController = Router();

authController.post("/", async (req, res) => {
  console.log("----- authController called -----");
  // console.log(req.body);
  // const { id, username, email, password } = req.body;
  const { username, password } = req.body;
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
  // console.log("User found!", foundUser);

  const matchUser = await bcrypt.compare(password, foundUser.password);

  if (matchUser) {
    // console.log("User matches!");
    const roles = Object.values(foundUser.roles).filter(Boolean);

    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: foundUser.username,
          roles: roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "60m" }
    );
    console.log("Access token: ", accessToken);
    // No need to send roles in the refresh token
    // It's only here to verify we can get a new access token
    const refreshToken = jwt.sign(
      { username: foundUser.username },
      process.env.REFRESH_TOKEN_SECRET,
      { expiresIn: "1d" }
    );
    console.log("Refresh token: ", refreshToken);

    // const otherUsers = await UserModel.find({ _id: { $ne: id } });
    // const currentUser = { ...foundUser, refreshToken };

    foundUser.refreshToken = refreshToken;
    const result = await foundUser.save();
    console.log("After saving refresh token: ", result);
    // console.log("User's roles: ", roles);

    // res.cookie("jwt", refreshToken, {
    //   httpOnly: true,
    //   maxAge: 24 * 60 * 60 * 1000,
    // });
    res.cookie("jwt", refreshToken, {
      httpOnly: true,
      // secure: true,
      // secure: process.env.NODE_ENV === "production",
      sameSite: "None",
      maxAge: 24 * 60 * 60 * 1000,
    });

    // res.json({ success: `User ${username} is logged in!`, accessToken });
    res.json({ roles, accessToken });
  } else {
    res.sendStatus(401);
    console.log("Login unsuccessful...");
  }
  console.log("----- authController ended -----");
});

export default authController;
