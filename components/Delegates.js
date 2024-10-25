import React from "react";
import Image from "next/image";

export default function Delegates() {
  return (
    <div className="h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl ">Delegates</h1>
        <p>Meet the delegates of Buklod Night 2024!</p>
      </div>
      <div className="p-6">
        <img
          src="https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/415077296_10160695135022798_4564813638957109144_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=1ObjodihC6cQ7kNvgFYjC4r&_nc_ht=scontent.fosl1-1.fna&_nc_gid=AV6ynu3uZgzGloTaGKO2ACa&oh=00_AYBPS31hB36dhwiuRFCN0eL9BweEpOe2HLsqGAsgkm-NrA&oe=6721A995"
          alt="Delegates"
          className="rounded-lg cursor-pointer h-32 w-32 object-cover"
        />
        <p className="font-semibold">Mr & Mrs Osorio</p>
      </div>
    </div>
  );
}
