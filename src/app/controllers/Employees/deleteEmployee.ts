import type { Request, Response } from "express";
import * as employeeRepository from "../../repositories/employeeRepository.ts";

export async function deleteEmployeeById(req: Request, res: Response) {
    try {
        const employee = await employeeRepository.getEmployeeById(req.params.id);
        if (!employee) {
            return res.status(404).json({ error: "Employee not found" }); 
        }
        await employeeRepository.deleteEmployee(req.params.id);
        res.json({ message: "Employee successfully deleted" });
    } catch (err) {
        res.status(500).json({ error: "Failed to delete employee" });
    }
};