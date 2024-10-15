import { Router } from "express";
import EmployeeModel from "../models/EmployeeModel.js";

const employeeController = Router();

employeeController.get("/", async (req, res) => {
  console.log("Getting all employees...");
  try {
    const employees = await EmployeeModel.find();
    res.send(employees);
  } catch (error) {
    console.log("error:");
    console.log(error);
    res.status(500).send(error);
  }
  console.log("...ending getting all employees");
});

export default employeeController;
