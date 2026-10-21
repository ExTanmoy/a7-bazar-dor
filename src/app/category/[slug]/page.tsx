import { notFound } from "next/navigation";
import { getCategoryBySlug, getProductsByCategory } from "@/lib/api";
import ProductCard from "@/components/UI/ProductCard";
import Link from "next/link";
import { BazarDorProduct,  } from "@/types/bazardor";

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

        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-sm text-gray-500">মোট {products.length} টি পণ্য দেখানো হচ্ছে</h2>
          <p className="text-sm text-gray-500">Sorting</p>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product : BazarDorProduct) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-gray-300 bg-white px-5 py-16 text-center">
            <p className="text-gray-600">
              এই ক্যাটাগরিতে কোনো পণ্য পাওয়া যায়নি।
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
