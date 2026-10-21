import { getUnitBn, toBengaliNumber } from "@/lib/utils";
import { BazarDorProduct } from "@/types/bazardor";
import Link from "next/link";

const ProductCard = ({ product }: { product: BazarDorProduct }) => {
  const dir = product.change?.dir;

  return (
    <Link 
        href={`products/${product.slug}`}
        className="group border border-base-300 rounded-2xl  transition duration-200 hover:translate-y-0.5 hover:border-green-300 hover:shadow-2xl"
    >
      <div className="card w-full max-w-md p-4">
        {/* Top Section: Icon & Title */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-orange-50">
            {/* Onion Icon / Image */}
            <span className="text-2xl">{product.image}</span>
          </div>
          <div>
            <h2 className="text-md font-bold text-gray-900 leading-tight group-hover:text-green-700">
              {product.nameBn}
            </h2>
            <p className="text-xs text-gray-500">{getUnitBn(product.unit)}</p>
          </div>
        </div>

        {/* Middle Label */}
        <p className="text-xs text-gray-500 mb-1">আজকের দাম</p>

        {/* Bottom Section: Price & Percentage */}
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xl font-black text-gray-900">
              {toBengaliNumber(product.today)}
            </span>
            <span className="text-sm"> টাকা</span>
          </div>

          <div
            className={`flex items-center gap-1 font-semibold text-sm ${
              dir === "up"
                ? "text-red-700 badge badge-soft badge-error"
                : dir === "down"
                  ? "text-green-700 badge badge-soft badge-accent"
                  : "badge badge-soft badge-primary"
            }`}
          >
            <span className="text-xs">
              {dir === "up" ? "▲" : dir === "down" ? "▼" : "<>"}
            </span>
            <span>
              {toBengaliNumber(Math.abs(product.change.pct).toFixed(1))}%
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
