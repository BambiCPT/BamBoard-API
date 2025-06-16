import { Model } from "sequelize";

export interface Department {
    id?: string;
    name: string;
}

export interface DepartmentModel extends Model, Department {}

export type DepartmentStatic = typeof Model & {
    new (values?: object, options?: object): DepartmentModel;
};

