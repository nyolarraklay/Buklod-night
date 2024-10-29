import React from "react";

export default function FrontPage() {
  return (
    <div className="h-full lg:h-screen p-8 flex flex-col lg:flex-row items-center lg:justify-center space-y-10 lg:space-y-0 lg:space-x-10 bg-gray-100">
      <div className="text-center lg:text-left max-w-lg">
        <span className="text-red-600 font-medium text-lg">
          It's that time of the year again. Local of Oslo East Welcomes you to
          our annual...
        </span>
        <h1 className="text-5xl font-bold text-gray-800 leading-tight mt-2">
          Buklod Night <span className="text-indigo-600">2024</span>
        </h1>
        <p className="mt-4 text-gray-600 text-lg">
          Join us for a night of fun, food, and fellowship!
        </p>
        <p className="text-gray-600">Stay tuned for more details.</p>
      </div>
      <div className="w-full max-w-md lg:w-1/2">
        <img
          src="/20241029_181954.jpg"
          alt="Buklod Night 2024"
          className="rounded-lg cursor-pointer  w-full object-cover shadow-lg"
        />
      </div>
    </div>
  );
}
