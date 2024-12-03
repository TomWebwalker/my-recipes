"use client";

import { Button } from "@/components/ui/button";
import { Dialog } from "@/components/ui/dialog";
import { RecipeCategory } from "@/db/schema";
import { useState } from "react";
import RecipeForm from "./recipe-form";

export default function RecipePageToolbar({ categories }: { categories: RecipeCategory[] }) {
    const [open, setOpen] = useState(false);

    return <Dialog open={open} onOpenChange={setOpen}>
        <Button variant="outline" onClick={() => setOpen(true)}>
            Create recipe
        </Button>
        <RecipeForm categories={categories} onSuccess={() => setOpen(false)} />
    </Dialog>

}