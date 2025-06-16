import express from "express";
import type { Request, Response, Router } from "express";
import { getDepartmentById } from "../../src/app/controllers/Departments/index.ts";
import { getAllDepartments } from "../../src/app/controllers/Departments/index.ts";
import { addDepartment } from "../../src/app/controllers/Departments/index.ts";
import { deleteDepartmentById} from "../../src/app/controllers/Departments/index.ts";
import { updateDepartmentById } from "../../src/app/controllers/Departments/index.ts";
import { getDepartmentEmployees } from "../../src/app/controllers/Departments/index.ts";

const router = express.Router();

router.get(
    "/",
    (req: Request, res: Response) => getAllDepartments(req, res));

router.get(
    "/:id",
    (req: Request, res: Response) => getDepartmentById(req, res));

router.get(
    "/:id/employees",
    (req: Request, res: Response) => getDepartmentEmployees(req, res));

router.put(
    "/:id",
    (req: Request, res: Response) => updateDepartmentById(req, res));

router.post(
    "/",
    (req: Request, res: Response) => addDepartment(req, res));

router.delete(
    "/:id",
    (req: Request, res: Response) => deleteDepartmentById(req, res));

export default router;