import React from "react";
import Link from "next/link";

const CharGallery = (props) => {
  return (
    <Link key={props.chars._id} href={`/characters/${props.chars._id}`}>
      <a className="group relative border border-transparent rounded-lg overflow-hidden hover:shadow-lg">
        <div className="group-hover:bg-gray-900 group-hover:bg-opacity-80 absolute inset-0 flex items-center justify-center transition-opacity duration-150">
          <p className="absolute flex items-center justify-center w-full h-full opacity-0 group-hover:opacity-100 text-white text-center bg-black bg-opacity-50 rounded-lg transition-opacity duration-150">
            {props.chars.name}
          </p>
        </div>
        <img
          src={props.chars.imageUrl}
          alt={props.chars.name}
          className="object-cover object-top w-full h-48 transition-transform duration-150 transform-gpu hover:scale-110"
          title={props.chars.name}
        />
        <p className="absolute bottom-0 left-0 right-0 p-2 text-white bg-black bg-opacity-50">
          {props.chars.name}
        </p>
      </a>
    </Link>
  );
};

export default CharGallery;
