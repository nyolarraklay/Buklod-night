export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 bg-green-400 text-red-500 sticky top-0 z-50">
      <h1 className="transition-all duration-300 font-bold text-xl">
        Buklod Night 2024
      </h1>
      <button className="flex sm:hidden transition-all duration-300">
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
      <div className="hidden sm:flex transition-all duration-300 opacity-0 sm:opacity-100">
        <ul className="flex justify-between w-80 space-x-4">
          <li>Home</li>
          <li>About</li>
          <li>Events</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
}
