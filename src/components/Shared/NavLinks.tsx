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
                    // <Link 
                    //     key={category.id} 
                    //     href={`/category/${category.slug}`} 
                    //     className="flex gap-1.5 text-sm font-bold rounded-xl px-2 sm:px-4 py-2 hover:bg-mauve-200 hover:scale-105 transition-all duration-200">
                    //         <span>{category.icon}</span>
                    //         <span>{category.nameBn}</span>
                    // </Link>


                    )
            }
        </div>
    );
};

export default NavLinks;