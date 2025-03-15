import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";

function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const sidebarClose = () => {
    setIsSidebarOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 z-50 flex items-center justify-between w-full px-8 py-4 shadow-lg bg-gradient-to-r from-red-400 via-yellow-400 to-green-400">
      <Link to="/" className="text-3xl font-bold text-white drop-shadow-lg">
        Holi Festival 🎨
      </Link>

      <div className="sm:hidden">
        <button onClick={sidebarOpen}>
          <IoMdMenu className="text-4xl text-white" />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 h-full w-48 text-white transition-transform transform bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 shadow-lg ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-screen p-4">
          <div className="flex justify-between mb-7">
            <h1 className="text-3xl font-bold text-white drop-shadow-lg">🎨</h1>
            <button onClick={sidebarClose}>
              <IoCloseSharp className="text-4xl" />
            </button>
          </div>
          <ul className="flex flex-col gap-5">
            <li>
              <Link
                to="/"
                className="text-lg font-semibold text-white transition hover:text-yellow-200"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="text-lg font-semibold text-white transition hover:text-yellow-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="text-lg font-semibold text-white transition hover:text-yellow-200"
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/holiGame"
                className="text-lg font-semibold text-white transition hover:text-yellow-200"
              >
                HoliGames
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-lg font-semibold text-white transition hover:text-yellow-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <ul className="hidden space-x-6 sm:flex">
        <li>
          <Link
            to="/"
            className="text-lg font-semibold text-white transition hover:text-yellow-200"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className="text-lg font-semibold text-white transition hover:text-yellow-200"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/gallery"
            className="text-lg font-semibold text-white transition hover:text-yellow-200"
          >
            Gallery
          </Link>
        </li>
        <li>
          <Link
            to="/holiGame"
            className="text-lg font-semibold text-white transition hover:text-yellow-200"
          >
            HoliGame
          </Link>
        </li>
        <li>
          <Link
            to="/contact"
            className="text-lg font-semibold text-white transition hover:text-yellow-200"
          >
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
