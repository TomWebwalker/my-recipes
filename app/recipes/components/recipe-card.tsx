"use client";
import { Recipe } from "@/db/schema";
import Image from "next/image";
import RecipeCardActions from "@/app/recipes/components/recipe-card-actions";
import deleteRecipe from "@/actions/delete-recipe";
import {toast} from "sonner";

export default function RecipeCard({ recipe }: { recipe: Recipe }) {
  const editRecipe = () => {};
  const handleDeleteRecipe = () => {
    console.log("delete recipe");
    deleteRecipe(recipe.id).then(() => {
        toast("Recipe deleted successfully");
    })
  };

  return (
    <div className="rounded group overflow-hidden relative h-[300px]">
      <Image
        src={`/assets/${recipe.imageUrl}`}
        alt={"image"}
        fill
        className={"object-cover"}
        priority
      />
      <RecipeCardActions deleteRecipe={handleDeleteRecipe} editRecipe={editRecipe} />
    </div>
  );
}
