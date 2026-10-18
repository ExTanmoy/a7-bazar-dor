import { getCategories } from "@/lib/api";
import { Category } from "@/types/bazardor";
import Link from "next/link";

const NavLinks = async() => {
    const categories = await getCategories();
    return (
        <div className="flex gap-3 justify-center ">
            {
                categories.map((category:Category) =>  
                    <Link 
                        key={category.id} 
                        href={`category/${category.slug}`} 
                        className="flex gap-1.5 text-xs font-bold rounded-xl px-4 py-2 hover:bg-mauve-200 hover:scale-105 transition-all duration-200">
                            <span>{category.icon}</span>
                            <span>{category.nameBn}</span>
                    </Link>)
            }
        </div>
    );
};

export default NavLinks;