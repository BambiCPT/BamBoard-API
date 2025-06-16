import type { Request, Response } from "express";
import * as employeeRepository from "../../repositories/employeeRepository.ts";


export async function addEmployee(req: Request, res: Response) {
    try {
        const { id, name, title, departmentId, managerId } = req.body;
        const newEmployee = await employeeRepository.addEmployee({
            id,
            name,
            title,
            departmentId,
            managerId: managerId || null
        });

        res.status(201).json(newEmployee)
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to add new employee" })
    }
}