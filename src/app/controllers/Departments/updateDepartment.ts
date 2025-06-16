import type { Request, Response } from "express";
import * as departmentRepository from "../../repositories/departmentRepository.ts";

export async function updateDepartmentById(req: Request, res: Response) {
    try {
        const department = await departmentRepository.getDepartmentById(req.params.id);
        if (!department) {
            return res.status(404).json({ error: "Department not found" });
        }
        const updated = await departmentRepository.updateDepartment(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: "Failed to update department" });
    }
}