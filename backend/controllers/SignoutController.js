import { Router } from "express";
import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";

const signoutController = Router();

signoutController.post("/", async (req, res) => {
  console.log("----- signoutController called -----");

  // Deleting access token on client
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); // Success because there's no content to send back

  const refreshToken = cookies.jwt;
  console.log("refreshToken:");
  console.log(refreshToken);

  // Is refresh token in DB?
  const foundUser = await UserModel.findOne({ refreshToken }).exec();
  if (!foundUser) {
    res.clearCookie("jwt", {
      httpOnly: true,
      secure: "true",
      sameSite: "None",
    });
    return res.sendStatus(204);
  }

  // Delete refresh token in DB
  const otherUsers = await UserModel.find(
    (user) => user.refreshToken !== foundUser.refreshToken
  );
  const currentUser = { ...foundUser, refreshToken: "" };

  // res.clearCookie('jwt', {httpOnly: true})
  // res-sendStatus(204)

  console.log("----- signoutController ended -----");
});

export default signoutController;
