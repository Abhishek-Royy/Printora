import React from "react";
import { FaShippingFast } from "react-icons/fa";

import Popularity from "../components/Popularity";
import { allProducts } from "../api/Product";

function Home() {
  return (
    <>
      <div className="main w-full h-auto ">
        <h2 className="flex items-center justify-center gap-2 w-full text-white font-semibold bg-[#207BB4] py-4">
          <FaShippingFast className="text-xl" /> FREE SHIPPING on all orders
          above ₹599
        </h2>
        {/* <div className="container">vdfkvh</div> */}

        <div className="product-heading py-2  lg:px-28 flex w-full items-center justify-between">
          <h2 className=" text-xl font-medium  ">Best Selling Products</h2>
          <Popularity />
        </div>

        {/* hero-image */}
        <div className="section-1 w-full lg:h-[50vh] h-auto lg:px-28">
          <img
            className="w-full h-full"
            src="https://hayward.icustomca.com/assets/1-min.jpg"
            alt="hero-banner"
          />
        </div>

        <div className="w-full h-auto lg:px-28">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full items-start justify-center">
            {allProducts.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer bg-cyan-100 p-5 rounded-xl bg-opacity-20"
              >
                <img
                  className="w-full h-[30vh] lg:h-[18vw]  rounded-lg object-cover"
                  src={item.image}
                  alt={item.title}
                />
                <p className="font-bold lg:w-[15vw] mt-2">{item.title}</p>
                <p className="text-[20px] mt-1">{item.price}</p>
                <p className="text-green-500 font-semibold text-[13px]">
                  {item.discount}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
