import { BazarDorProduct } from "@/types/bazardor";
import ProductCard from "../UI/ProductCard";

const PriceFallers = ({ products }: { products: BazarDorProduct[] }) => {
  const fallers = products
    .filter((p) => p.change.dir === "down")
    .sort((a, b) => b.change.pct - a.change.pct) 
    .slice(0, 6);

  return (
    <section className=" max-w-7xl mx-auto my-6 px-4">
      <div className="flex items-center gap-2 mb-4 text-xl font-bold">
        <span className="text-green-700">▼</span>
        <h2>আজ দাম কমেছে ({fallers.length})</h2>
      </div>
      
      {/* ProductCard Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {
            fallers.map((product : BazarDorProduct) => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))
        }
      </div>
    </section>
  );
};

export default PriceFallers;
