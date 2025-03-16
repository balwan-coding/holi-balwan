import React, { useState, useEffect } from "react";

const BalloonGame = () => {
  const [balloons, setBalloons] = useState([]);
  const [score, setScore] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      addBalloon();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const addBalloon = () => {
    const newBalloon = {
      id: Date.now(),
      left: Math.random() * 90 + "%",
      bottom: 0,
    };
    setBalloons((prev) => [...prev, newBalloon]);
  };

  const popBalloon = (id) => {
    setBalloons((prev) => prev.filter((balloon) => balloon.id !== id));
    setScore(score + 1);
  };

  const resetGame = () => {
    setBalloons([]);
    setScore(0);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-r from-pink-400 via-yellow-400 to-green-300">
      <h1 className="p-4 text-3xl font-bold text-center mt-17">Balloon Game</h1>
      <h2 className="text-xl text-center">Score: {score}</h2>
      <button
        onClick={resetGame}
        className="absolute px-4 py-2 mt-16 text-white bg-red-500 rounded-lg shadow-md top-4 right-4"
      >
        Reset
      </button>
      {balloons.map((balloon) => (
        <div
          key={balloon.id}
          onClick={() => popBalloon(balloon.id)}
          className="absolute w-16 h-20 transition-all bg-red-500 rounded-full cursor-pointer"
          style={{
            left: balloon.left,
            bottom: "0px",
            animation: "rise 6s linear forwards",
          }}
        ></div>
      ))}
      <style>
        {`
          @keyframes rise {
            from { bottom: 0; }
            to { bottom: 100vh; }
          }
        `}
      </style>
    </div>
  );
};

export default BalloonGame;
