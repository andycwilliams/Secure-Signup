import express from "express";
import userController from "../../controllers/UserController.js";

const userRouter = express.Router();

userRouter.get("/", userController); // Maps to GET /users
userRouter.get("/:id", userController); // Maps to GET /users/:id
userRouter.get("/email/:email", userController); // Maps to GET /users/email/:email
userRouter.put("/:id", userController); // Maps to PUT /users/:id
userRouter.delete("/:id", userController); // Maps to DELETE /users/:id

export default userRouter;
