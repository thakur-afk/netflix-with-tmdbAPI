import React, { useEffect, useState } from "react";
import Card from "./Card";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { FetchApi } from "./fetchapi";

const Row = (props) => {
  // https://api.themoviedb.org/3/discover/tv?api_key=362457f6a4df27a0605b7431b6453287
  const api_key = "362457f6a4df27a0605b7431b6453287";
  const [rows, setRows] = useState([]);
  // eslint-disable-next-line react/prop-types
  console.log("props", props);
  // eslint-disable-next-line react/prop-types
  const ids = props.id;
  const slideLeft = () => {
    var slider = document.getElementById(`${ids}`);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    var slider = document.getElementById(`${ids}`);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  useEffect(() => {
    //  const response = await FetchApi(props.type).then((res) => setRows(res.data.results));
    // async function fetchdata() {
    //   let response = await fetch(
    //     `https://api.themoviedb.org/3/discover/tv?api_key=${api_key}`
    //   )
    //     .then((res) => res.json())
    //     .then((res) => setRows(res.results));

    // }
    async function fetchdata() {
      let response = await FetchApi(props.type)
        .then((res) => res.json())
        .then((res) => setRows(res.results));
    }
    fetchdata();
  }, []);

  return (
    <div className="w-full h-[250px] bg-black px-10 pt-3  ">
      <h2 className="text-white font-semibold text-lg">{props.title}</h2>
      <div className="flex relative items-center">
        <MdChevronLeft
          size={40}
          color="white"
          onClick={slideLeft}
          className=" cursor-pointer opacity-50 hover:opacity-100"
        />

        <div
          id={`${ids}`}
          className=" w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth  scrollbar-hide"
        >
          {rows.map((item, i) => (
            <Card src={item.poster_path} key={i} />
          ))}
        </div>
        <MdChevronRight
          size={40}
          color="white"
          onClick={slideRight}
          className=" cursor-pointer opacity-50 hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default Row;
