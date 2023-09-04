import React from "react";
import Link from "next/link";

const Pagination = ({ next, prev, current, total }) => {
  const totalPages = parseInt(total);
  const currentPage = parseInt(current);

  // Determine how many page numbers to show before and after the current page
  const pagesToShow = 2; // You can adjust this number based on your preference

  // Calculate the range of page numbers to show
  const startPage = Math.max(1, currentPage - pagesToShow);
  const endPage = Math.min(totalPages, currentPage + pagesToShow);

  const pageNumbers = [];
  for (let i = startPage; i <= endPage; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="flex items-center justify-center pb-28">
      <Link
        href={prev.toString() === "0" ? "/" : `/page/${prev}`}
        aria-disabled={prev.toString() === "0"}
      >
        <a className="p-3 border border-slate-700 rounded-l-xl hover:bg-slate-700 focus:bg-slate-700">
          Previous
        </a>
      </Link>
      {pageNumbers.map((pageNumber) => (
        <Link key={pageNumber} href={`/page/${pageNumber}`}>
          <a
            className={`p-3 border border-slate-700 ${
              pageNumber === currentPage
                ? "bg-slate-700 text-white"
                : "hover:bg-slate-700 focus:bg-slate-700"
            }`}
          >
            {pageNumber}
          </a>
        </Link>
      ))}
      <Link href={`/page/${next.toString()}`}>
        <a className="p-3 border border-slate-700 rounded-r-xl hover:bg-slate-700 focus:bg-slate-700">
          Next
        </a>
      </Link>
    </div>
  );
};

export default Pagination;
