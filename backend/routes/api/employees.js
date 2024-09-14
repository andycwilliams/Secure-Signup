import express from "express";
import employeeController from "../../controllers/EmployeesController";

const employeeRouter = express.Router();

employeeRouter.get("/", employeeController);

export default employeeRouter;
