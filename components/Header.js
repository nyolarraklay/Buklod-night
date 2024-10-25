import { Bars3Icon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 bg-green-400 text-red-500">
      <h1 className="transition-all duration-300 font-bold text-xl">
        Buklod Night 2024
      </h1>
      <button className="flex sm:hidden transition-all duration-300">
        <Bars3Icon className="h-6 w-6 text-gray-800" />
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
