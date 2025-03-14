import React from "react";
import { holiImages } from "../data/images";

function Gallery() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 overflow-hidden text-center text-white bg-gradient-to-r from-pink-500 via-yellow-400 to-green-500">
      <h1 className="mb-6 text-4xl font-bold">Holi Celebration Gallery</h1>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {holiImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Holi Image ${index + 1}`}
            className="object-cover w-full h-64 rounded-lg shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
