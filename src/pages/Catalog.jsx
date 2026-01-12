import { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/product";

const Catalog = () => {
  const [search, setSearch] = useState("");

  const filteredProducts = products.filter((product) => {
    return product.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-16 space-y-4">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent tracking-tight">
          Discover Excellence
        </h1>
        <p className="text-gray-500 text-lg max-w-2xl mx-auto">
          Explore our curated collection of premium technical accessories
          designed for the modern professional.
        </p>
      </div>

      <div className="relative max-w-xl mx-auto mb-16 group">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <svg
            className="h-5 w-5 text-gray-400 group-focus-within:text-blue-500 transition-colors"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-11 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-lg placeholder-gray-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
          <span className="text-sm text-gray-400 bg-gray-100 px-2 py-1 rounded-md">
            Cmd + K
          </span>
        </div>
      </div>

      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
          <p className="text-gray-500 text-lg">
            No products found matching "{search}"
          </p>
          <button
            onClick={() => setSearch("")}
            className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group bg-white rounded-3xl p-6 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div className="w-full aspect-[4/3] mb-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl flex items-center justify-center group-hover:bg-blue-50/50 transition-colors">
                <span className="text-5xl transform group-hover:scale-110 transition-transform duration-300">
                  📦
                </span>
              </div>

              <div className="space-y-2 w-full">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                  {product.category}
                </span>
                <h2 className="text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h2>
                <div className="flex items-center justify-center gap-2 pt-2">
                  <span className="text-xl font-bold text-gray-900">
                    {product.price.toLocaleString()}
                  </span>
                  <span className="text-sm font-medium text-gray-500">THB</span>
                </div>
              </div>

              <div className="mt-6 w-full pt-6 border-t border-gray-100 flex items-center justify-between text-sm font-medium text-gray-500">
                <span>View Details</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Catalog;
