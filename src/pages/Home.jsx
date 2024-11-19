// import React, { useContext } from "react";
// import { FaShippingFast } from "react-icons/fa";
// import { ShopContext } from "../context/Context";

// import Popularity from "../components/Popularity";

// import { allProducts } from "../api/Product";

// function Home() {

//   const { allProducts } = useContext(ShopContext);
//   return (
//     <>
//       <div className="main w-full h-auto ">
//         <h2 className="flex items-center justify-center gap-2 w-full text-white font-semibold bg-[#207BB4] py-4">
//           <FaShippingFast className="text-xl" /> FREE SHIPPING on all orders
//           above ₹599
//         </h2>
//         {/* <div className="container">vdfkvh</div> */}

//         <div className="product-heading py-2  lg:px-28 flex w-full items-center justify-between">
//           <h2 className=" text-xl font-medium  ">Best Selling Products</h2>
//           <Popularity />
//         </div>

//         {/* hero-image */}
//         <div className="section-1 w-full lg:h-[50vh] h-auto lg:px-28">
//           <img
//             className="w-full h-full"
//             src="https://hayward.icustomca.com/assets/1-min.jpg"
//             alt="hero-banner"
//           />
//         </div>

//         <div className="w-full h-auto lg:px-28">
//           <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full items-start justify-center">
//             {allProducts.map((item) => (
//               <li
//                 key={item.id}
//                 className="cursor-pointer bg-cyan-100 p-5 rounded-xl bg-opacity-20"
//               >
//                 <img
//                   className="w-full h-[30vh] lg:h-[18vw]  rounded-lg object-cover"
//                   src={item.image}
//                   alt={item.title}
//                 />
//                 <p className="font-bold lg:w-[15vw] mt-2">{item.title}</p>
//                 <p className="text-[20px] mt-1">{item.price}</p>
//                 <p className="text-green-500 font-semibold text-[13px]">
//                   {item.discount}
//                 </p>
//               </li>
//             ))}
//           </ul>
//         </div>

//       </div>
//     </>
//   );
// }

// export default Home;

// **********BALER CODE WARA*****************************

import React, { useContext } from "react";
import { FaShippingFast } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ShopContext } from "../context/Context";

import Popularity from "../components/Popularity";

function Home() {
  const { allProducts } = useContext(ShopContext);

  return (
    <>
      <div className="main w-full h-auto">
        <h2 className="flex items-center justify-center gap-2 w-full text-white font-semibold bg-[#434343] py-4">
          <FaShippingFast className="text-xl" /> FREE SHIPPING on all orders
          above ₹599
        </h2>

        <div className="product-heading py-2 lg:px-28 flex w-full items-center justify-between">
          <h2 className="text-xl font-medium">Best Selling Products</h2>
          <Popularity />
        </div>

        {/* Hero Image */}
        <div className="section-1 w-full lg:h-[60vh] h-auto lg:px-28">
          <img
            className="w-full h-full"
            src="https://theoutfitzstore.com/wp-content/uploads/2024/08/banner-tem.png"
            alt="hero-banner"
          />
        </div>

        {/* ************************************************************ */}

        <div className="section-2 w-[95%] mx-auto lg:w-full h-auto lg:px-28 mt-10">
          <div className="part-1 w-full h-auto lg:h-[80vh] lg:flex">
            <div className="p1-left lg:w-1/2 h-full flex flex-col lg:item-center items-start justify-center">
              <h2 className="lg:text-3xl text-2xl uppercase font-bold lg:w-[90%] text-center italic">
                "Streetwear isn’t just about what you wear; it’s about the vibe
                you bring to the world."
              </h2>
              <p className="text-base lg:text-lg lg:w-[90%] mt-5 text-center">
                Our Graphic Tees, made from 100% pure cotton for the ultimate in
                comfort and durability. These shirts features a cool, standout
                print that’s designed to turn heads.
              </p>
            </div>
            <div className="p1-right lg:w-1/2 h-full">
              <img
                className="w-full h-full object-cover "
                src="https://theoutfitzstore.com/wp-content/uploads/2024/08/new-insta-post-sdfasfd.png"
                alt=""
              />
            </div>
          </div>

          {/* ++++++++++++++++++++ */}
          <div className="part-2 mt-8  lg:mt-0 lg:w-full h-auto lg:h-[80vh] lg:flex">
            <div className="p2-left lg:w-1/2 h-full">
              <img
                className="w-full h-full object-cover "
                src="https://theoutfitzstore.com/wp-content/uploads/2024/08/new-insta-post-3e23e2.png"
                alt=""
              />
            </div>
            <div className="p2-right lg:w-1/2 h-full flex flex-col items-center lg:items-end justify-center">
              <h2 className="lg:text-3xl text-2xl uppercase font-bold lg:w-[90%] text-center italic">
                "Streetwear is more than clothing; it's a statement of who you
                are."
              </h2>
              <p className="text-base lg:text-lg lg:w-[90%] mt-5 text-center">
                Our oversized tee – a drop shoulder design that blends comfort
                with creativity. Each piece features funky, eye-catching prints,
                crafted with meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>

        {/* ********************************************* */}
        <div className="section-3 w-[95%] mx-auto lg:w-full lg:h-[70vh] gap-5 mt-10 h-auto lg:px-28 lg:flex">
          <div className="left lg:mb-0 mb-8  lg:w-1/2 h-full">
            <img
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
              src="https://theoutfitzstore.com/wp-content/uploads/2024/09/new-insta-post-2.png"
              alt=""
            />
          </div>
          <div className="right  lg:w-1/2 h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out">
            <img
              className="w-full h-full"
              src="https://theoutfitzstore.com/wp-content/uploads/2024/09/new-insta-post.png"
              alt=""
            />
          </div>
        </div>

        {/* ********************************************* */}
        <div className=" border-b-4 my-16"></div>
        {/* ************************************************************ */}

        {/* Product List */}
        <div className="w-full h-auto lg:px-28">
          <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-5 w-full items-start justify-center">
            {allProducts.map((item) => (
              <li
                key={item.id}
                className="cursor-pointer bg-gray-300 p-5 rounded-xl bg-opacity-20"
              >
                <Link to={`/product/${item.id}`}>
                  <img
                    className="w-full h-[30vh] lg:h-[18vw] rounded-lg object-cover"
                    src={item.image}
                    alt={item.title}
                  />
                  <p className="font-bold lg:w-[15vw] mt-2">{item.title}</p>
                  <p className="text-[20px] mt-1">{item.price}</p>
                  <p className="text-green-500 font-semibold text-[13px]">
                    {item.discount}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Home;
