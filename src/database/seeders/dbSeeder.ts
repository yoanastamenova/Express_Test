import { authorSeeder } from "./authorSeeder";
import { bookSeeder } from "./bookSeeder";
import { favouriteSeeder } from "./favouriteSeeder";
import { userSeeder } from "./userSeeder";

(async () => { 
    console.log("Starting seeders...")
    await authorSeeder();
    await userSeeder();
})();


