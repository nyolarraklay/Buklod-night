"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  console.log(isOpen);

  return (
    <div className="flex justify-between items-center p-3 bg-green-400 text-red-500 sticky top-0 z-50">
      <h1
        className={
          isOpen ? "hidden" : "transition-all duration-300 font-bold text-xl"
        }
      >
        Buklod Night 2024
      </h1>
      <button
        className={
          isOpen ? "hidden" : "flex sm:hidden transition-all duration-300"
        }
        onClick={toggleMenu}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {isOpen && (
        <ul className="flex justify-center space-x-8 w-full">
          <li onClick={toggleMenu}>
            <Link href="/">Home</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/delegates">Delegates</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/events">Events</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/about">About</Link>
          </li>
          <li onClick={toggleMenu}>
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      )}

      <div className="hidden sm:flex transition-all duration-300 opacity-0 sm:opacity-100">
        <ul className="flex justify-between w-80 space-x-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/delegates">Delegates</Link>
          </li>
          <li>
            <Link href="/events">Events</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
