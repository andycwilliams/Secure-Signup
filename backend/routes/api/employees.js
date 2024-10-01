import express from "express";
import employeeController from "../../controllers/EmployeeController.js";
import ROLES_LIST from "./../../config/roles_list.js";
import verifyRoles from "../../middleware/verifyRoles.js";

const employeeRouter = express.Router();

employeeRouter.get(
  "/",
  verifyRoles(ROLES_LIST.Admin, ROLES_LIST.Editor),
  employeeController
);

export default employeeRouter;
