import Link from "next/link";
import { useEffect, useState } from "react";

export default function Search() {
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

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
    <div className="flex items-center justify-center relative">
      <input
        type="text"
        className="block form-control md:w-96 border border-slate-700 focus:text-white focus:bg-slate-800 focus:border-slate-600 focus:outline-none rounded-lg bg-slate-900 p-1"
        placeholder="Search..."
        onChange={(event) => setValue(event.target.value)}
        value={value}
      />

      {value && (
        <ul className="absolute z-20 bg-gray-800 w-96 py-2 shadow-md mt-2 rounded-lg top-14">
          {result.map((char) => (
            <li key={char.id}>
              <Link href={`/characters/${char.id}`}>
                <a className="block px-4 py-2 hover:bg-gray-700">{char.name}</a>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
