import "reflect-metadata"
import { DataSource } from "typeorm"

import 'dotenv/config';

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "library_online",
    entities: [],
    synchronize: false,
    logging: false,
})