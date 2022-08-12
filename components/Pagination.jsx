import React from "react";
import Link from "next/link";

const Pagination = ({ next, prev, current, total }) => {
  return (
    <div className="flex items-center justify-center pb-12">
      <Link
        href={prev.toString() === "0" ? "/" : prev.toString()}
        aria-disabled
      >
        {/* {disney.previousPage === "undefined" ? disney.previousPage : ""} */}
        <a className="p-3 border border-slate-700 rounded-l-xl hover:bg-slate-700 focus:bg-slate-700">
          Previous
        </a>
      </Link>
      <Link href={current.toString()} className="active">
        <a className="active active:bg-slate-700 p-3 border border-slate-700 hover:bg-slate-700 focus:bg-slate-700">
          {current.toString()}
        </a>
      </Link>
      {/* <a className="p-3 border border-slate-700">...</a> */}
      {/* <Link href="">
        <a className="p-3 border border-slate-700 hover:bg-slate-700 focus:bg-slate-700">
          {total}
        </a>
      </Link> */}
      <Link href={next.toString()}>
        <a className="p-3 border border-slate-700 rounded-r-xl hover:bg-slate-700 focus:bg-slate-700">
          Next
        </a>
      </Link>
    </div>
  );
};

export default Pagination;
