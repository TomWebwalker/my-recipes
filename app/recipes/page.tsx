import { db } from "@/db";

export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ [_: string]: string }>;
}) {
  const search = (await searchParams).search;
  // TODO: display list of recipes
  const recipes = await db.query.recipes.findMany();

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
