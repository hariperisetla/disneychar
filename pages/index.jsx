import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../layouts/Header";
import Link from "next/link";
import { useState, useEffect } from "react";
import CharGallery from "../components/CharGallery";
import Pagination from "../components/Pagination";

export const getStaticProps = async () => {
  const res = await fetch("https://api.disneyapi.dev/character?page=1");
  const data = await res.json();
  return {
    props: { disney: data },
  };
};

export default function Home({ disney }) {
  const page = 1;
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  // const searchCharacter = () => {
  //   if (value.length > 0) {
  //     fetch("https://api.disneyapi.dev/character?name=" + value)
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setResult([]);
  //         let search = value.toLowerCase();
  //         let resData = res.data;
  //         let count = 0; // Counter to keep track of results

  //         for (const key in resData) {
  //           let character = resData[key].name.toLowerCase();
  //           if (character.slice(0, search.length).indexOf(search) !== -1) {
  //             setResult((prev) => {
  //               if (count < 5) {
  //                 count++; // Increment the counter
  //                 return [...prev, resData[key].name];
  //               }
  //               return prev; // Don't add more than 5 results
  //             });
  //           }

  //           if (count === 5) {
  //             break; // Break out of the loop when 5 results are found
  //           }
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  useEffect(() => {
    if (value.length > 0) {
      fetch("https://api.disneyapi.dev/character?name=" + value)
        .then((res) => res.json())
        .then((res) => {
          let search = value.toLowerCase();
          let resData = res.data;
          let results = [];

          for (const key in resData) {
            let character = resData[key].name.toLowerCase();
            if (character.slice(0, search.length).indexOf(search) !== -1) {
              if (results.length < 5) {
                // Limit the results to at most 5
                results.push({
                  name: resData[key].name,
                  id: resData[key]._id.toString(),
                });
              } else {
                break; // Exit the loop when 5 results are found
              }
            }
          }

          setResult(results);
        })
        .catch((err) => console.log(err));
    }
  }, [value]);

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

      <div className="bg-gray-900 text-white pt-20">
        <div className="flex items-center py-6 justify-center relative">
          <input
            type="text"
            className="block form-control w-96 border border-slate-700 focus:text-white focus:bg-slate-800 focus:border-slate-600 focus:outline-none rounded-lg bg-slate-900 p-2"
            placeholder="Search..."
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
          {/* <button
            className="m-2 bg-slate-700 py-2 px-5 rounded-lg border border-slate-700 hover:bg-slate-800 hover:border-slate-700 focus:bg-slate-800"
            onClick={() => {
              // Trigger the search when the button is clicked
              searchCharacter();
            }}
          >
            Search
          </button> */}

          {value && (
            <ul className="absolute z-20 bg-gray-800 w-96 py-2 shadow-md mt-2 rounded-lg top-14">
              {result.map((char) => (
                <li key={char.id}>
                  {console.log(char.id)}
                  <Link href={`/characters/${char.id}`}>
                    <a className="block px-4 py-2 hover:bg-gray-700">
                      {char.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
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
