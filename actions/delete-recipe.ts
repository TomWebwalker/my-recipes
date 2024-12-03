"use server";
import { db } from "@/db";
import { recipes } from "@/db/schema";
import { eq } from "drizzle-orm";
import {revalidatePath} from "next/cache";

export default async function deleteRecipe(id: number): Promise<void> {
  await db.delete(recipes).where(eq(recipes.id, id));

  revalidatePath("/recipes");

  return Promise.resolve();
}
