import { boolean, int, mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { createInsertSchema } from "drizzle-zod";
import { recipeCategories } from "./recipe-categories";

export const recipes = mysqlTable("recipes", {
  id: int("id").primaryKey().autoincrement(),
  title: varchar("title", { length: 256 }).notNull(),
  description: varchar("description", { length: 256 }).notNull(),
  imageUrl: varchar("imageUrl", { length: 256 }).notNull(),
  createdAt: varchar("created_at", { length: 64 }),
  updatedAt: varchar("updated_at", { length: 64 }),
  promoted: boolean("promoted").notNull().default(false),
  categoryId: int("category_id").references(() => recipeCategories.id),
});

export const insertRecipeSchema = createInsertSchema(recipes);

export type Recipe = typeof recipes.$inferSelect;
