"use server";

import { redirect } from "next/navigation";

export default async function searchRecipe(formData: FormData): Promise<void> {
  const search = formData.get("search");

  if (!search) {
    return;
  }

  redirect(`/recipes?search=${search}`);
}
