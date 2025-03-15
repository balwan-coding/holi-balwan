import React from "react";
import { Link } from "react-router-dom";

function HoliGame() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500">
      <div className="max-w-2xl p-6 text-center text-white">
        <h1 className="mb-4 text-4xl font-bold">🎨 Holi Special Games 🎉</h1>

        <div className="mb-6">
          <h2 className="text-2xl font-semibold">🎈 Balloon Burst Game 🎯</h2>
          <p className="mt-2 text-lg">
            Rangon ki barsaat aur mazedar challenges! Balloons burst kar ke
            points jeetiye aur Holi ki masti mein doob jaiye!
          </p>
        </div>
        <Link
          to="/balloonGame"
          className="px-2 py-2 text-xl font-bold text-pink-600 bg-white rounded-full shadow-xl cursor-pointer hover:bg-pink-200 "
        >
          Play Baloon Game 🎈
        </Link>

        <div className="m-6">
          <h2 className="text-2xl font-semibold">❓ Holi Quiz Game 🏆</h2>
          <p className="mt-2 text-lg">
            Apni Holi ki knowledge test karein! Sahi jawab dein aur exciting
            rewards jeetiye. Kitna jaante hain aap Holi ke bare mein?
          </p>
        </div>

        <Link
          to="/holiQuizGame"
          className="px-2 py-2 text-xl font-bold text-pink-600 bg-white rounded-full shadow-xl cursor-pointer hover:bg-pink-200 "
        >
          Play Quiz Game 🫡
        </Link>

        <p className="mt-4 text-xl font-bold">
          🌈 Happy Holi! Khelo, jeeto aur masti karo! 🎊
        </p>
      </div>
    </div>
  );
}

export default HoliGame;
