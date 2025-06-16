import { sequelize } from "../../../config/database.ts";
import defineEmployee from "../modelDefinitions/employee.ts";
import defineDepartment from "../modelDefinitions/department.ts";

const Employee = defineEmployee(sequelize);
const Department = defineDepartment(sequelize);

Department.hasMany(Employee, {
    foreignKey: "departmentId",
    as: "employees"
});

export { Department };