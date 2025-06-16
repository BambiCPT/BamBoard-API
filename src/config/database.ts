import 'dotenv/config';
import { Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME!;
const dbUser = process.env.DB_USER!;
const dbPassword = process.env.DB_PASSWORD!;
const dbHost = process.env.DB_HOST!;

export const sequelize = new Sequelize(
    dbName,
    dbUser,
    dbPassword,
    {
        host: dbHost,
        dialect: 'mysql',
    }
);

export async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log("Successfully connected");
    } catch (error) {
        console.log("There was an issue while trying to connect");
    }
}
