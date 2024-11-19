
import React, { useContext } from "react";
import { ShopContext } from "../context/Context";
import { Link } from "react-router-dom";

function CartPage() {
  const { cartItems, allProducts, removeFromCart, addToCart } =
    useContext(ShopContext);

  if (Object.keys(cartItems).length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Your Cart is Empty
        </h1>
        <Link
          to="/"
          className="bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-all"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  // Calculate total price
  const totalPrice = allProducts.reduce((total, product) => {
    if (cartItems[product.id]) {
      total += product.price * cartItems[product.id];
    }
    return total;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-300 lg:py-28 py-10 px-5 lg:px-28">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

        {/* Cart Items */}
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Product List */}
          <div className="lg:col-span-2 space-y-5">
            {allProducts.map((product) =>
              cartItems[product.id] ? (
                <div
                  key={product.id}
                  className="flex items-center justify-between bg-white p-5 rounded-lg shadow-md"
                >
                  {/* Product Info */}
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-24 h-24 rounded-lg object-cover"
                    />
                    <div>
                      <h2 className="text-lg font-bold text-gray-800">
                        {product.title}
                      </h2>
                      <p className="text-sm text-gray-600">
                        Price:{" "}
                        <span className="font-semibold">{product.price}</span>
                      </p>
                      <p className="text-sm text-gray-600">
                        <span className="font-semibold">
                          Total Price:{" "}
                          {product.price.slice(1) * cartItems[product.id]}
                        </span>
                      </p>
                    </div>
                  </div>

                  {/* Quantity Control */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => removeFromCart(product.id)}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full hover:bg-gray-300 transition"
                    >
                      -
                    </button>
                    <span className="text-lg font-bold">
                      {cartItems[product.id]}
                    </span>
                    <button
                      onClick={() => addToCart(product.id)}
                      className="bg-gray-200 text-gray-800 px-3 py-1 rounded-full hover:bg-gray-300 transition"
                    >
                      +
                    </button>
                  </div>
                </div>
              ) : null
            )}
          </div>

          {/* Cart Summary */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Order Summary
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between text-gray-700">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-700">
                <span>Tax (10%):</span>
                <span>${(totalPrice * 0.1).toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-800 font-bold">
                <span>Total:</span>
                <span>${(totalPrice * 1.1).toFixed(2)}</span>
              </div>
            </div>
            <button className="mt-6 bg-green-500 w-full py-3 rounded-full text-white font-semibold hover:bg-green-600 transition">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
