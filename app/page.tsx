import { db } from "@/db";
import { recipes } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function Home() {
  const recipeList = await db.query.recipes.findMany({ where: eq(recipes.promoted, true) });
  return (
    <>

    </>
  );
}
