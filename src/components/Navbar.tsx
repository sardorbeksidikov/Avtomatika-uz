"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white">
      <Link href={"/"}>
        <Image src={"/logo.png"} alt={"logo"} width={80} height={30} />
      </Link>

      <div className="flex items-center space-x-2.5 text-sm">
        <nav className="hidden md:flex md:ml-auto flex-wrap items-center text-base justify-center">
          <Link href={"/"} className="mr-5 hover:text-blue-400 text-white">
            Home
          </Link>
          <Link href={"/about"} className="mr-5 hover:text-blue-400 text-white">
            About
          </Link>
          <Link
            href={"/service"}
            className="mr-5 hover:text-blue-400 text-white">
            Service
          </Link>
          <Link
            href={"/contact"}
            className="mr-5 hover:text-blue-400 text-white">
            Contact
          </Link>
          <Link
            href={"/products"}
            className="mr-5 hover:text-blue-400 text-white">
            All products
          </Link>
        </nav>
        <Link href={"/shopping-cart"}>
          <button className="button mr-3 bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-blue-400">
            My bag
          </button>
        </Link>
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? (
            <IoClose className="h-6 w-6" />
          ) : (
            <GiHamburgerMenu className="h-6 w-6 stroke-cyan-500 md:stroke-cyan-700" />
          )}
        </button>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}>
        <nav className="flex flex-col items-start p-4">
          <Link href={"/"} className="mb-5 text-white hover:text-blue-400">
            Home
          </Link>
          <Link href={"/about"} className="mb-5 text-white hover:text-blue-400">
            About
          </Link>
          <Link
            href={"/service"}
            className="mb-5 text-white hover:text-blue-400">
            Service
          </Link>
          <Link
            href={"/contact"}
            className="mb-5 text-white hover:text-blue-400">
            Contact
          </Link>
          <Link
            href={"/products"}
            className="mb-5 text-white hover:text-blue-400">
            All products
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
