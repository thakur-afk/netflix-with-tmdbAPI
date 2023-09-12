const api_key = "362457f6a4df27a0605b7431b6453287";
// api-token-eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNjI0NTdmNmE0ZGYyN2EwNjA1Yjc0MzFiNjQ1MzI4NyIsInN1YiI6IjY0ZmMyNzM1ZmZjOWRlMGVlMDBiNmVjNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-PKOSXiNe9RRs_W5l8BorU3G9sEsQ2q7WNE_PnBFPeo
const url = "https://api.themoviedb.org/3";

const endpoint = {
  origianls: "/discover/tv",
  trending: "/trending/all/week",
  popular: "/movie/popular",
  top_rated: "/movie/top_rated",
  tv: "/tv/top_rated",
};
export const FetchApi = (param) => {
  return fetch(`${url}${endpoint[param]}?api_key=${api_key}`);
};
