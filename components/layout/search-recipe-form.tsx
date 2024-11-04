import { SearchIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import searchRecipe from "@/actions/search-recipe";

export default function SearchRecipeForm() {
  return (
    <form
      action={searchRecipe}
      className="flex items-center justify-center w-full"
    >
      <Input
        type="text"
        placeholder="eg. apple pie"
        name={"search"}
        className={"rounded-r-none"}
      />
      <Button variant="outline" size="icon" className={"rounded-l-none"}>
        <SearchIcon className="h-4 w-4" />
      </Button>
    </form>
  );
}
