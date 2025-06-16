import type { Request, Response } from "express";
import * as departmentRepository from "../../repositories/departmentRepository.ts";

export async function deleteDepartmentById(req: Request, res: Response) {
    try {
        const department = await departmentRepository.getDepartmentById(req.params.id);
        if (!department) {
            return res.status(404).json({ error: "Department not found" }); 
        }
        await departmentRepository.deleteDepartment(req.params.id);
        res.json({ message: "Department successfully deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete department" });
    }
};