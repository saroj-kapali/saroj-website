import React from "react";
import Slider from "./Slider";
import Scroll from "./Scroll";

const Home = () => {
  return (
    <>
      <section
        id="home"
        className="h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1736297150541-89378f055b96?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')`, // Replace with your image URL
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-lg text-white text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to My Website
          </h1>
          <p className="text-lg md:text-xl">
            Explore our services and feel free to get in touch!
          </p>
        </div>
      </section>
      <Slider />
      <Scroll />
    </>
  );
};

export default Home;
