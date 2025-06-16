import { Department } from "../models/relationships/department.ts";
import { sequelize } from "../../config/database.ts";
import { QueryTypes } from "sequelize";

export async function getAllDepartments() {
    return Department.findAll();
}

export async function getDepartmentById(id: string) {
    return Department.findByPk(id);
}

export async function addDepartment(data: any) {
    return Department.create(data);
}

export async function updateDepartment(id: string, data: any) {
    const department = await Department.findByPk(id);
    if (!department) return null;
    return department.update(data);
}

export async function deleteDepartment(id: string) {
    const department = await Department.findByPk(id);
    if (!department) return null;
    await department.destroy();
    return true;
}

export async function getDepartmentEmployees(id?: string) {
    const employees = await sequelize.query(`
        SELECT *
        FROM employees as e
        INNER JOIN departments as d on e.departmentId = d.id
        WHERE
        d.id = :id
        `,
        {
            type: QueryTypes.SELECT,
            replacements: { id }
        }
    );
    return employees;
}