import { useState } from "react";

export default function Header({ scrollToSection }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex justify-between items-center p-3 bg-green-400 text-red-500 fixed top-0 left-0 right-0 z-50 w-full shadow-md">
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
        <nav className="flex justify-center space-x-8 w-full">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("delegates")}>
            Delegates
          </button>
          <button onClick={() => scrollToSection("events")}>Events</button>
          <button onClick={() => scrollToSection("gallery")}>Gallery</button>
          <button onClick={() => scrollToSection("about")}>About</button>
        </nav>
      )}

      <div className="hidden sm:flex transition-all duration-300 opacity-0 sm:opacity-100">
        <nav className="flex justify-center space-x-8 w-full">
          <button onClick={() => scrollToSection("home")}>Home</button>
          <button onClick={() => scrollToSection("delegates")}>
            Delegates
          </button>
          <button onClick={() => scrollToSection("events")}>Events</button>
          <button onClick={() => scrollToSection("gallery")}>Gallery</button>
          <button onClick={() => scrollToSection("about")}>About</button>
        </nav>
      </div>
    </div>
  );
}
