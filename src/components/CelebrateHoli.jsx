import React from "react";
import holiImage from "../assets/holi-card.jpg";
import holi from "../assets/holi3.jpg";

function CelebrateHoli() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 text-white bg-gradient-to-r from-green-400 via-yellow-500 to-pink-500">
      <h1 className="mt-12 mb-4 text-5xl font-bold">🎉 Celebrate Holi! 🎨</h1>
      <p className="max-w-2xl text-lg text-center">
        Holi, the festival of colors, is a celebration of love, unity, and the
        arrival of spring. People come together to enjoy this festival with
        colors, sweets, and dance.
      </p>

      <div className="w-full max-w-md p-6 mt-6 text-center bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-purple-600">
          🌸 Happy Holi! 🌸
        </h2>
        <p className="mt-2 text-gray-700">
          May your life be filled with colors of happiness, joy, and love.
          Wishing you a vibrant and colorful Holi!
        </p>
        <img
          src={holiImage}
          alt="Holi Greeting"
          className="w-full mt-4 rounded-lg"
        />
      </div>

      <img
        src={holi}
        alt="Holi Celebration"
        className="w-full max-w-lg mt-6 rounded-lg shadow-lg"
      />
    </div>
  );
}

export default CelebrateHoli;
