import { Model } from "sequelize";

export interface Employee {
    id?: string;
    name: string;
    title: string;
    departmentId: string;
    managerId: string;
}

export interface EmployeeModel extends Model, Employee {}

export type EmployeeStatic = typeof Model & {
    new (values?: object, options?: object): EmployeeModel;
};

