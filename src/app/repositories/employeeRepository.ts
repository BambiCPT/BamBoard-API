import { Employee } from "../models/relationships/employee.ts"
import { sequelize } from "../../config/database.ts";
import { QueryTypes } from "sequelize";

export async function getAllEmployees() {
    return Employee.findAll();
}

export async function getEmployeeById(id: string) {
    return Employee.findByPk(id);
}

export async function addEmployee(data: any) {
    return Employee.create(data);
}

export async function updateEmployee(id: string, data: any) {
    const employee = await Employee.findByPk(id);
    if (!employee) return null;
    return employee.update(data);
}

export async function deleteEmployee(id: string) {
    const employee = await Employee.findByPk(id);
    if (employee) {
        await employee.destroy();
        return true;
    }
    return null;
}

export async function searchEmployee(name?: string, title?: string, departmentName?: string) {
    const result = await sequelize.query(`
        SELECT * 
        FROM employees as e
        INNER JOIN departments as d on e.departmentId = d.id
        WHERE
        (:name IS NULL OR e.name LIKE CONCAT('%', :name, '%'))
        AND
        (:title IS NULL or e.title LIKE CONCAT('%', :title, '%'))
        AND 
        (:departmentName IS NULL or d.name LIKE CONCAT('%', :departmentName, '%'))
        `,
        {
            type: QueryTypes.SELECT,
            replacements: {
                name: name ?? null, 
                title: title ?? null, 
                departmentName: departmentName ?? null
            }
        }
    );
    return result;
}

type EmployeeHierarchyRes = {
    id: string;
    name: string;
    title: string;
    level: number;
};

export async function getEmployeeHierarchy(id: string) {
    const hierarchy = await sequelize.query<EmployeeHierarchyRes>(`
        WITH RECURSIVE EmployeeHierarchy AS (
        SELECT id, name, title, 0 as level
        FROM employees
        WHERE id = :id 
        UNION ALL
        SELECT e.id, e.name, e.title, eh.level + 1
        FROM employees e
        INNER JOIN EmployeeHierarchy eh ON e.managerId = eh.id
        )
        SELECT name, title, level
        FROM EmployeeHierarchy
        ORDER BY level 
        `,
        {
            type: QueryTypes.SELECT,
            replacements: { id }
        }
    );
    const manager = hierarchy.find((emp) => emp.level === 0);
    const team = hierarchy.filter((emp) => emp.level > 0);

    return {
        manager: manager ? manager.name : null,
        team
    };
}

