/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="h-full bg-gray-800 p-6">
      <div className="flex flex-col items-center text-white space-y-4 ">
        <h1 className="text-6xl ">Gallery</h1>
        <p>Images from Buklod Night 2023</p>
      </div>
      <div className="p-6 grid justify-center lg:grid-cols-2 gap-5">
        <Image
          src="/Gallery/bn-1.jpg"
          alt="Delegates"
          width={500}
          height={300}
        />
        <Image
          src="/Gallery/bn-2.jpg"
          alt="Delegates"
          width={500}
          height={300}
        />
        <Image
          src="/Gallery/bn-3.jpg"
          alt="Delegates"
          width={500}
          height={300}
        />
        <Image
          src="/Gallery/bn-4.jpg"
          alt="Delegates"
          width={500}
          height={300}
        />
        <Image
          src="/Gallery/bn-5.jpg"
          alt="Delegates"
          width={500}
          height={300}
        />
        <Image
          src="/Gallery/bn-6.jpg"
          alt="Delegates"
          width={500}
          height={300}
        />
      </div>
    </div>
  );
}
