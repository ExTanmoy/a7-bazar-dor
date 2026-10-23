"use client";

import { useState } from "react";
import ProductCard from "@/components/UI/ProductCard";
import type { BazarDorProduct } from "@/types/bazardor";

interface SortingProductsProps {
  products: BazarDorProduct[];
}

type SortOption = "default" | "price-asc" | "price-desc";

const SortingProducts = ({ products }: SortingProductsProps) => {
  const [sortOption, setSortOption] = useState<SortOption>("default");


  const sortProducts = (items: BazarDorProduct[]) => {
    const result = [...items];

    if (sortOption === "price-asc") {
      result.sort((a, b) => a.today - b.today);
    } else if (sortOption === "price-desc") {
      result.sort((a, b) => b.today - a.today);
    }

    return result;
  };

  const sortedProducts = sortProducts(products);

  return (
    <section>
      <div className="mb-2 flex items-center justify-between gap-4">
        <h2 className="text-sm  text-gray-500">মোট {products.length} টি পণ্য দেখানো হচ্ছে</h2>

        <label className="fieldset flex items-center">
          <span className="text-sm text-gray-600 hidden sm:block">সাজান</span>
          <select
            value={sortOption}
            onChange={(event) =>
              setSortOption(event.target.value as SortOption)
            }
            className="select select-sm rounded-xl"
          >
            <option value="default">ডিফল্ট</option>
            <option value="price-asc">দাম: কম থেকে বেশি</option>
            <option value="price-desc">দাম: বেশি থেকে কম</option>
          </select>
        </label>
      </div>

      {sortedProducts.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 ">
          {sortedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center text-gray-600">
          কোনো পণ্য পাওয়া যায়নি।
        </div>
      )}
    </section>
  );
};

export default SortingProducts;
