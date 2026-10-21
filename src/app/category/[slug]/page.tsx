import { notFound } from "next/navigation";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/api";
import Link from "next/link";
import SortingProducts from "@/components/SortingProducts";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;

  const category = await getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = await getProductsByCategory(slug);

  return (
    <main className="min-h-screen bg-gray-50 px-4 py-8 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          <div className="mb-3 text-sm text-gray-500 font-semibold">
            <Link href={'/'} className="hover:text-green-600">
              <span>হোম</span>
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/category/${category.slug}`} className="hover:text-green-600">
              <span>{category.nameBn}</span>
            </Link>
            
          </div>

          <div className="flex items-center gap-3">
            <span className="text-4xl">{category.icon}</span>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 md:text-3xl">
                {category.nameBn}
              </h1>
              <p className="mt-1 text-sm text-gray-500">
                {`${products.length} টি পণ্যের আজকের দাম ও পরিবর্তন`}
              </p>
            </div>
          </div>
        </div>

        
          <SortingProducts products={products}></SortingProducts>

        
      </div>
    </main>
  );
}
