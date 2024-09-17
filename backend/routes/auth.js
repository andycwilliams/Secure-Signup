import express from "express";
import authController from "../controllers/AuthController.js";

const authRouter = express.Router();

authRouter.post("/", authController);

export default authRouter;
