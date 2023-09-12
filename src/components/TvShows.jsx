import React, { useEffect, useState } from "react";
import { FetchApi } from "./fetchapi";
import { useLoaderData } from "react-router-dom";
import Card from "./Card";

const TvShows = () => {
  const [rows, setRows] = useState([]);
  useEffect(() => {
    async function fetchdata() {
      let response = await FetchApi("tv")
        .then((res) => res.json())
        .then((res) => setRows(res.results));
    }
    fetchdata();
  }, []);
  return (
    <div className="p-10 bg-black min-h-[90vh]">
      <div>
        <h1 className="text-white text-3xl mb-4 text-center">TV Shows</h1>
      </div>
      <div className="grid place-items-center grid-cols-7 gap-10">
        {rows.map((item, i) => (
          <Card src={item.poster_path} key={i} />
        ))}
      </div>
    </div>
  );
};

export default TvShows;
export async function FetchTv() {
  console.log("working");
  let response = await FetchApi("origianls")
    .then((res) => res.json())
    .then((res) => res.results);
  return response;
}
