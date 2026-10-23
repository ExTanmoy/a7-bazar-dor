import { BazarDorProduct } from "@/types/bazardor"; 
import ProductCard from "../UI/ProductCard";

type PriceRisersProps = {
  products: BazarDorProduct[];
};

const PriceRisers = ({ products }: PriceRisersProps) => {
  const risers = products
    .filter((p) => p.change.dir === "up")
    .sort((a, b) => b.change.pct - a.change.pct) 
    .slice(0, 6);

  return (
    <section className=" max-w-7xl mx-auto my-10 px-4">
      <div className="flex items-center gap-2 mb-4 text-xl font-bold">
        <span className="text-red-700">▲</span>
        <h2>আজ দাম বেড়েছে ({risers.length})</h2>
      </div>

      {/* ProductCard grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {
            risers.map((product : BazarDorProduct) => (
                <ProductCard key={product.id} product={product}></ProductCard>
            ))
        }
      </div>
    </section>
  );
};

export default PriceRisers;
