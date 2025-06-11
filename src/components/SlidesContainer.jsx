"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const SlidesContainer = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 3000ms

    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <>
      <div className="relative w-full h-[50vh] lg:h-screen">
        {images.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src.src}
              alt={`Image ${index + 1}`}
              width={2000}
              height={2000}
              className={src.className}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SlidesContainer;
