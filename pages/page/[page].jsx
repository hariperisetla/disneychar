import React from "react";
import CharGallery from "../../components/CharGallery";
import { useRouter } from "next/router";
import Pagination from "../../components/Pagination";
import Head from "next/head";

export const getStaticPaths = async () => {
  const res = await fetch("https://api.disneyapi.dev/character");
  const data = await res.json();
  const totalPages = data.info.totalPages;

  // Generate paths for each page
  const paths = Array.from({ length: totalPages }, (_, i) => ({
    params: { page: (i + 1).toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }) => {
  const page = params.page || "1"; // Default to page 1 if not specified
  const res = await fetch(
    `https://api.disneyapi.dev/character?page=${page}&pageSize=50`
  );
  const data = await res.json();
  return {
    props: { disney: data },
  };
};

export default function Page({ disney }) {
  const router = useRouter();
  const { page } = router.query;
  return (
    <div>
      <Head>
        <title>Disney Char</title>
      </Head>
      <div className="bg-gray-900 text-white pt-20">
        <div className="grid gap-3 mb-8 grid-cols-2 md:grid-cols-6 xl:grid-cols-8 relative pt-5 px-3 container mx-auto">
          {disney.data.map((chars) => (
            <CharGallery key={chars._id} chars={chars} />
          ))}
        </div>

        <Pagination
          next={Number(page) + Number(1)}
          prev={Number(page) - Number(1)}
          current={page}
          total={disney.info.totalPages}
        />
      </div>
    </div>
  );
}
