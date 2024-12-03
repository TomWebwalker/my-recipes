// 'use client';
import { Button } from "@/components/ui/button";
import { Pencil, Trash } from "lucide-react";

interface RecipeCardActionsProps {
    editRecipe: () => void;
    deleteRecipe: () => void;
}

export default function RecipeCardActions({editRecipe, deleteRecipe}: RecipeCardActionsProps) {
  return (
    <div
      className={
        "absolute top-0 w-full p-2 flex opacity-0 transition-all gap-2 justify-end group-hover:opacity-100 group-hover:bg-black/50"
      }
    >
      <Button variant="outline" size="icon" onClick={editRecipe}>
        <Pencil />
      </Button>
      <Button variant="outline" size="icon" onClick={deleteRecipe}>
        <Trash color={"red"} />
      </Button>
    </div>
  );
}
