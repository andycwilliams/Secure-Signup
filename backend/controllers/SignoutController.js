import { Router } from "express";
import UserModel from "../models/UserModel.js";

const signoutController = Router();

signoutController.get("/", async (req, res) => {
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
    res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
    return res.sendStatus(204);
  }

  // Delete refresh token in DB
  foundUser.refreshToken = "";
  const result = await foundUser.save();
  console.log("result:");
  console.log(result);

  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.sendStatus(204);

  console.log("----- signoutController ended -----");
});

export default signoutController;
