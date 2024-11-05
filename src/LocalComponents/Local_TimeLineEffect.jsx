import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export default function Local_TimeLineEffect() {
  const data = [
    {
      title: "2005",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Born in Gumla, Jharkhand on 27th August 2005. The journey started
            here!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/image1.jpg"
              alt="Gumla"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/image2.jpg"
              alt="Jharkhand vibes"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Wrote my first "Hello World" in Class 8th. This coding spark lit the
            way to bigger things!
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/hello-world1.jpg"
              alt="First Hello World"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/hello-world2.jpg"
              alt="Early Coding Days"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2021",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Joined DAV Public School in Gumla, completed Xth here. Got serious
            about studies but never left that tech spark.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/school1.jpg"
              alt="School memories"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/school2.jpg"
              alt="DAV Public School"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Passed XII and took a drop for JEE. When JEE prep got too much, I
            chilled by doing web dev—started messing with Next.js, Tailwind, and
            more.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/jee-prep1.jpg"
              alt="JEE Prep Breaks"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/jee-webdev.jpg"
              alt="Web Dev Sessions"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 dark:text-neutral-200 md:text-sm">
            Finally got into BIT Mesra, ECE! The hard work paid off, and now
            it’s time to build something big.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/bit-campus1.jpg"
              alt="BIT Mesra Campus"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
            <Image
              src="/bit-campus2.jpg"
              alt="Life at BIT"
              width={500}
              height={500}
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
