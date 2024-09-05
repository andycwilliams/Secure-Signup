import express from "express";
import userController from "../controllers/UserController.js";

const router = express.Router();

router.get("/users", userController);
router.get("/users/:id", userController);
router.post("/users", userController);
router.put("/users/:id", userController);
router.delete("/users/:id", userController);
router.get("/users/:email", userController);

export default router;
