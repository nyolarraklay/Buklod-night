import React from "react";

export default function FrontPage() {
  return (
    <div className="h-screen p-6 space-y-6">
      <span className="text-red-500">
        It's that time of the year again. Local of Oslo East Welcomes you to our
        annual....
      </span>
      <h1 className="text-6xl flex flex-col items-start">
        Buklod Night <span className="mt-1"> 2024</span>
      </h1>
      <p>Join us for a night of fun, food, and fellowship!</p>
      <p>Stay tuned for more details.</p>
    </div>
  );
}
