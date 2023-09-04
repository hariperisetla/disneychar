import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";

export const getServerSideProps = async ({ query }) => {
  const res = await fetch("https://api.disneyapi.dev/character/" + query.id);
  const data = await res.json();
  return {
    props: { chars: data.data },
  };
};

export default function Info({ chars }) {
  const [loading, setLoading] = useState(true);

  const renderList = (items) => {
    if (!items || items.length === 0) {
      return <span className="text-gray-500">N/A</span>;
    }

    return (
      <ul className="space-y-8">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <Head>
        <title>Disney Char - {chars.name}</title>
      </Head>
      <div className="bg-gray-900 text-slate-300 py-20 text-center">
        <div className="mx-auto px-5">
          <h1 className="text-4xl font-semibold my-5 text-center">
            {chars.name}
          </h1>

          <div className=" space-y-8">
            <div className="flex justify-center items-start">
              <Image
                src={chars.imageUrl}
                alt={chars.name}
                title={chars.name}
                width={300}
                height={300}
                onLoadingComplete={() => setLoading(false)}
                className={`object-cover object-center w-full h-96 rounded-2xl shadow-lg ${
                  loading ? "grayscale blur" : "grayscale-0 blue-0"
                }`}
                priority
              />
            </div>

            <div className="grid grid-cols-7 gap-8">
              <div className="space-y-3">
                <h3 className="font-semibold text-2xl">Films:</h3>
                <div>{renderList(chars.films)}</div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-2xl">Short Films:</h3>
                <div>{renderList(chars.shortFilms)}</div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-2xl">TV Shows:</h3>
                <div>{renderList(chars.tvShows)}</div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-2xl">Video Games:</h3>
                <div>{renderList(chars.videoGames)}</div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-2xl">Park Attractions:</h3>

                <div>{renderList(chars.parkAttractions)}</div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-2xl">Allies:</h3>
                <div>{renderList(chars.allies)}</div>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-2xl">Enemies:</h3>
                <div>{renderList(chars.enemies)}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
