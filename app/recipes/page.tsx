import RecipeCard from "@/app/recipes/components/recipe-card";
import { db } from "@/db";
import RecipePageToolbar from "./components/recipe-page-toolbar";
import { getRecipes } from "./utils/get-recipe";


export default async function RecipesPage({
  searchParams: { search },
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const recipes = await getRecipes(search as string);
  const categories = await db.query.recipeCategories.findMany();

  return (
    <>
      <RecipePageToolbar categories={categories} />
      <div>Recipes</div>
      <div className="grid grid-cols-3 gap-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </>
  );
}
