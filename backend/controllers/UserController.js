import { Router } from "express";
import UserModel from "../models/UserModel.js";
import mongoose from "mongoose";

const userRouter = Router();

userRouter.get("/", async (req, res) => {
  console.log("ALL users = GET");
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

userRouter.get("/:id", async (req, res) => {
  console.log("Single user = GET");
  try {
    const { id } = req.params;
    console.log(id);
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid user ID" });
    }
    const user = await UserModel.findById(id);
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

userRouter.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid user ID" });
    }
    const updatedUser = await UserModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedUser) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send(updatedUser);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

userRouter.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).send({ message: "Invalid user ID" });
    }
    const deletedUser = await UserModel.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).send({ message: "User not found" });
    }
    res.send({ message: "User successfully deleted" });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

userRouter.get("/email/:email", async (req, res) => {
  try {
    const { email } = req.params;
    const user = await UserModel.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .send({ message: "User not found with this email" });
    }
    res.send(user);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

export default userRouter;
