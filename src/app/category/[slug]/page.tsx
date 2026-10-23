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
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8">
          
          {/* 1. Breadcrumb */}
          <div className="breadcrumbs mb-5 text-xs text-gray-600">
            <ul>
              <li>
                <Link href="/">হোম</Link>
              </li>

              <li className="font-medium text-gray-800">{category.nameBn}</li>
            </ul>
          </div>

          <div className="flex items-center gap-3 bg-white p-5 border border-gray-200 rounded-2xl">
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
