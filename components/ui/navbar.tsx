import React from "react";
import { HiOutlineUser } from "react-icons/hi";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-[100px] bg-transparent text-[#FAFAFA] flex fixed top-0 left-0 z-50">
      <div className="flex-grow h-[150px] text-[#000000] pt-[38px] pl-[20px] space-x-20">
        <Link
          href="/home"
          className="w-[48px] h-[24px] font-poppins font-medium text-2xl"
        >
          Home
        </Link>
        <Link
          href="/shop"
          className="w-[48px] h-[24px] font-poppins font-medium text-base"
        >
          Shop
        </Link>
        <Link
          href="/about"
          className="w-[48px] h-[24px] font-poppins font-medium text-base"
        >
          About
        </Link>
        <Link
          href="/contact"
          className="w-[48px] h-[24px] font-poppins font-medium text-base"
        >
          Contact
        </Link>
      </div>
      <div className="flex text-[#000000] h-[28px] space-x-12 pt-9 pr-4">
        <HiOutlineUser className="w-[28px] h-[28px]" />
        <FiSearch className="w-[28px] h-[28px]" />
        <FaRegHeart className="w-[28px] h-[28px]" />
        <AiOutlineShoppingCart className="w-[28px] h-[28px]" />
      </div>
    </div>
  );
};

export default Header;
