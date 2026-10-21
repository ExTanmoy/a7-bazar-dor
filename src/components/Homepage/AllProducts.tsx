import { BazarDorProduct } from "@/types/bazardor";
import ProductCard from "../UI/ProductCard";

const AllProducts = ({products} : {products : BazarDorProduct[]}) => {
    return (
        <section className=" max-w-7xl mx-auto">
      <div className="flex gap-2">
        <span className="text-red-600"></span>
        <h2 className="text-xl font-bold">সব পণ্য</h2>
        ({products.length})
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {
            products.map((product : BazarDorProduct) => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))
        }
      </div>
    </section>
    );
};

export default AllProducts;