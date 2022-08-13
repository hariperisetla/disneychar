import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <React.Fragment>
      <nav className="bg-gray-900 border-b border-b-slate-700 p-5 flex items-center">
        <div>
          <Link href="/" className="block ">
            <h1 className="cursor-pointer text-3xl text-slate-300 font-bold">
              Disney Chars
            </h1>
          </Link>
        </div>

        <div className="hidden md:flex text-slate-400 ml-auto text-xl space-x-8 cursor-pointer">
          <Link href="/" className="">
            <span className="hover:text-white">Home</span>
          </Link>
          <Link href="/about" className="hover:text-white">
            <span className="hover:text-white">About</span>
          </Link>
          {/* <Link href="contact" className="hover:text-white">
            <span className="hover:text-white">Contact</span>
          </Link> */}
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
