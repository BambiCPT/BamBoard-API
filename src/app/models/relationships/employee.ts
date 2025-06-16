import { sequelize } from "../../../config/database.ts";
import defineEmployee from "../modelDefinitions/employee.ts";
import defineDepartment from "../modelDefinitions/department.ts";

const Employee = defineEmployee(sequelize);
const Department = defineDepartment(sequelize);

Employee.belongsTo(Department, {
    foreignKey: "departmentId",
    as: "department"
});

Employee.belongsTo(Employee, {
    foreignKey: "managerId",
    as: "employees"
});

export { Employee };