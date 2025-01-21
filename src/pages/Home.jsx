import React from "react";
import Slider from "./Slider";
import Scroll from "./Scroll";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="h-screen bg-gray-100 flex items-center justify-center"
      >
        <h1 className="text-4xl font-bold text-center">
          Welcome to My Website
        </h1>
      </section>
      <Slider />
      <Scroll />
    </>
  );
};

export default Home;
