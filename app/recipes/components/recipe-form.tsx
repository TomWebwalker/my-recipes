"use client";
import createRecipe from "@/actions/create-recipe";
import FileUpload from "@/components/shared/file-upload";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { RecipeCategory } from "@/db/schema";
import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function RecipeForm({ categories, onSuccess }: { categories: RecipeCategory[], onSuccess: () => void }) {
  const [state, formAction] = useFormState(
    (prevState: { success: boolean } | undefined, formData: FormData) => createRecipe(formData, prevState),
    { success: false }
  );

  useEffect(() => {
    if (state?.success) {
      onSuccess();
    }
  }, [state?.success]);

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Create recipe</DialogTitle>
        <DialogDescription>
          Create a new recipe and share it with others.
        </DialogDescription>
      </DialogHeader>
      <form action={formAction} id="recipe-form" className="space-y-4">
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="title">Title</Label>
          <Input type="text" id="title" placeholder="Title" name="title" />
        </div>
        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="description">Description</Label>
          <Textarea
            id="description"
            placeholder="Description"
            name="description"
          />
        </div>

        <div className="grid w-full items-center gap-1.5">
          <Label htmlFor="category">Category</Label>
          <Select name="category">
            <SelectTrigger>
              <SelectValue placeholder="Select a category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.id} value={category.id.toString()}>
                  {category.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex w-full max-w-sm items-center gap-1.5">
          <Switch id="promoted" name="promoted" />
          <Label htmlFor="promoted">Promoted</Label>
        </div>

        <FileUpload label="Photo" />

      </form>

      <DialogFooter className="flex gap-2">
        <Button form="recipe-form" type="submit">
          Create
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
