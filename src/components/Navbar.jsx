import React, { useState } from "react";
import {
  AiFillTag,
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineSearch,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="max-w-[1640px] mx-auto flex justify-between items-center p-4">
      {/* Left-side */}
      <div className="flex items-center">
        <div onClick={() => setNav(!nav)} className="cursor-pointer">
          <AiOutlineMenu size={30} />
        </div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl px-2">
          Dash n' <span className="font-bold">Dine</span>
        </h1>

        <div className="hidden lg:flex items-center bg-gray-200 rounded-full p-1 text-[14px]">
          <p className="bg-black text-white rounded-full p-2">Delivery</p>
          <p className="p-2">Pickup</p>
        </div>
      </div>
      
      <button className="bg-black text-white rounded-full uppercase hidden md:flex items-center py-2">
        <BsFillCartFill className="mr-2" size={20} />
        Order
      </button>

      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          className="absolute right-4 top-4 cursor-pointer"
          size={20}
        />
        <h2 className="text-2xl p-4">
          Dash n' <span className="font-bold">Dine</span>
        </h2>
        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="flex text-xl py-4">
              <TbTruckDelivery className="mr-4" size={25} />
              Orders
            </li>
            <li className="flex text-xl py-4">
              <MdFavorite className="mr-4" size={25} />
              Favorites
            </li>
            <li className="flex text-xl py-4">
              <FaWallet className="mr-4" size={25} />
              Wallet
            </li>
            <li className="flex text-xl py-4">
              <MdHelp className="mr-4" size={25} />
              Help
            </li>
            <li className="flex text-xl py-4">
              <AiFillTag className="mr-4" size={25} />
              Promotions
            </li>
            <li className="flex text-xl py-4">
              <BsFillSaveFill className="mr-4" size={25} />
              Best Ones
            </li>
            <li className="flex text-xl py-4">
              <FaUserFriends className="mr-4" size={25} />
              Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
