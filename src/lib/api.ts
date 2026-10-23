import { BazarDorProduct } from "@/types/bazardor";

const Base_URL = "https://openapi.programming-hero.com/api/bazardor";

// 1.  NavLinks by fetching categories
export const getCategories = async() => {
    const res = await fetch(`${Base_URL}/categories`);
    if (!res.ok) {
        throw new Error('Categories fetch করতে সমস্যা হয়েছে');
    }
    return res.json();
}

// 2. fetching products
export const getProducts = async() => {
    const res = await fetch(`${Base_URL}/products`, {
        next: { revalidate: 60}
    });
    if(!res.ok) {
        throw new Error('Products fetch করতে সমস্যা হয়েছে');
    }
    return res.json();
}

// 3. fetch particular category by slug
export const getCategoryBySlug = async (slug: string) => {
  const res = await fetch(`${Base_URL}/categories/${slug}`);

  if (!res.ok) {
    throw new Error("Category fetch করতে সমস্যা হয়েছে");
  }

  return res.json();
}

// 4
export const getProductsByCategory = async (slug: string) => {
  const res = await fetch(
    `${Base_URL}/products?category=${encodeURIComponent(slug)}`
  );

  if (!res.ok) {
    throw new Error("Category products fetch করতে সমস্যা হয়েছে");
  }

  return res.json();
}

// 5. fetch single product by slug
export const getProductBySlug = async (slug: string): Promise<BazarDorProduct | null> => {
  const products: BazarDorProduct[] = await getProducts();
  return products.find((p) => p.slug === slug) ?? null;
};
