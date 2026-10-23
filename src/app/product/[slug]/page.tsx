
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug } from "@/lib/api";
import { getUnitBn } from "@/lib/utils";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

const ProductDetailsPage = async ({params}: ProductPageProps) => {
  const { slug } = await params;

  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  // 1. Grouping Market by Division
  const marketsByDivision = product.markets.reduce(
    (acc, market) => {
      if (!acc[market.division]) {
        acc[market.division] = [];
      }

      acc[market.division].push(market);
      return acc;
    },
    {} as Record<string, typeof product.markets>
  );

  // 2. Price statistics calculate 
  const allMins = product.markets.map((market) => market.min);
  const allMaxs = product.markets.map((market) => market.max);

  const minPrice =
    allMins.length > 0 ? Math.min(...allMins) : 0;

  const maxPrice =
    allMaxs.length > 0 ? Math.max(...allMaxs) : 0;

  const avgPrice = (maxPrice + minPrice) / 2
    

  const formatPrice = (price: number) =>
    `${price.toLocaleString("bn-BD")} টাকা`;

  const changeColor =
    product.change.dir === "up"
      ? "badge-error"
      : product.change.dir === "down"
        ? "badge-success"
        : "badge-ghost";

  const changeSymbol =
    product.change.dir === "up"
      ? "▲"
      : product.change.dir === "down"
        ? "▼"
        : "—";

  const priceStatus = 
    product.change.dir === "up"
      ? `বেড়েছে ${formatPrice(product.today - product.yesterday)}`
      : product.change.dir === "down"
        ? `কমেছে ${product.yesterday - product.today}`
        : "অপরিবর্তিত আছে";   

  const historicalPrices = [
    {
      label: "আজকের দাম",
      price: product.today,
      description: "বর্তমান বাজারদর",
      highlight: true,
    },
    {
      label: "গতকালের দাম",
      price: product.yesterday,
      description: "এক দিন আগে",
      highlight: false,
    },
    {
      label: "গত সপ্তাহের দাম",
      price: product.lastWeek,
      description: "এক সপ্তাহ আগে",
      highlight: false,
    },
    {
      label: "গত মাসের দাম",
      price: product.lastMonth,
      description: "এক মাস আগে",
      highlight: false,
    },
  ];

  return (
    <main className="min-h-screen bg-[#f0f5f0] px-4 py-6 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* 1. Breadcrumb */}
        <div className="breadcrumbs mb-5 text-xs text-gray-600">
          <ul>
            <li>
              <Link href="/">হোম</Link>
            </li>
            <li>
              <Link href={`/category/${product.category}`}>
                {product.categoryNameBn}
              </Link>
            </li>
            <li className="font-medium text-gray-800">
              {product.nameBn}
            </li>
          </ul>
        </div>

        {/* 2. Product Summary Card */}
        <section className="mb-4 rounded-2xl border border-gray-200 bg-white p-4 md:p-5">
          <div className="flex items-center gap-4">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-[#f0f5f0]">
              
                <span className="text-5xl">
                  {product.categoryIcon}
                </span>
              
            </div>

            <div className="min-w-0 flex-1">
              <h1 className="text-xl font-bold text-gray-900 md:text-2xl">
                {product.nameBn}
              </h1>

              <div className="mt-1 flex flex-wrap items-center gap-2 text-xs text-gray-500">
                <span>{product.categoryNameBn}</span>
                <span>·</span>
                <span>{getUnitBn(product.unit)}</span>
              </div>

              <div className="mt-2">
                
                <span className="text-xs font-semibold text-gray-500">
                  গত কালের তুলনায় আজ দাম {priceStatus}
                </span>
              </div>
            </div>
            
            {/* Large device */}
            <div className="hidden shrink-0 rounded-xl bg-[#f0f5f0] px-4 py-3 text-center space-y-1 sm:block">
              <p className="text-xs text-gray-500">আজকের দাম</p>
              <p className="text-2xl font-bold text-gray-900">
                {product.today.toLocaleString("bn-BD")}
              </p>
              <p className="text-xs text-gray-500">
                টাকা / {getUnitBn(product.unit)}
              </p>
              <span className={`badge badge-sm ${changeColor}`}>
                  {changeSymbol} {Math.abs(product.change.pct).toLocaleString("bn-BD")}% 
                </span>
            </div>
          </div>

            {/* Mobile Device */}
          <div className="mt-4 rounded-lg bg-[#f0f5f0] p-3 space-y-1 sm:hidden">
            <p className="text-xs text-gray-500">আজকের দাম</p>
            <p className="text-xl font-bold text-gray-900">
              {formatPrice(product.today)}
            </p>

            <p className="text-xs text-gray-500">
                টাকা / {getUnitBn(product.unit)}
              </p>
              <span className={`badge badge-sm ${changeColor}`}>
                  {changeSymbol} {Math.abs(product.change.pct).toLocaleString("bn-BD")}% 
                </span>
          </div>
        </section>

        {/* 3. Price Statistics - 4 Cards */}
        <section className="mb-4 rounded-2xl border border-gray-200 bg-white p-4 md:p-5">
          <h2 className="mb-4 text-sm font-semibold text-gray-800">
            দামের সারসংক্ষেপ
          </h2>

          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            <div className="rounded-xl border border-gray-200 bg-white p-3">
              <p className="text-xs text-gray-500">সর্বনিম্ন দাম</p>
              <p className="mt-1 text-lg font-bold text-green-600">
                {minPrice.toLocaleString("bn-BD")}
              </p>
              <p className="text-xs text-gray-500">টাকা</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-3">
              <p className="text-xs text-gray-500">সর্বোচ্চ দাম</p>
              <p className="mt-1 text-lg font-bold text-red-500">
                {maxPrice.toLocaleString("bn-BD")}
              </p>
              <p className="text-xs text-gray-500">টাকা</p>
            </div>

            <div className="rounded-xl border border-gray-200 bg-white p-3">
              <p className="text-xs text-gray-500">গড় দাম</p>
              <p className="mt-1 text-lg font-bold text-gray-900">
                {avgPrice.toLocaleString("bn-BD")}
              </p>
              <p className="text-xs text-gray-500">টাকা</p>
            </div>

            
          </div>
        </section>

        {/* 4. Division-wise Market Table */}
        <section className="mb-4 rounded-2xl border border-gray-200 bg-white p-4 md:p-5">
          <h2 className="mb-4 text-sm font-semibold text-gray-800">
            বাজারভিত্তিক আজকের দাম
          </h2>

          {product.markets.length > 0 ? (
            <div className="overflow-x-auto rounded-lg border border-gray-200">
              <table className="table table-zebra table-sm w-full">
                <thead>
                  <tr className="bg-gray-50 text-gray-600">
                    <th>বাজার</th>
                    <th>বিভাগ</th>
                    <th className="text-right">সর্বনিম্ন</th>
                    <th className="text-right">সর্বোচ্চ</th>
                    <th className="text-right">গড়</th>
                  </tr>
                </thead>

                {Object.entries(marketsByDivision).map(
                  ([division, markets]) => (
                    <tbody key={division}>
                      <tr className="bg-[#eaf1eb]">
                        <td
                          colSpan={5}
                          className="font-semibold text-gray-800"
                        >
                          {division}
                        </td>
                      </tr>

                      {markets.map((market, index) => (
                        <tr key={`${division}-${market.market}-${index}`}>
                          <td className="font-medium text-gray-800">
                            {market.market}
                          </td>
                          <td className="text-gray-600">
                            {market.division}
                          </td>
                          <td className="text-right">
                            {formatPrice(market.min)}
                          </td>
                          <td className="text-right">
                            {formatPrice(market.max)}
                          </td>
                          <td className="text-right font-medium">
                            {formatPrice((market.max + market.min) / 2)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  )
                )}
              </table>
            </div>
          ) : (
            <p className="rounded-lg bg-gray-50 p-5 text-center text-sm text-gray-500">
              এই পণ্যের বাজারভিত্তিক তথ্য পাওয়া যায়নি।
            </p>
          )}
        </section>

        {/* 5. Historical Comparison */}
        <section className="rounded-2xl border border-gray-200 bg-white p-4 md:p-5">
          <h2 className="mb-4 text-sm font-semibold text-gray-800">
            বিভিন্ন সময়ের দামের তুলনা
          </h2>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {historicalPrices.map((item) => (
              <div
                key={item.label}
                className={`rounded-xl border p-4 ${
                  item.highlight
                    ? "border-green-200 bg-green-50"
                    : "border-gray-200 bg-white"
                }`}
              >
                <p className="text-sm text-gray-600">{item.label}</p>
                <p
                  className={`mt-2 text-xl font-bold ${
                    item.highlight ? "text-green-700" : "text-gray-900"
                  }`}
                >
                  {formatPrice(item.price)}
                </p>
                <p className="mt-1 text-xs text-gray-500">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
export default ProductDetailsPage;