import React from "react";
import profile from "../assets/profile.jpg";
function About() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen p-6 text-center text-white bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
      <h1 className="mb-4 text-5xl font-bold">About Me</h1>
      <img
        src={profile}
        alt="Profile"
        className="w-40 h-40 border-4 border-white rounded-full shadow-lg"
      />
      <p className="max-w-xl mt-4 text-lg">
        Hello! I'm <span className="font-semibold">Balwan Singh Rajput</span>, a
        passionate full-stack web developer. I love creating modern and
        responsive web applications. Currently, I'm working on various projects
        including e-commerce, to-do apps, and more.
      </p>
    </div>
  );
}

export default About;
