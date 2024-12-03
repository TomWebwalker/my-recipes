import { db } from "@/db";
import RecipeCategoryCard from "./components/recipe-category-card";

export default async function CategoriesPage() {
    const categories = await db.query.recipeCategories.findMany();

    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center">
        {categories.map((category) => (
            <RecipeCategoryCard key={category.id} category={category} />
        ))}
    </div>;
}
