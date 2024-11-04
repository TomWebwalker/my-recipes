export default async function RecipesPage({
  searchParams,
}: {
  searchParams: Promise<{ [_: string]: string }>;
}) {
  const search = (await searchParams).search;
  // TODO: display list of recipes

  return <div>Recipes {search}</div>;
}
