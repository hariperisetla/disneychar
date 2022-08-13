import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../layouts/Header";
import Link from "next/link";
import { useState, useEffect } from "react";
import CharGallery from "../components/CharGallery";
import Pagination from "../components/Pagination";

export const getServerSideProps = async () => {
  const res = await fetch("https://api.disneyapi.dev/characters?page=1");
  const data = await res.json();
  return {
    props: { disney: data },
  };
};

export default function Home({ disney }) {
  const page = 1;

  return (
    <div>
      <Head>
        <title>Disney Char</title>

        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="Disney Char"
          content="A simple Disney Character Information site made using Disney API"
        />
        <link rel="icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />

        <link rel="manifest" href="/favicon/site.webmanifest" />

        <meta
          property="og:title"
          content="Disney Char - A simple Disney Character Information site"
        />
        <meta
          property="og:description"
          content="Disney Char is a simple Disney Character Information site made using Disney API"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://disneychar.netlify.app/" />
        <meta property="og:image" itemProp="image" content="" />

        <meta property="og:image:type" content="image/jpeg" />
        {/* Size of image. Any size up to 300. Anything above 300px will not work in WhatsApp  */}
        <meta property="og:image:width" content="300" />
        <meta property="og:image:height" content="300" />

        {/* Website to visit when clicked in fb or WhatsApp */}
        <meta
          name="keywords"
          content="disney, char, disneychar, character, characters, disney character, disney characters, hari, hari perisetla, perisetla"
        />
        <meta name="author" content="Hari Perisetla" />
      </Head>

      <div className="bg-gray-900 text-white">
        {/* <div className="flex items-center py-6 justify-center">
          <input
            type="text"
            className="block form-control w-96 border border-slate-700 focus:text-white focus:bg-slate-800 focus:border-slate-600 focus:outline-none rounded-lg bg-slate-900 p-2"
            placeholder="Search..."
          />
          <button className="m-2 bg-slate-700 py-2 px-5 rounded-lg border border-slate-700 hover:bg-slate-800 hover:border-slate-700 focus:bg-slate-800">
            Search
          </button>
        </div> */}
        <div className="grid gap-3 mb-8 grid-cols-2 md:grid-cols-6 xl:grid-cols-8 relative pt-5 container mx-auto">
          {disney.data.map((chars) => (
            <CharGallery key={chars._id} chars={chars} />
          ))}
        </div>
        <Pagination
          next={Number(page) + Number(1)}
          prev={Number(page) - Number(1)}
          current={page}
          total={disney.totalPages}
        />
      </div>
    </div>
  );
}
