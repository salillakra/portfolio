import Image from "next/image";
import React from "react";

const Page = () => {
  const meme = [
    "https://c.tenor.com/35cZ2D0obcwAAAAC/tenor.gif",
    "https://c.tenor.com/Xxr7WQVkwQAAAAAC/tenor.gif",
    "https://c.tenor.com/RsGccAKKOcUAAAAC/tenor.gif",
  ];

  let randommeme = meme[Math.floor(Math.random() * 3)];
  console.log(randommeme);
  return (
    <div className="grid h-screen place-items-center">
      <Image src={randommeme} height={400} width={400} alt="meme" />
    </div>
  );
};

export default Page;
