import { useState } from 'react';
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Bild from "../assets/Logos/72x72.svg";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-neutral-50 shadow-md p-4 flex z-20 justify-between items-center sticky top-0">
        <div>
          <Link to="/">
            <img src={Bild} alt="Lukas Fitness Logo" className="h-10" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-6 gap-4 items-center justify-center font-bold">
          <li className="hover:text-sky-700">
            <NavLink to="/">HOME</NavLink>
          </li>
          <li className="hover:text-sky-700">
            <NavLink to="/trainings">TRAININGS</NavLink>
          </li>
          <li className="hover:text-sky-700">
            <NavLink to="/über-mich">ÜBER MICH</NavLink>
          </li>
          <li className="hover:text-sky-700">
            <NavLink to="/kontakt">KONTAKT</NavLink>
          </li>
        </ul>

        <Link
          to="kontakt"
          className="hidden md:inline-block bg-orange-400 text-neutral-50 cursor-pointer px-7 py-3 rounded-full font-bold hover:bg-orange-500 transition"
        >
          TERMIN BUCHEN
        </Link>

        {/* Hamburger Button (Mobile) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
          aria-label="Menü öffnen"
        >
          <div className="w-6 h-0.5 bg-gray-700 mb-1 rounded"></div>
          <div className="w-6 h-0.5 bg-gray-700 mb-1 rounded"></div>
          <div className="w-6 h-0.5 bg-gray-700 rounded"></div>
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-neutral-50 shadow-md flex flex-col items-center py-4 md:hidden z-30">
            <NavLink
              onClick={() => setIsOpen(false)}
              className="py-2 px-4 w-full text-center font-bold hover:bg-sky-100"
              to="/"
            >
              HOME
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              className="py-2 px-4 w-full text-center font-bold hover:bg-sky-100"
              to="/trainings"
            >
              TRAININGS
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              className="py-2 px-4 w-full text-center font-bold hover:bg-sky-100"
              to="/über-mich"
            >
              ÜBER MICH
            </NavLink>
            <NavLink
              onClick={() => setIsOpen(false)}
              className="py-2 px-4 w-full text-center font-bold hover:bg-sky-100"
              to="/kontakt"
            >
              KONTAKT
            </NavLink>
            <Link
              onClick={() => setIsOpen(false)}
              to="kontakt"
              className="mt-2 inline-block bg-orange-400 text-neutral-50 cursor-pointer px-7 py-3 rounded-full font-bold hover:bg-orange-500 transition"
            >
              TERMIN BUCHEN
            </Link>
          </div>
        )}
      </nav>
    </>
  );
}
