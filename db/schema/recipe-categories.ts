import { int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const recipeCategories = mysqlTable("recipe_categories", {
    id: int("id").primaryKey().autoincrement(),
    name: varchar("name", { length: 256 }).notNull(),
    slug: varchar("slug", { length: 256 }).notNull(),
    image: varchar("image", { length: 256 }).notNull(),
});

export type RecipeCategory = typeof recipeCategories.$inferSelect;