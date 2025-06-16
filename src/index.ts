import express from 'express';
import { connectToDatabase } from "./config/database.ts";
import employeeRoutes from "./routes/employee.ts";
import departmentRoutes from "./routes/department.ts";

async function start() {

    await connectToDatabase();

    const app = express();
    app.use(express.json());

    app.use("/employees", employeeRoutes);
    app.use("/departments", departmentRoutes)


    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    })
}

start();