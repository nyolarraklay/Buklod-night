// import { useState } from "react";
// import { Link } from "react-scroll"; // Import Link from react-scroll

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="flex justify-between items-center p-4 bg-gray-800 text-white fixed top-0 left-0 right-0 z-50 w-full shadow-md">
//       <h1
//         className={`transition-all duration-300 font-bold text-xl cursor-pointer ${
//           isOpen ? "hidden" : "block"
//         }`}
//       >
//         Buklod Night 2024
//       </h1>
//       <button
//         className={`flex md:hidden transition-all duration-300 ${
//           isOpen ? "hidden" : "block"
//         }`}
//         onClick={toggleMenu}
//       >
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           strokeWidth={1.5}
//           stroke="currentColor"
//           className="w-6 h-6"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//           />
//         </svg>
//       </button>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <nav className="flex justify-center space-x-6 w-full md:hidden">
//           <Link
//             to="home"
//             smooth={true}
//             duration={500}
//             className="hover:text-indigo-400 transition-colors"
//           >
//             Home
//           </Link>
//           <Link
//             to="delegates"
//             smooth={true}
//             duration={500}
//             offset={-50}
//             className="hover:text-indigo-400 transition-colors"
//           >
//             Delegates
//           </Link>
//           <Link
//             to="events"
//             smooth={true}
//             duration={500}
//             offset={-50}
//             className="hover:text-indigo-400 transition-colors"
//           >
//             Events
//           </Link>
//           <Link
//             to="gallery"
//             smooth={true}
//             duration={500}
//             offset={-50}
//             className="hover:text-indigo-400 transition-colors"
//           >
//             Gallery
//           </Link>
//           <Link
//             to="about"
//             smooth={true}
//             duration={500}
//             offset={-50}
//             className="hover:text-indigo-400 transition-colors"
//           >
//             About
//           </Link>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="size-4"
//             onClick={toggleMenu}
//           >
//             <path
//               fillRule="evenodd"
//               d="M12.5 9.75A2.75 2.75 0 0 0 9.75 7H4.56l2.22 2.22a.75.75 0 1 1-1.06 1.06l-3.5-3.5a.75.75 0 0 1 0-1.06l3.5-3.5a.75.75 0 0 1 1.06 1.06L4.56 5.5h5.19a4.25 4.25 0 0 1 0 8.5h-1a.75.75 0 0 1 0-1.5h1a2.75 2.75 0 0 0 2.75-2.75Z"
//               clipRule="evenodd"
//             />
//           </svg>
//         </nav>
//       )}

//       {/* Desktop Menu */}
//       <div className="hidden md:flex transition-all duration-300 opacity-0 sm:opacity-100">
//         <nav className="flex justify-center space-x-8 w-full">
//           <Link
//             to="home"
//             smooth={true}
//             duration={500}
//             offset={-50}
//             className="hover:text-indigo-400 transition-colors"
//           >
//             Home
//           </Link>
//           <Link
//             to="delegates"
//             smooth={true}
//             duration={500}
//             offset={-50}
//             className="hover:text-indigo-400 transition-colors"
//           >
//             Delegates
//           </Link>
//           <Link
//             to="events"
//             smooth={true}
//             duration={500}
//             offset={-50}
//             className="hover:text-indigo-400 transition-colors"
//           >
//             Events
//           </Link>
//           <Link
//             to="gallery"
//             smooth={true}
//             duration={500}
//             offset={-50}
//             className="hover:text-indigo-400 transition-colors"
//           >
//             Gallery
//           </Link>
//           <Link
//             to="about"
//             smooth={true}
//             duration={500}
//             offset={-50}
//             className="hover:text-indigo-400 transition-colors"
//           >
//             About
//           </Link>
//         </nav>
//       </div>
//     </div>
//   );
// }
