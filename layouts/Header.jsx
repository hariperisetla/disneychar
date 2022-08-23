import React, { useState } from "react";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <React.Fragment>
      <nav className="bg-gray-900 z-50 border-b fixed text-slate-300 border-b-slate-700 p-5 w-full flex justify-between items-center">
        <Link href="/" className="block ">
          <h1 className="cursor-pointer text-3xl text-slate-300 font-bold">
            Disney Chars
          </h1>
        </Link>
        <ul
          className="hidden md:flex
        text-slate-400 ml-auto text-xl space-x-8 cursor-pointer"
        >
          <li className="hover:text-white">
            <Link href="/" className="">
              Home
            </Link>
          </li>
          <li className="hover:text-white">
            <Link href="/about" className="hover:text-white">
              About
            </Link>
          </li>
        </ul>

        <div onClick={handleNav} className="block md:hidden">
          {nav ? (
            <AiOutlineClose className="text-slate-300" size={30} />
          ) : (
            <HiOutlineMenuAlt3 className="text-slate-300" size={30} />
          )}
        </div>

        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-full h-full bg-gray-900 ease-in-out duration-500 z-30"
              : "ease-in-out duration-500 fixed left-[-100%] top-0 w-full h-full bg-gray-900 z-30"
          }
        >
          <div className="flex p-4 justify-between items-center">
            <Link href="/" className="block ">
              <h1 className="cursor-pointer text-3xl text-slate-300 font-bold">
                Disney Chars
              </h1>
            </Link>
            <div onClick={handleNav}>
              <AiOutlineClose className="text-slate-300" size={30} />
            </div>
          </div>
          <li className="hover:text-white p-4 block text-3xl border-b border-b-slate-700">
            <Link href="/" className="">
              <a className="" onClick={handleNav}>
                Home
              </a>
            </Link>
          </li>
          <li className="hover:text-white p-4 block text-3xl">
            <Link href="/about" className="hover:text-white">
              <a className="" onClick={handleNav}>
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </React.Fragment>
  );
};

export default Header;
