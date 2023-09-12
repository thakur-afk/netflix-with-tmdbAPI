import React from "react";

const Banner = () => {
  return (
    <div className="w-[100%] h-[80vh] -mt-14 ">
      <div className="w-full h-full bg-cover   bg-no-repeat bg-[url('/bg-big.jpg')]">
        <div className="text-white w-[500px] px-10 py-40 flex flex-col gap-8 leading-8  justify-center">
          <p className="text-lg font-semibold">Netflix Original</p>
          <h1 className="text-[78px] font-bold">Daredevil</h1>
          <div className="flex gap-4 font-semibold">
            <p>2016</p>
            <p>TV-MVA</p>
            <p>2 Seasons</p>
          </div>
          <p>
            A blind lawyer by day, vigilante by night. Matt Murdock fights the
            crime of New York as Daredevil.
          </p>
          <div className="flex gap-4">
            <button className="bg-red-500 p-2 rounded-md">Watch Now</button>
            <button className="bg-black p-2 rounded-md">View Trailer</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
