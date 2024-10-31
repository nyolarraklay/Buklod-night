import React from "react";

export default function FrontPage() {
  return (
    <div className="mt-10 mb-5 p-10 grid grid-rows-3 gap-4 md:gap-0 justify-items-center items-center md:h-screen mx-auto md:flex md:flex-row md:justify-center md:space-x-10 bg-gray-100 md:mt-5">
      <div className="text-center lg:text-left max-w-lg space-y-4">
        <span className="text-red-600 font-medium text-lg">
          It’s that time of the year again. Local of Oslo East welcomes you to
          our annual...
        </span>
        <h1 className="text-5xl font-bold text-gray-800 leading-tight mt-2">
          Buklod Night <span className="text-indigo-600">2024</span>
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          Join us for a night of fun, food, and fellowship!
        </p>
        <p className="text-gray-600">Stay tuned for more details.</p>
      </div>
      <div className="w-full max-w-md lg:w-1/2 row-span-2 row-start-2 self-start md:self-center ">
        <img
          src="/20241029_181954.jpg"
          alt="Invitation to Buklod Night 2024 - A night of celebration and community"
          className="rounded-lg cursor-pointer w-full object-contain shadow-lg"
        />
      </div>
    </div>
  );
}
