const Base_URL = "https://openapi.programming-hero.com/api/bazardor";

// 1.  NavLinks by fetching categories
export const getCategories = async() => {
    const res = await fetch(`${Base_URL}/categories`);
    if (!res.ok) {
        throw new Error('Categories fetch করতে সমস্যা হয়েছে');
    }
    return res.json();
}