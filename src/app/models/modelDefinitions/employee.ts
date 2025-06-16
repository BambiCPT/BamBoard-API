import { DataTypes, Sequelize } from "sequelize";
import type { EmployeeStatic } from "../interfaces/employee.ts";

export default (sequelize: Sequelize): EmployeeStatic => {
    return sequelize.define(
        "Employee", 
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        departmentId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        managerId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        },
        {
            tableName: "employees",
            timestamps: false
        }
    ) as EmployeeStatic;
}