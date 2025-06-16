import express from "express";
import type { Request, Response, Router } from "express";
import { getEmployeeById, getEmployeeHierarchy, searchEmployee } from "../../src/app/controllers/Employees/index.ts";
import { getAllEmployees } from "../../src/app/controllers/Employees/index.ts";
import { addEmployee } from "../../src/app/controllers/Employees/index.ts";
import { deleteEmployeeById} from "../../src/app/controllers/Employees/index.ts";
import { updateEmployeeById } from "../../src/app/controllers/Employees/index.ts";

const router = express.Router();

router.get("/", 
    (req: Request, res: Response) => getAllEmployees(req, res));

router.get(
    "/search",
    (req: Request, res: Response) => searchEmployee(req, res));

router.get(
    "/hierarchy/:id",
    (req: Request, res: Response) => getEmployeeHierarchy(req, res));
    
router.get(
    "/:id", 
    (req: Request, res: Response) => getEmployeeById(req, res));

router.post(
    "/", 
    (req: Request, res: Response) => addEmployee(req, res));

router.put(
    "/:id", 
    (req: Request, res: Response) => updateEmployeeById(req, res));

router.delete(
    "/:id",
    (req: Request, res: Response) => deleteEmployeeById(req, res));

export default router;