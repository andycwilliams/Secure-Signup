import express from "express";
import refreshController from "../controllers/RefreshController";

const refreshRouter = express.Router();

refreshRouter.get("/", refreshController);

export default refreshRouter;
