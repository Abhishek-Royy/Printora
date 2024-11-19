import React, { createContext, useState } from "react";
import { allProducts } from "../api/product"; // Ensure allProducts is an array of products.

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (const product of allProducts) {
    cart[product.id] = 0;
  }
  return cart;
};

const ShopContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());

  const addToCart = (productId) => {
    setCartItems((prev) => ({
      ...prev,
      [productId]: prev[productId] + 1,
    }));
  };

  const removeFromCart = (productId) => {
    if (cartItems[productId] > 0) {
      setCartItems((prev) => ({
        ...prev,
        [productId]: prev[productId] - 1,
      }));
    }
  };

  const contextValue = {
    allProducts,
    cartItems,
    addToCart,
    removeFromCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
