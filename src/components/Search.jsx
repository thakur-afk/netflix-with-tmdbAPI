import React, { useState } from "react";
import Card from "./Card";

const Search = () => {
  const [searchEl, setSearchEl] = useState("");
  const [movieData, setMovieData] = useState([]);
  const [tvData, setTvData] = useState([]);
  let display = false;

  function Find() {
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${searchEl}&api_key=362457f6a4df27a0605b7431b6453287`
    )
      .then((res) => res.json())
      .then((res) => setMovieData(res.results));

    fetch(
      `https://api.themoviedb.org/3/search/tv?query=${searchEl}&api_key=362457f6a4df27a0605b7431b6453287`
    )
      .then((res) => res.json())
      .then((res) => setTvData(res.results));
  }

  return (
    <div className="bg-black min-h-[90vh] p-10">
      <div className="flex justify-center mb-5">
        <input
          onKeyUp={(e) => {
            console.log("submittted");
            setSearchEl(e.target.value);
            display = true;
            Find();
          }}
          placeholder="search movies and tv shows"
          className="w-[300px] p-2 rounded-md"
        ></input>
      </div>
      <div className="text-white">{display ? "Search Results" : ""}</div>
      <div>
        <h2>
          {movieData.length == 0 && tvData.length == 0
            ? "No results found"
            : ""}
        </h2>
      </div>
      <div className="grid place-items-center grid-cols-7">
        {movieData.map((item, i) => (
          <Card src={item.poster_path} key={i} />
        ))}
        {tvData.map((item, i) => (
          <Card src={item.poster_path} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Search;
