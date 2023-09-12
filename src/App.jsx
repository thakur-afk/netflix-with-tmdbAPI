import Banner from "./components/Banner";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import TvShows, { FetchTv } from "./components/TvShows";
import Row from "./components/Row";
import Home from "./components/Home";
import Movie, { FetchMovie } from "./components/Movie";
import Search from "./components/Search";

// api-key=362457f6a4df27a0605b7431b6453287
// api-token-eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjI0NTdmNmE0ZGYyN2EwNjA1Yjc0MzFiNjQ1MzI4NyIsInN1YiI6IjY0ZmMyNzM1ZmZjOWRlMGVlMDBiNmVjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-PKOSXiNe9RRs_W5l8BorU3G9sEsQ2q7WNE_PnBFPeo
// url=https://api.themoviedb.org/3/movie/11?api_key=362457f6a4df27a0605b7431b6453287

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route loader={FetchTv} path="/tvshows" element={<TvShows />}></Route>
      <Route loader={FetchMovie} path="movies" element={<Movie />} />
      <Route path="search" element={<Search />} />
    </Route>
  )
);

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route path="" element={<Home />} />

    //       <Route
    //         // loader={FetchTv()}
    //         path="/tvshows"
    //         element={<TvShows />}
    //       ></Route>
    //       <Route path="movies" element={<Movie />} />
    //       <Route path="search" element={<Search />} />
    //     </Route>
    //   </Routes>
    // </Router>
    <RouterProvider router={router} />
  );
}

export default App;
