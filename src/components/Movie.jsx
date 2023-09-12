import React, { useEffect, useState } from "react";
import { FetchApi } from "./fetchapi";
import Card from "./Card";
import { useLoaderData } from "react-router-dom";

const Movie = () => {
  // const [rows, setRows] = useState([]);
  // useEffect(() => {
  //   async function fetchdata() {
  //     let response = await FetchApi("popular")
  //       .then((res) => res.json())
  //       .then((res) => setRows(res.results));
  //   }
  //   fetchdata();
  // }, []);
  const rows = useLoaderData();
  return (
    <div className="p-10 bg-black min-h-[90vh]">
      <div className="text-center">
        <h1 className="text-white text-3xl mb-4">Movies</h1>
      </div>
      <div className="grid place-items-center grid-cols-7 gap-10">
        {rows.map((item, i) => (
          <Card src={item.poster_path} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Movie;
export async function FetchMovie() {
  console.log("working");
  let response = await FetchApi("popular")
    .then((res) => res.json())
    .then((res) => res.results);
  return response;
}
