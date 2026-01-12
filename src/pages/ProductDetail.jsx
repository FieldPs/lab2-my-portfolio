import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/product";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((product) => product.id === parseInt(id));

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="text-center p-8 bg-white/50 backdrop-blur-md rounded-2xl border border-gray-100 shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Product Not Found
          </h2>
          <p className="text-gray-500 mb-6">
            The product you are looking for does not exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
          >
            Return to Catalog
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 animate-fade-in-up">
      <button
        onClick={() => navigate(-1)}
        className="group mb-8 flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-black transition-colors"
      >
        <span className="p-1 rounded-full bg-gray-100 group-hover:bg-gray-200 transition-colors">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </span>
        Back to Catalog
      </button>

      <div className="bg-white rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-6">
              <div>
                <span className="px-4 py-1.5 bg-gray-900 text-white rounded-full text-xs font-semibold uppercase tracking-wider mb-4 inline-block shadow-lg shadow-gray-900/20">
                  {product.category}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mt-2 mb-4">
                  {product.name}
                </h1>
                <p className="text-3xl text-blue-600 font-bold tracking-tight">
                  {product.price.toLocaleString()}{" "}
                  <span className="text-lg text-gray-500 font-medium">THB</span>
                </p>
              </div>

              <div className="h-px w-full bg-gray-100" />

              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p>{product.desc}</p>
              </div>

              <div className="pt-6">
                <button className="w-full md:w-auto px-8 py-4 bg-gray-900 hover:bg-black text-white rounded-xl font-semibold shadow-xl shadow-gray-900/10 transform hover:-translate-y-1 transition-all duration-200 flex items-center justify-center gap-2">
                  <span>Add to Cart</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Visual placeholder for product image if we had one, using a nice gradient box for now */}
            <div className="w-full md:w-1/3 aspect-square rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 border border-gray-200 flex items-center justify-center shadow-inner">
              <span className="text-6xl">📦</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
