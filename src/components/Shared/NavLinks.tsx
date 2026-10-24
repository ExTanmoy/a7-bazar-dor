import { getCategories } from "@/lib/api";
import { Category } from "@/types/bazardor";
import CategoryLink from "./CategoryLink";

const NavLinks = async() => {
    const categories : Category[] = await getCategories();
    return (
        <div className="flex flex-wrap gap-1 sm:gap-3 justify-center py-1">
            {
                categories.map((category:Category) =>  (
                    <CategoryLink key={category.id} category={category}></CategoryLink>
                )
                    )
            }
        </div>
    );
};

export default NavLinks;