import React from "react";

const Card = (props) => {
  return (
    <img
      className="w-[180px] h-[200px] hover:scale-105 cursor-pointer ease-in-out duration-300 inline-block p-2 shadow-sm shadow-red-500 rounded-lg "
      // src={`https://image.tmbd.org/t/p/original${props.src}`}
      src={`https://image.tmdb.org/t/p/original/${props.src}`}
      alt="image"
    ></img>
  );
};

export default Card;
