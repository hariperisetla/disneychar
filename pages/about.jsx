import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <div>
      <Head>
        <title>Disney Char - About</title>
      </Head>
      <div className="bg-gray-900 text-slate-300">
        <div className="container mx-auto">
          <div className="justify-center">
            <h1 className="text-3xl font-medium pt-12 p-2 text-center">
              About
            </h1>
            <h3 className="text-xl text-center p-2">Thanks for visiting!</h3>
            <h5 className="text-center py-3">
              This is a simple Next JS website with Tailwind CSS used for
              styling. I found this Disney API from{" "}
              <a
                href="https://disneyapi.dev/"
                className="font-medium hover:underline"
              >
                Disney API
              </a>{" "}
              created by{" "}
              <a
                href="https://github.com/manuCastrillonM/"
                className="font-medium hover:underline"
              >
                Manu Castrillon
              </a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default about;
