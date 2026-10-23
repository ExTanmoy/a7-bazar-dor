import { BazarDorProduct } from "@/types/bazardor";
import SortingProducts from "../SortingProducts";

const AllProducts = ({ products }: { products: BazarDorProduct[] }) => {
  return (
    <section id="all-products" className=" max-w-7xl mx-auto my-10 px-4 scroll-mt-55 md:scroll-mt-50 lg:scroll-mt-38">
        <h3 className="text-xl font-bold">সব পণ্য ({products.length})</h3>

      <SortingProducts products={products}></SortingProducts>

    </section>
  );
};

export default AllProducts;
