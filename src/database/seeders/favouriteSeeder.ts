import { AppDataSource } from "../db";

export const favouriteSeeder = async () => {
    try {
        await AppDataSource.initialize();

        
    } catch (error: any) {
        const message = error instanceof Error ? error.message : String(error);
        console.error("----------------------");
        console.error('Error in favourite seeder:', message);
        console.error("----------------------");

    } finally {
        await AppDataSource.destroy();
    }
}