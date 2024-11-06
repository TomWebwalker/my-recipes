import { db } from "@/db";
import { Recipe } from "@/db/schema";

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ [_: string]: string }>;
}) {
  const search = (await searchParams).search;
  let recipes: Recipe[] = [];
  if (search) {
    recipes = await db.query.recipes.findMany({
      where: ({ title }, { like }) => like(title, `%${search}%`),
    });
  } else {
    recipes = await db.query.recipes.findMany();
  }
  // TODO: display list of recipes

  const recipeItems = recipes.map((recipe) => (
    <li key={recipe.id}>
      <a href={`/recipes/${recipe.id}`}>{recipe.title}</a>
    </li>
  ));

  return (
    <>
      <div>Recipes {search}</div>
      <ul>{recipeItems}</ul>
    </>
  );
}
