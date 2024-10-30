import React from "react";

export default function Gallery() {
  return (
    <div className="h-full bg-gray-800 p-6">
      <div className="flex flex-col items-center text-white space-y-4 ">
        <h1 className="text-6xl ">Gallery</h1>
        <p>Images from Buklod Night 2023</p>
      </div>
      <div className="p-6 grid justify-center lg:grid-cols-2 gap-5">
        <img
          src="https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/414728346_10160695135362798_6244251439185725176_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=XbIpJa57FKwQ7kNvgGAj7bf&_nc_ht=scontent.fosl1-1.fna&_nc_gid=AC_PfWb9m2j9ijL3jpHfl9O&oh=00_AYA29cu4wTVxxQUMuo5nGoHhtxsynO0b9mKdLeiVtTlhRg&oe=6721A0A2"
          alt="Delegates"
          className="rounded-lg cursor-pointer w-full h-80 lg:h-96 object-cover"
        />
        <img
          src="https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/414976025_10160695135117798_3150070818068633409_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=18SIingEF7oQ7kNvgFc4Dka&_nc_ht=scontent.fosl1-1.fna&_nc_gid=A5OsfQLarOYLG0iWD4UM4EW&oh=00_AYA5Pw7BPX165qmWOL1bsb-ato3MmYgCk_0MUB-T_TFwYw&oe=6721A699"
          alt="Delegates"
          className="rounded-lg cursor-pointer h-80 w-full object-cover lg:h-96"
        />
        <img
          src="https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/415777633_10223641030566218_8374971365515718859_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=127cfc&_nc_ohc=JpGZUJPJryAQ7kNvgHpDG_T&_nc_zt=23&_nc_ht=scontent.fosl1-1.fna&_nc_gid=ARqs1IEQ4pHAAI5fyc9HLUa&oh=00_AYC74pKEuHNWFNUL1VWwYI0_nmFFoAhs3jzsswh-R5SuNg&oe=6727F97A"
          alt="Delegates"
          className="rounded-lg cursor-pointer h-80 w-full object-cover lg:h-96"
        />
        <img
          src="https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/415766663_10223641033326287_5056037535074464077_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=uHVQ5gSf9dIQ7kNvgEvIeIU&_nc_zt=23&_nc_ht=scontent.fosl1-1.fna&_nc_gid=AaeDFXLQRYYrJcwkAU-V9To&oh=00_AYDI94yUDUP7QKWCE1U0r4JAm7BKHGYtItjS6ZDGh06pAg&oe=6727E0EB"
          alt="Delegates"
          className="rounded-lg cursor-pointer h-80 w-full object-cover lg:h-96"
        />
        <img
          src="https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/415991162_7220267561327426_845516322285402657_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=FdlkcIe6xyAQ7kNvgGTd8Vy&_nc_zt=23&_nc_ht=scontent.fosl1-1.fna&_nc_gid=AIEFKFiWNOCF_klrLJL4kvv&oh=00_AYDmc8WV9FTbSWnBXEA6PpGXT9IiOP6lQqL0NEVTOvWhsQ&oe=6727D3F6"
          alt="Delegates"
          className="rounded-lg cursor-pointer h-80 w-full object-cover lg:h-96"
        />
        <img
          src="https://scontent.fosl1-1.fna.fbcdn.net/v/t39.30808-6/415000347_10160695135507798_2249378185604688562_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LvLQL-gEwqsQ7kNvgHDvbUb&_nc_ht=scontent.fosl1-1.fna&_nc_gid=AU9tUEKMNCmSo32GOgzJ8J2&oh=00_AYDiOvvRfxhHaK9z91GnGiOgK6QwhdfZo1VoZj485X31XQ&oe=6721D26F"
          alt="Delegates"
          className="rounded-lg cursor-pointer h-80 w-full object-cover lg:h-96"
        />
      </div>
    </div>
  );
}
