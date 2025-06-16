import type { Request, Response } from "express";
import * as employeeRepository from "../../repositories/employeeRepository.ts";

export async function getAllEmployees(req: Request, res: Response) {
    try {
        const employees = await employeeRepository.getAllEmployees();
        res.json(employees);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch employees" });
    }
}

export async function getEmployeeById(req: Request, res: Response) {
    try {
        const employee = await employeeRepository.getEmployeeById(req.params.id);
        if (!employee) return res.status(404).json({ error: "Employee not found" });
        res.json(employee);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch employee" })
    }
}

export async function getEmployeeHierarchy(req: Request, res: Response) {
    try {
        const hierarchy = await employeeRepository.getEmployeeHierarchy(req.params.id);
        res.json(hierarchy);
    } catch (err) {
        res.status(500).json({ error: "Failed to generate hierarchy report" })
    }
}

export async function searchEmployee(req: Request, res: Response) {
    console.log(req.query);
    try { 
        const { name, title, departmentName } = req.query;
        const employees = await employeeRepository.searchEmployee(
            name as string,
            title as string,
            departmentName as string
        );
        if (!employees) return res.status(404).json({ error: "Employee not found" });
        res.json(employees);
    } catch (err) {
        res.status(500).json({ error: "Employee search failed. "})
    }
}