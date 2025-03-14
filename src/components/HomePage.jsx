import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden text-center text-white bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500">
      <div className="absolute inset-0 bg-holi-pattern opacity-20"></div>

      <h1 className="text-6xl font-extrabold drop-shadow-lg animate-bounce">
        Happy Holi! 🎨
      </h1>
      <p className="max-w-3xl mt-4 text-2xl font-semibold drop-shadow-md">
        Celebrate the festival of colors with joy, love, and happiness. May your
        life be as vibrant as Holi itself!
      </p>

      <div className="absolute w-32 h-32 bg-pink-400 rounded-full opacity-50 top-10 left-10 blur-2xl animate-pulse"></div>
      <div className="absolute w-32 h-32 bg-green-400 rounded-full opacity-50 bottom-10 right-10 blur-2xl animate-pulse"></div>

      <Link
        to="/celebrateHoli"
        className="px-8 py-4 mt-8 text-xl font-bold text-pink-600 transition-transform transform bg-white rounded-full shadow-xl cursor-pointer hover:bg-pink-200 hover:scale-105"
      >
        Celebrate Now 🎉
      </Link>
    </div>
  );
};

export default HomePage;
