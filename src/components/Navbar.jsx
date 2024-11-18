import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { IoSearch } from "react-icons/io5";
import { FaCartPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import {motion} from "framer-motion"

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: "Home", route: "/" },
    { id: 2, text: "About", route: "/about" },
    { id: 3, text: "Login", route: "/login" },
    { id: 4, text: "Cart", route: "/cart", icon: <FaCartPlus /> },
  ];

  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "100%" },
  };


  return (
    <div
      className="bg-[#ffffff] flex justify-between items-center h-20 max-w-full sticky top-0 mx-auto lg:px-28 px-2 text-black z-[9999]"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <Link to="/">
        {/* <img
          className="w-20"
          src="https://printora.pl/wp-content/uploads/2024/10/cropped-printora_logo-2.png"
          alt="Web-logo"
        /> */}
        <h2 className="font-bold text-2xl text-[#207BB4]">PRINTORA</h2>
      </Link>

      {/* Search button */}
      <NavLink to="/search">
        <div className="flex items-center justify-center font-medium hover:text-[#FC811B] cursor-pointer text-lg gap-3">
          <IoSearch />
          <p>Search</p>
        </div>
      </NavLink>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`p-4 rounded-xl font-medium m-2 cursor-pointer duration-300 `}
          >
            <NavLink to={item.route} className="flex items-center text-lg">
              {item.text}
              {item.icon && <span className="ml-2">{item.icon}</span>}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Toggle */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <motion.ul
      initial={false}
      animate={nav ? "open" : "closed"}
      variants={variants}
        className={`${
          nav ? "fixed" : "hidden"
        } fixed md:hidden left-0 top-20 w-[100%] h-full  bg-[white] ease-linear duration-75`}
      >
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-10 text-center border-b flex items-center justify-center rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black text-black cursor-pointer "
          >
            <NavLink
              to={item.route}
              className="flex items-center text-center text-3xl"
              onClick={() => setNav(false)} // Close nav on mobile item click
            >
              {item.text}
              {item.icon && <span className="ml-2">{item.icon}</span>}
            </NavLink>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Navbar;
