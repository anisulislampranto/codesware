import React from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center">
      <div className="logo mx-5">
        <Image src={Logo} alt="logo" width={200} height={50} />
      </div>
      <div className="nav">
        <ul className="flex items-center space-x-5 font-bold">
          <Link href={"/"}>
            <li>T-shirt</li>
          </Link>
          <Link href={"/"}>
            <li>Hoodie</li>
          </Link>
          <Link href={"/"}>
            <li>Mugs</li>
          </Link>
          <Link href={"/"}>
            <li>Stickers</li>
          </Link>
        </ul>
      </div>
      <div className="cart absolute right-0 mx-5">
        <AiOutlineShoppingCart className="text-xl md:text-3xl" />
      </div>
    </div>
  );
};

export default Navbar;
