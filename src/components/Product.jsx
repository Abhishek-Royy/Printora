import React, { useContext } from "react";
import { ShopContext } from "../context/Context";
import { useParams } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa6";

function Product() {
  const { allProducts, addToCart } = useContext(ShopContext);
  const { productId } = useParams();
  // const navigate = useNavigate();

  const product = allProducts.find((item) => item.id === Number(productId));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-green-300 to-cyan-100">
        <p className="text-2xl font-semibold text-red-500">
          Product not found!
        </p>
      </div>
    );
  }

  return (
    <div className="product-details min-h-screen ">
      <div className="container mx-auto py-10 lg:py-20 px-5 lg:px-28">
        {/* Responsive Grid Container */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
          {/* Product Image */}
          <div className="product-image flex justify-center">
            <img
              className="rounded-xl object-cover w-full max-w-md shadow-md"
              src={product.image}
              alt={product.title}
            />
          </div>

          {/* Product Details */}
          <div className="product-data space-y-5">
            <h1 className="text-3xl lg:text-4xl font-bold text-green-900 leading-snug">
              {product.title}
            </h1>
            <p className="text-lg text-gray-700">
              Category:{" "}
              <span className="font-semibold text-gray-900">
                {product.category}
              </span>
            </p>
            <p className="text-2xl font-bold text-green-800">
              Price: <span className="text-green-600">${product.price}</span>
            </p>
            <p className="text-lg font-medium text-red-600">
              Discount: <span className="font-bold">{product.discount}</span>
            </p>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStarHalfAlt />
              <FaRegStar />
            </div>

            {/* Size Selector */}
            <div>
              <label
                htmlFor="size"
                className="block text-lg font-medium text-gray-800 mb-2"
              >
                Select Size
              </label>
              <select
                name="size"
                id="size"
                className="w-full max-w-xs p-3 bg-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
                aria-label="Select size"
              >
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => {
                  addToCart(product.id);
                }}
                className="bg-yellow-400 px-6 py-3 rounded-full hover:bg-yellow-500 transition-all"
                aria-label="Add to Cart"
              >
                Add to cart
              </button>
              <button
                className="bg-green-500 px-6 py-3 rounded-full text-white hover:bg-green-600 transition-all"
                aria-label="Buy Now"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
