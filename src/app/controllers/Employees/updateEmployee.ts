import type { Request, Response } from "express";
import * as employeeRepository from "../../repositories/employeeRepository.ts";

export async function updateEmployeeById(req: Request, res: Response) {
    try {
        const employee = await employeeRepository.getEmployeeById(req.params.id);
        if (!employee) {
            return res.status(404).json({ error: "Employee not found" });
        }
        const updated = await employeeRepository.updateEmployee(req.params.id, req.body);
        res.json(updated);
    } catch (err) {
        res.status(500).json({ error: "Failed to update employee" });
    }
}