import { DataTypes, Sequelize } from "sequelize";
import type { DepartmentStatic } from "../interfaces/department.ts";

export default (sequelize: Sequelize): DepartmentStatic => {
    return sequelize.define(
        "Department",
        {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
        },
        },
        {
            tableName: "departments",
            timestamps: false
        }
    ) as DepartmentStatic;
}