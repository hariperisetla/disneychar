import React from "react";
import Link from "next/link";
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdLastPage,
  MdOutlineFirstPage,
} from "react-icons/md";

const Pagination = ({
  next,
  prev,
  current,
  total,
  handleSinglePage,
  handleFirstPage,
  handlePreviousPage,
  handleNextPage,
  handleLastPage,
}) => {
  return (
    <div className="flex items-center justify-center pb-12">
      <Link href={"/"}>
        <a className="flex items-center p-3 border border-slate-700 rounded-l-xl hover:bg-slate-700">
          <MdOutlineFirstPage size={24} />
        </a>
      </Link>
      <button
        onClick={prev === 0 ? undefined : handlePreviousPage}
        className="flex items-center p-3 border border-slate-700 hover:bg-slate-700"
      >
        <MdNavigateBefore size={24} />
      </button>
      <button className="bg-slate-700 p-3 border border-slate-700 hover:bg-slate-700">
        {current.toString()}
      </button>
      <a className="p-3 border border-slate-700">...</a>
      <button
        onClick={handleLastPage}
        className="p-3 border border-slate-700 hover:bg-slate-700"
      >
        {total}
      </button>
      <button
        onClick={handleNextPage}
        className="flex items-center p-3 border border-slate-700 hover:bg-slate-700"
      >
        <MdNavigateNext size={24} />
      </button>
      <Link href={"/page/" + total.toString()}>
        <a className="flex items-center p-3 border border-slate-700 rounded-r-xl hover:bg-slate-700">
          <MdLastPage size={24} />
        </a>
      </Link>
    </div>
  );
};

export default Pagination;
