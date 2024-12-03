import { db } from "@/db";
import { recipeCategories } from "@/db/schema";
import { eq } from "drizzle-orm";

export default async function CategoryPage({ params }: { params: { slug: string } }) {
    const category = await db.query.recipeCategories.findFirst({ where: eq(recipeCategories.slug, params.slug) });
    return <div>{category?.name}</div>;
}
