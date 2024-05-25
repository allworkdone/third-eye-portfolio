"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";
import Image from "next/image";

const content = [
    {
        title: "KUNAL LINGWAL",
        description:
            "Full stack developer, holding expertise in MERN stack with 6 months in industry experience ",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Collaborative Editing
            </div>
        ),
    },
    {
        title: "ABHISHEK KUMAR",
        description:
            "Full stack developer , holding expertise in linux development with 1+ years of experience",
        content: (
            <div className="h-full w-full  flex items-center justify-center text-white">
                <Image
                    src="/profile.png"
                    width={300}
                    height={300}
                    className="h-full w-full object-cover"
                    alt="linear board demo"
                />
            </div>
        ),
    },
    {
        title: "PURUSHOTTAM KUMAR",
        description:
            "MEAN stack developer holding expertise in backend-development with 1+ years of experience",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
                Version control
            </div>
        ),
    },
    {
        title: "TEJUS ",
        description:
            "Java full stack developer holding expertise in java-backend-development with 6 months of experience",
        content: (
            <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
    },
    {
        title: "SAKSHI KUMAR",
        description:
            "MEAN stack developer holding expertise in backend-development with 1+ years of experience",
        content: (
            <div className="h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center text-white">
                Running out of content
            </div>
        ),
    },
];
export function StickyScrollRevealDemo() {
    return (
        <div className="p-10 ">
            <StickyScroll content={content} />
        </div>
    );
}
