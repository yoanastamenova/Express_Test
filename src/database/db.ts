import "reflect-metadata";
import 'dotenv/config';
import { DataSource } from "typeorm";

import { Author1719825232288 } from "./migrations/1719825232288-author";
import { User1719825005301 } from "./migrations/1719825005301-user";

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: [],
    migrations: [Author1719825232288, User1719825005301],
    synchronize: false,
    logging: false,
})