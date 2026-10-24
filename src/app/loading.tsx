// app/loading.tsx
export default function Loading() {
  return (
    <div className="container mx-auto px-4 py-6">
      {/* Page title skeleton */}
      <div className="mb-6 h-8 w-1/3 animate-pulse rounded bg-gray-200" />

      {/* Product grid skeleton */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-lg border border-gray-200 bg-white p-4"
          >
            {/* Image */}
            <div className="mb-4 h-40 w-full rounded bg-gray-200" />
            {/* Title */}
            <div className="mb-2 h-5 w-3/4 rounded bg-gray-200" />
            {/* Price + change */}
            <div className="flex justify-between">
              <div className="h-5 w-20 rounded bg-gray-200" />
              <div className="h-5 w-12 rounded bg-gray-200" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}