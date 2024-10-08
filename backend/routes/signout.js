import express from "express";
import signoutController from "../controllers/SignoutController.js";

const signoutRouter = express.Router();

signoutRouter.get("/", signoutController);

export default signoutRouter;
