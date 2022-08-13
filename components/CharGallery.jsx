import React from "react";
import Link from "next/link";

const CharGallery = (props) => {
  return (
    <Link key={props.chars._id} href={"/characters/" + props.chars._id}>
      <a className="group relative text-white cursor-pointer border border-transparent rounded-lg">
        <div className="group-hover:rounded-lg rounded-lg z-10 opacity-0 border-white group-hover:bg-gray-900 group-hover:opacity-80 absolute w-full h-full items-center flex justify-center ease-in-out duration-150"></div>
        <div className="">
          <p className="group-hover:rounded-lg rounded-lg z-20 absolute flex items-center justify-center w-full h-full opacity-0 group-hover:opacity-100">
            {props.chars.name}
          </p>
        </div>
        <div className="overflow-hidden rounded-lg h-full group-hover:rounded-lg">
          <img
            src={props.chars.imageUrl}
            alt={props.chars.name}
            className="block object-cover object-top w-full h-48 rounded-lg bg-white hover:shadow-2xl group-hover:scale-110 group-hover:rounded-lg z-0 ease-in-out duration-150"
            title={props.chars.name}
          />
        </div>
      </a>
    </Link>
  );
};

export default CharGallery;
