import { Router } from "express";
import UserModel from "../models/UserModel.js";
import jwt from "jsonwebtoken";

const refreshTokenController = Router();

refreshTokenController.get("/", async (req, res) => {
  console.log("----- refreshTokenController called -----");

  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(401);

  const refreshToken = cookies.jwt;
  console.log("Refresh token:");
  console.log(refreshToken);

  const foundUser = await UserModel.findOne({ refreshToken }).exec();
  if (!foundUser) return res.sendStatus(403);

  jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
    if (err || foundUser.username !== decoded.username)
      return res.sendStatus(403);
    const roles = Object.values(foundUser.roles);
    const accessToken = jwt.sign(
      {
        UserInfo: {
          username: decoded.username,
          roles: roles,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: "15m" } // 60s is good for testing, production should be longer (e.g. 15 minutes or more)
    );
    res.json({ roles, accessToken });
  });

  console.log("----- refreshTokenController ended -----");
});

export default refreshTokenController;
