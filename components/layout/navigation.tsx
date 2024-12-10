import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import AuthButton from "./auth-button";

export default function Navigation() {
  return (
    <nav className={"py-4 px-8 sticky flex items-center"}>
      <div className={"flex-1"}>
        <Link href={"/"}>
          <span>My</span><strong className="text-green-700">Recipes</strong>
        </Link>
      </div>
      <div className={"flex-1 flex justify-center"}>
        {/*TODO: navigation items*/}
        <Link href={"/recipes"} className={buttonVariants({ variant: "link" })}>
          Recipes
        </Link>
        <Link href={"/categories"} className={buttonVariants({ variant: "link" })}>
          Categories
        </Link>
        <Link href={"/authors"} className={buttonVariants({ variant: "link" })}>
          Authors
        </Link>
      </div>
      <div className={"flex-1 flex justify-end"}>
        <AuthButton />
      </div>
    </nav>
  );
}
