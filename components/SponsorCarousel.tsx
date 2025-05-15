"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const sponsors = [
    "/sponsors/boring_sponsor.jpg",
    "/sponsors/donjons_ponsor.jpg",
    "/sponsors/mathworks_sponsor.png",
    "/sponsors/pizzavalley_sponsor.jpeg",
    "/sponsors/sbi_sponsor.png",
];

export default function SponsorCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sponsors.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const handleThumbnailClick = (index: number) => {
    setCurrent(index);
  };

  return (
    <div className="flex flex-col items-center gap-4 py-8">
      {/* Main Display */}
      <div className="w-64 h-64 relative">
        <Image
          src={sponsors[current]}
          alt={`Sponsor ${current + 1}`}
          fill
          className="object-contain transition-opacity duration-500"
        />
      </div>

      {/* Thumbnails */}
      <div className="flex flex-wrap justify-center gap-2 mt-4">
        {sponsors.map((src, index) => (
          <div
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-16 h-16 border-2 rounded-lg cursor-pointer relative overflow-hidden ${
              current === index ? "border-blue-400" : "border-transparent"
            }`}
          >
            <Image
              src={src}
              alt={`Thumbnail ${index + 1}`}
              fill
              className="object-contain hover:opacity-80"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
