import { db } from "@/db";
import { Recipe } from "@/db/schema";

export async function getRecipes(search: string): Promise<Recipe[]> {
    if (search) {
        return await db.query.recipes.findMany({
            where: ({ title }, { like }) => like(title, `%${search}%`),
        });
    }
    return await db.query.recipes.findMany();
}