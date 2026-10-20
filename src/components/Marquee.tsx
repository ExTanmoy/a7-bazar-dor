import { getProducts } from "@/lib/api";
import { formatPrice, getUnitBn, toBengaliNumber } from "@/lib/utils";
import { BazarDorProduct } from "@/types/bazardor";
import MarqueeText from "react-marquee-text";
import 'react-marquee-text/dist/styles.css'

const Marquee = async () => {
  const products: BazarDorProduct[] = await getProducts();
  return (
    <div className="border-b border-slate-200">
        <MarqueeText direction="right" duration={20} pauseOnHover>

      <div>
        {products.map((scroller: BazarDorProduct) => (
          <span key={scroller.id} className="mx-3 inline-flex gap-2 text-xs py-2">
            <span>{scroller.categoryIcon}</span>
            <span className="font-bold">{scroller.nameBn}</span>
            <span className="text-gray-500">
              {formatPrice(scroller.today)} টাকা/{getUnitBn(scroller.unit)}
            </span>

            <span
              className={`font-semibold ${
                scroller.change.pct > 0
                  ? "text-green-700"
                  : scroller.change.pct < 0
                    ? "text-red-700"
                    : ""
              }`}
            >
              {scroller.change.pct > 0
                ? "▲ "
                : scroller.change.pct < 0
                  ? "▼ "
                  : ""}
              {toBengaliNumber(Math.abs(scroller.change.pct))}%
            </span>
          </span>
        ))}
      </div>

    </MarqueeText>
    </div>
    
  );
};

export default Marquee;
