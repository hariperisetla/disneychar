import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../layouts/Header";
import Link from "next/link";
import { useState, useEffect } from "react";
import CharGallery from "../components/CharGallery";
import Pagination from "../components/Pagination";

const endpoint = "https://api.disneyapi.dev/characters/";
const pageEndpoint = "https://api.disneyapi.dev/characters?page=";

export const getServerSideProps = async () => {
  const res = await fetch(endpoint);
  const data = await res.json();
  return {
    props: { disney: data },
  };
};

export default function Home({ disney }) {
  const initialData = disney;
  const [results, setResults] = useState(initialData);

  const [page, updatePage] = useState({
    ...disney,
    current: endpoint,
  });

  const [data, setData] = [];
  const { current } = page;

  useEffect(() => {
    if (current === endpoint) return;

    async function request() {
      const res = await fetch(current);
      const nextData = await res.json();

      setResults(nextData);
      window.scrollTo(0, 0);

      updatePage({
        current,
        ...nextData,
      });

      if (!nextData?.previousPage) {
        // updateResults(nextData.results);
        setResults(nextData);
        setTest(1);
        return;
      }

      // updateResults((prev) => {
      //   console.log(nextData);
      //   return [prev, nextData];
      // });
    }

    request();
  }, [current]);

  function handleLoadMore() {
    updatePage((prev) => {
      return {
        ...prev,
        current: page?.nextPage,
      };
    });
  }

  function handleNextPage() {
    updatePage((prev) => {
      return {
        ...prev,
        current: page?.nextPage,
      };
    });
  }

  function handlePreviousPage() {
    updatePage((prev) => {
      return { ...prev, current: page?.previousPage };
    });
  }

  const currPage = current;

  console.log("currentPage:" + currPage);
  const number =
    currPage.split(pageEndpoint)[1] === undefined
      ? 1
      : currPage.split(pageEndpoint)[1];

  function handleSinglePage(single) {
    updatePage(() => {
      return {
        prev: pageEndpoint + (single - 1),
        current: pageEndpoint + single,
      };
    });
  }

  function handleFirstPage() {
    updatePage(() => {
      return {
        prev: pageEndpoint,
        current: pageEndpoint + 1,
      };
    });
  }

  function handleLastPage() {
    updatePage(() => {
      return {
        prev: pageEndpoint + (results.totalPages - 1).toString(),
        current: pageEndpoint + page?.totalPages,
      };
    });
  }

  return (
    <div>
      <Head>
        <title>Disney Char</title>
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
          {results &&
            results.data.map((chars) => (
              <CharGallery key={chars._id} chars={chars} />
            ))}
        </div>

        {[1, 2, 3].map((page) => (
          <button
            className="block"
            key={page}
            onClick={() => handleSinglePage(page)}
          >
            Got to page {page}
          </button>
        ))}

        {/* <button onClick={handleSinglePage(2)}>Got to page 2</button>
        <button onClick={handleSinglePage(3)}>Got to page 3</button> */}

        <Pagination
          handleSinglePage={handleSinglePage}
          handleFirstPage={handleFirstPage}
          handlePreviousPage={handlePreviousPage}
          handleNextPage={handleNextPage}
          handleLastPage={handleLastPage}
          next={Number(number) + Number(1)}
          prev={Number(number) - Number(1)}
          current={number}
          total={disney.totalPages}
        />
      </div>
    </div>
  );
}
