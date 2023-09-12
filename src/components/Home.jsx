import React from "react";
import Banner from "./Banner";
import Row from "./Row";

const Home = () => {
  return (
    <>
      <Banner />
      <Row id="1" title="Latest Release" type="popular" />
      <Row id="2" title="Netflix Original's" type="trending" />
      <Row id="3" title="Contiue" type="popular" />
      <Row id="4" title="Top Rated" type="top_rated" />
    </>
  );
};

export default Home;
