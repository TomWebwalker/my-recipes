import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className={"py-4 px-8 sticky flex items-center"}>
      <div className={"flex-1"}>
        <Link href={"/"}>
          My<strong>Recipes</strong>
        </Link>
      </div>
      <div className={"flex-1 flex justify-center"}>
        {/*TODO: navigation items*/}
        <Link href={"/recipes"} className={buttonVariants({ variant: "link" })}>
          Recipes
        </Link>
      </div>
      <div className={"flex-1 flex justify-end"}>{/*TODO: user menu*/}</div>
    </nav>
  );
}
