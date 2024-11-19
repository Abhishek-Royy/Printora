import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { RiAccountCircleFill } from "react-icons/ri";
import { FaCartPlus } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, route: "/login" ,icon:<RiAccountCircleFill />},
    { id: 2, route: "/cart", icon: <FaCartPlus /> },
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
        <h2 className="font-bold text-2xl text-[#242424]">PRINTORA</h2>
      </Link>

      <div className="hidden md:flex items-center gap-5">
        <NavLink to="/oversize-tees" className="flex items-center text-lg">
          OverSize Tees
        </NavLink>
        <NavLink to="/graphics-tees" className="flex items-center text-lg">
          Graphics Tees
        </NavLink>
        <NavLink to="/custom-tees" className="flex items-center text-lg">
          Custom Tees
        </NavLink>
      </div>

      {/* Desktop Navigation */}
      <ul className="flex items-center">
        {navItems.map((item) => (
          <li
            key={item.id}
            className={`lg:p-4 rounded-xl font-medium lg:m-2 cursor-pointer duration-300 `}
          >
            <NavLink to={item.route} className="flex items-center text-lg">
              {item.text}
              {item.icon && <span className="ml-2 text-3xl">{item.icon}</span>}
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
        } fixed md:hidden left-0 top-20 w-[100%] h-full bg-white shadow-lg rounded-lg`}
      >
        <li className="p-6 text-center space-y-4">
          <NavLink
            onClick={() => {
              setNav(false);
            }}
            to="/oversize-tees"
            className="block text-3xl font-normal text-black  rounded-xl py-7 "
          >
            OverSize Tees
          </NavLink>
          <NavLink
            onClick={() => {
              setNav(false);
            }}
            to="/graphics-tees"
            className="block text-3xl font-normal text-black  rounded-xl py-7 "
          >
            Graphics Tees
          </NavLink>
          <NavLink
            onClick={() => {
              setNav(false);
            }}
            to="/custom-tees"
            className="block text-3xl font-normal text-black  rounded-xl py-7 "
          >
            Custom Tees
          </NavLink>
        </li>
      </motion.ul>
    </div>
  );
};

export default Navbar;
