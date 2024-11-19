import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import Cart from "./pages/Cart";
import Signup from "./pages/Login";
import Login from "./pages/Signup";
import Oversize from "./pages/Oversize"
import Graphics from "./pages/Graphics"
import Custom from "./pages/Custom"
import Navbar from "./components/Navbar";

import ProductDetails from "./components/Product"

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/oversize-tees" element={<Oversize />} />
          <Route path="/graphics-tees" element={<Graphics />} />
          <Route path="/custom-tees" element={<Custom />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          


          <Route path="/product" element={<ProductDetails />}>
            <Route path=":productId" element={<ProductDetails />} />
          </Route>

        </Routes>
      </div>
    </>
  );
}

export default App;
