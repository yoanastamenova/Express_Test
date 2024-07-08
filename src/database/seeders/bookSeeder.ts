import { AppDataSource } from "../db";

export const bookSeeder = async () => {
    try {
        await AppDataSource.initialize();


    } catch (error: any) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("----------------------");
        console.error('Error in book seeder:', message);
        console.error("----------------------");

    } finally {
        await AppDataSource.destroy();
    }
}