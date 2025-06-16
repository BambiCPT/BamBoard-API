import type { Request, Response } from "express";
import * as departmentRepository from "../../repositories/departmentRepository.ts";

export async function getAllDepartments(req: Request, res: Response) {
    try {
        const departments = await departmentRepository.getAllDepartments();
        res.json(departments);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch departments" });
    }
}

export async function getDepartmentById(req: Request, res: Response) {
    try {
        const department = await departmentRepository.getDepartmentById(req.params.id);
        if (!department) return res.status(404).json({ error: "Department not found" });
        res.json(department);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch department" })
    }
}

export async function getDepartmentEmployees(req: Request, res: Response) {
    try {
        const employees = await departmentRepository.getDepartmentEmployees(req.params.id)
        if (!employees) return res.status(404).json({ error: "No employees found" });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch department employees" });
    }
}