import { Router } from "express";
import EmployeeModel from "../models/EmployeeModel.js";

const employeeController = Router();

employeeController.get("/", async (req, res) => {
  console.log("Getting all employees...");
  try {
    const employees = await EmployeeModel.find();
    res.send(employees);
  } catch (error) {
    res.status(500).send(error);
  }
});

export default employeeController;
