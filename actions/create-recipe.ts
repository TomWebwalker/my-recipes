"use server";

import { db } from "@/db";
import { recipes } from "@/db/schema";
import { revalidatePath } from "next/cache";
import { writeFile } from "node:fs/promises";
import path from "node:path";

export default async function createRecipe(formData: FormData, { success }: { success: boolean }) {
  const title = formData.get("title");
  const description = formData.get("description");
  const photo = formData.get("photo") as File;
  const promoted = formData.get("promoted");
  const category = formData.get("category");

  // Convert the file data to a Buffer
  const buffer = Buffer.from(await photo.arrayBuffer());

  // Replace spaces in the file name with underscores
  const filename = photo.name.replaceAll(" ", "_");

  await writeFile(
    path.join(process.cwd(), "public/assets/" + filename),
    buffer,
  );

  if (!title || !description || !photo || !category) {
    return;
  }

  await db.insert(recipes).values({
    title: title.toString(),
    description: description.toString(),
    imageUrl: filename,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    promoted: promoted === "on",
    categoryId: +category,
  });

  revalidatePath("/recipes");

  return { success: true };
}
