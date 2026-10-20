const Base_URL = "https://openapi.programming-hero.com/api/bazardor";

// 1.  NavLinks by fetching categories
export const getCategories = async() => {
    const res = await fetch(`${Base_URL}/categories`);
    if (!res.ok) {
        throw new Error('Categories fetch করতে সমস্যা হয়েছে');
    }
    return res.json();
}

// fetching products
export const getProducts = async() => {
    const res = await fetch(`${Base_URL}/products`, {
        next: { revalidate: 60}
    });
    if(!res.ok) {
        throw new Error('Products fetch করতে সমস্যা হয়েছে');
    }
    return res.json();
}
