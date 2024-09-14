import { Router } from "express";
import EmployeeModel from "../models/EmployeeModel.js";
// import mongoose from "mongoose";

const employeeRouter = Router();

employeeRouter.get("/employees", async (req, res) => {
  try {
    const employees = await EmployeeModel.find();
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default employeeRouter;
