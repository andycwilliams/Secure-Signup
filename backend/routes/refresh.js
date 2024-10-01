import express from "express";
import refreshTokenController from "../controllers/RefreshTokenController.js";

const refreshRouter = express.Router();

refreshRouter.get("/", refreshTokenController);

export default refreshRouter;
