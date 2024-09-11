import { Router } from "express";
import UserModel from "../models/UserModel.js";
import mongoose from "mongoose";

const userRouter = Router();

// ----- SignUp routes -----

userRouter.get("/users", async (req, res) => {
  try {
    const users = await UserModel.find();
    res.send(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

userRouter.get("/users/:id", async (req, res) => {
  try {
    const { id } = req.params;
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

userRouter.post("/users", async (req, res) => {
  try {
    const userData = req.body;
    const newUser = new UserModel(userData);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

userRouter.put("/users/:id", async (req, res) => {
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

userRouter.delete("/users/:id", async (req, res) => {
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

userRouter.get("/users/email/:email", async (req, res) => {
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

// ----- SignIn routes -----

userRouter.post("/users/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await UserModel.findOne({ username });
    if (!user) {
      return res.status(404).send({ message: "User not found" });
    }

    const isPasswordValid = await user.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(401).send({ message: "Invalid credentials" });
    }

    const accessToken = "exampleAccessTokenNotARealOne";

    res.send({ accessToken, roles: user.roles });
    console.log("Successfully logged in!");
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: "Login failed" });
  }
});

export default userRouter;
