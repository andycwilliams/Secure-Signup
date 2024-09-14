import express from "express";
import authController from "../controllers/AuthController";

const authRouter = express.Router();

authRouter.get("/", authController);

export default authRouter;
