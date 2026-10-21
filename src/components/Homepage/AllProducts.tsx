import { BazarDorProduct } from "@/types/bazardor";
import SortingProducts from "../SortingProducts";

const AllProducts = ({ products }: { products: BazarDorProduct[] }) => {
  return (
    <section id="all-products" className=" max-w-7xl mx-auto">
      <div className="flex gap-2">
        <span className="text-red-600"></span>
        <h2 className="text-xl font-bold">সব পণ্য ({products.length})</h2>
      </div>

      <SortingProducts products={products}></SortingProducts>

    </section>
  );
};

export default AllProducts;
