import React from "react";
import CharGallery from "../components/CharGallery";
import { useRouter } from "next/router";
import Pagination from "../components/Pagination";
import Head from "next/head";

// export const getStaticPaths = async () => {
//   const res = await fetch("https://api.disneyapi.dev/characters");
//   const data = await res.json();
//   console.log(data);
//   const paths = data.map((char) => {
//     return {
//       params: { id: char.nextPage.toString() },
//     };
//   });

//   return { paths: paths, fallback: false };
// };

export const getServerSideProps = async ({ query }) => {
  const res = await fetch(
    "https://api.disneyapi.dev/characters/?page=" + query.page
  );
  const data = await res.json();

  return {
    props: { disney: data },
  };
};

export default function Page({ disney }) {
  const router = useRouter();
  const page = router.query.page;
  return (
    <div>
      <Head>
        <title>Disney Char</title>
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
        <div className="grid gap-3 mb-8 grid-cols-2 md:grid-cols-6 xl:grid-cols-8 relative mx-3 pt-5 container mx-auto">
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
