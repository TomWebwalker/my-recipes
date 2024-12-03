import { RecipeCategory } from "@/db/schema";
import Image from "next/image";
import Link from "next/link";


export default function RecipeCategoryCard({ category }: { category: RecipeCategory }) {
    return <Link href={`/categories/${category.slug}`} className="relative size-[300px] rounded-lg group overflow-hidden cursor-pointer">
        <Image 
            src={'/assets/' + category.image} 
            alt={category.name} 
            height={300}
            width={300}
            priority
            className="blur-sm group-hover:blur-none transition-all duration-300" 
        />
        <div className="absolute inset-0 flex items-center justify-center p-4 bg-black/50 text-white">
            <h3 className="text-2xl font-bold">{category.name}</h3>
        </div>
    </Link>;
}
