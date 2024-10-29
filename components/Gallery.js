import React from "react";

export default function Gallery() {
  return (
    <div className="h-screen lg:h-full">
      <div className="flex flex-col items-center">
        <h1 className="text-6xl ">Gallery</h1>
        <p>Images from Buklod Night 2023</p>
      </div>
      <div className="p-6 space-y-6">
        <img
          src="https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/414728346_10160695135362798_6244251439185725176_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XbIpJa57FKwQ7kNvgGAj7bf&_nc_ht=scontent.fosl1-1.fna&_nc_gid=AC_PfWb9m2j9ijL3jpHfl9O&oh=00_AYA29cu4wTVxxQUMuo5nGoHhtxsynO0b9mKdLeiVtTlhRg&oe=6721A0A2"
          alt="Delegates"
          className="rounded-lg cursor-pointer w-full h-80 lg:h-full object-cover"
        />
        <img
          src="https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/414976025_10160695135117798_3150070818068633409_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=18SIingEF7oQ7kNvgFc4Dka&_nc_ht=scontent.fosl1-1.fna&_nc_gid=A5OsfQLarOYLG0iWD4UM4EW&oh=00_AYA5Pw7BPX165qmWOL1bsb-ato3MmYgCk_0MUB-T_TFwYw&oe=6721A699"
          alt="Delegates"
          className="rounded-lg cursor-pointer h-80 w-full object-cover lg:h-full"
        />
        <img
          src="https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/415000347_10160695135507798_2249378185604688562_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LvLQL-gEwqsQ7kNvgHDvbUb&_nc_ht=scontent.fosl1-1.fna&_nc_gid=AU9tUEKMNCmSo32GOgzJ8J2&oh=00_AYDiOvvRfxhHaK9z91GnGiOgK6QwhdfZo1VoZj485X31XQ&oe=6721D26F"
          alt="Delegates"
          className="rounded-lg cursor-pointer h-80 w-full object-cover lg:h-full"
        />
      </div>
    </div>
  );
}
