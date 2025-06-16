import type { Request, Response } from "express";
import * as departmentRepository from "../../repositories/departmentRepository.ts";

export async function addDepartment(req: Request, res: Response) {
    try {
        const { id, name } = req.body;
        const newDepartment = await departmentRepository.addDepartment({ id, name });

        res.status(201).json(newDepartment)
    } catch (err) {
        res.status(500).json({ error: "Failed to create new department" })
    }
}

