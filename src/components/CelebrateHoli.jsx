import React, { useEffect, useState } from "react";
import { FaPlay, FaStop, FaRedo } from "react-icons/fa";
import confetti from "canvas-confetti";
import holiImage from "../assets/holi-card.jpg";
import holi from "../assets/holi3.jpg";
import holiMusic from "../assets/holi-music.mp3";

function CelebrateHoli() {
  const [audio] = useState(new Audio(holiMusic));
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    startConfetti();
  }, []);

  const startConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ff0", "#f00", "#0f0", "#00f", "#f0f", "#0ff"],
    });
  };

  const toggleMusic = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 text-white bg-gradient-to-r from-green-400 via-yellow-500 to-pink-500">
      <h1 className="mt-12 mb-4 text-5xl font-bold">🎉 Celebrate Holi! 🎨</h1>
      <button
        onClick={toggleMusic}
        className={`px-4 py-2 text-lg font-bold text-white rounded-lg flex items-center gap-2 shadow-lg ${
          isPlaying
            ? "bg-red-600 hover:bg-red-700"
            : "bg-green-600 hover:bg-green-700"
        }`}
      >
        {isPlaying ? <FaStop /> : <FaPlay />}{" "}
        {isPlaying ? "Stop Music" : "Play Music"}
      </button>
      <p className="max-w-2xl text-lg text-center">
        Holi, the festival of colors, is a celebration of love, unity, and the
        arrival of spring. Enjoy this festival with colors, sweets, and dance.
      </p>

      <div className="w-full max-w-md p-6 mt-6 text-center bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-purple-600">
          🌸 Happy Holi! 🌸
        </h2>
        <p className="mt-2 text-gray-700">
          May your life be filled with colors of happiness, joy, and love.
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

      <div className="flex gap-4 mt-6">
        <button
          onClick={startConfetti}
          className="flex items-center gap-2 px-4 py-2 text-lg font-bold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700"
        >
          <FaRedo /> Rain Colors Again
        </button>
      </div>
    </div>
  );
}

export default CelebrateHoli;
