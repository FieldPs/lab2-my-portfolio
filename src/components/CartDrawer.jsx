import React from "react";
import useCartStore from "../store/useCartStore";

const CartDrawer = ({ isOpen, onClose }) => {
  const { cart, increaseQuantity, decreaseQuantity, removeFromCart } =
    useCartStore();

  // Handle unmounting animation delay if needed, but for simple CSS transitions
  // keeping it mounted or using a simple state check for 'hidden' after animation helps.
  // For this implementation, we will keep it mounted but hide with pointer-events.

  const subtotal = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const vat = subtotal * 0.07;
  const shipping = cart.length > 0 ? 100 : 0;
  const total = subtotal + vat + shipping;

  return (
    <div
      className={`fixed inset-0 z-50 flex justify-end transition-visibility duration-300 ${
        isOpen ? "visible pointer-events-auto" : "invisible pointer-events-none"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`relative w-full max-w-md bg-white h-full shadow-2xl p-6 flex flex-col transform transition-transform duration-300 bg-white/90 backdrop-blur-md border-l border-white/20 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Your Cart
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
          >
            <svg
              className="w-6 h-6 text-gray-500 group-hover:text-red-500 transition-colors"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
          {cart.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-2/3 text-gray-400 space-y-4">
              <span className="text-6xl">🛒</span>
              <p className="text-xl font-medium">Your cart is empty</p>
              <p className="text-sm">Start adding some items!</p>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-4 bg-white/60 rounded-2xl border border-gray-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center text-2xl border border-gray-100">
                  📦
                </div>

                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <h3 className="font-semibold text-gray-800 line-clamp-1">
                      {item.name}
                    </h3>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                        />
                      </svg>
                    </button>
                  </div>

                  <div className="flex justify-between items-end">
                    <p className="text-blue-600 font-bold">
                      {item.price.toLocaleString()} THB
                    </p>

                    <div className="flex items-center gap-3 bg-gray-50 px-2 py-1 rounded-lg border border-gray-200">
                      <button
                        onClick={() => decreaseQuantity(item.id)}
                        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-blue-600 font-bold transition-colors"
                      >
                        -
                      </button>
                      <span className="font-medium w-6 text-center text-gray-800">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => increaseQuantity(item.id)}
                        className="w-6 h-6 flex items-center justify-center text-gray-600 hover:text-blue-600 font-bold transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* SummarySection */}
        {cart.length > 0 && (
          <div className="mt-8 pt-6 border-t border-gray-100 space-y-4 bg-white/50 rounded-2xl p-4">
            <div className="space-y-2">
              <div className="flex justify-between text-gray-500 text-sm">
                <span>Subtotal</span>
                <span className="font-medium text-gray-800">
                  {subtotal.toLocaleString()} THB
                </span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                <span>VAT (7%)</span>
                <span className="font-medium text-gray-800">
                  {vat.toLocaleString(undefined, { maximumFractionDigits: 2 })}{" "}
                  THB
                </span>
              </div>
              <div className="flex justify-between text-gray-500 text-sm">
                <span>Shipping</span>
                <span className="font-medium text-gray-800">
                  {shipping.toLocaleString()} THB
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200">
              <div className="flex justify-between items-end mb-4">
                <span className="text-gray-900 font-bold">Total</span>
                <span className="text-2xl font-extrabold text-blue-600">
                  {total.toLocaleString(undefined, {
                    maximumFractionDigits: 2,
                  })}{" "}
                  <span className="text-sm font-medium text-gray-500">THB</span>
                </span>
              </div>

              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white py-4 rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2">
                <span>Checkout</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartDrawer;
