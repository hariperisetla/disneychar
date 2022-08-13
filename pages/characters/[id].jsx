import Head from "next/head";
import React from "react";

// export const getStaticPaths = async ({ query }) => {
//   const res = await fetch("https://api.disneyapi.dev/characters/");
//   const data = await res.json();
//   console.log(query);
//   const paths = data.data.map((char) => {
//     return {
//       params: { id: char._id.toString() },
//     };
//   });

//   return { paths: paths, fallback: false };
// };

export const getServerSideProps = async ({ query }) => {
  const res = await fetch("https://api.disneyapi.dev/characters/" + query.id);
  const data = await res.json();

  return {
    props: { chars: data },
  };
};

export default function Info({ chars }) {
  return (
    <div>
      <Head>
        <title>Disney Char - {chars.name}</title>
      </Head>
      <div className="bg-gray-900 text-slate-300">
        <div className="container grid grid-cols-1 md:w-2/4 mx-auto items-center justify-center">
          <div className="group w-fit sm:w-auto bg-slate-800 p-5 rounded-2xl m-12 items-center justify-center">
            <div className="border-b border-b-slate-700 pb-3">
              <h1 className="text-3xl font-medium text-center">
                Character Info
              </h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="mt-3 overflow-hidden flex justify-center items-start">
                <img
                  src={chars.imageUrl}
                  alt={chars.name}
                  title={chars.name}
                  className="object-cover w-full h-96 object-top rounded-2xl"
                />
              </div>
              <div>
                <div className="grid grid-cols-2">
                  <h3 className="font-medium py-3 px-5">Name</h3>
                  <h3 className="py-3">{chars.name}</h3>
                </div>
                <div className="grid grid-cols-2">
                  <h3 className="font-medium py-3 px-5">Films</h3>
                  <h3 className="pt-3">
                    {chars.films.length === 0
                      ? "N/A"
                      : chars.films.map((film) => (
                          <div key={film}>
                            <h3>{film},</h3>
                          </div>
                        ))}
                  </h3>
                </div>
                <div className="grid grid-cols-2 items-start">
                  <h3 className="font-medium py-3 px-5">Short Films</h3>
                  <h3 className="py-3">
                    {chars.shortFilms.length === 0
                      ? "N/A"
                      : chars.shortFilms.map((shortFilm) => (
                          <div key={shortFilm}>
                            <h3>{shortFilm}</h3>
                          </div>
                        ))}
                  </h3>
                </div>
                <div className="grid grid-cols-2">
                  <h3 className="font-medium py-3 px-5">TV Shows</h3>
                  <h3 className="py-3">
                    {chars.tvShows.length === 0
                      ? "N/A"
                      : chars.tvShows.map((tvShow) => (
                          <div key={tvShow}>
                            <h3>{tvShow},</h3>
                          </div>
                        ))}
                  </h3>
                </div>
                <div className="grid grid-cols-2">
                  <h3 className="font-medium py-3 px-5">Video Games</h3>
                  <h3 className="py-3">
                    {chars.videoGames.length === 0 ? "N/A" : chars.videoGames}
                  </h3>
                </div>
                <div className="grid grid-cols-2">
                  <h3 className="font-medium py-3 px-5">Park Attractions</h3>
                  <h3 className="py-3">
                    {chars.parkAttractions.length === 0
                      ? "N/A"
                      : chars.parkAttractions}
                  </h3>
                </div>
                <div className="grid grid-cols-2">
                  <h3 className="font-medium py-3 px-5">Allies</h3>

                  <h3 className="py-3">
                    {chars.allies.length === 0 ? "N/A" : chars.allies}
                  </h3>
                </div>
                <div className="grid grid-cols-2">
                  <h3 className="font-medium py-3 px-5">Enemies</h3>
                  <h3 className="py-3">
                    {chars.enemies.length === 0 ? "N/A" : chars.enemies}
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <h1>Character Info</h1>
      <h2>Name: {chars.name}</h2>
      <h2>films {chars.films}</h2>
      <h2>shortFilms {chars.shortFilms}</h2>
      <h2>tvShows {chars.tvShows}</h2>
      <h2>videoGames {chars.videoGames}</h2>
      <h2>parkAttractions {chars.parkAttractions}</h2>
      <h2>allies {chars.allies}</h2>
      <h2>enemies {chars.enemies}</h2>
      <h2>imageUrl {chars.imageUrl}</h2> */}
      </div>
    </div>
  );
}
