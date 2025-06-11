"use client";
import SlidesContainer from "@/components/SlidesContainer";

const images = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/hg0ykixiwpvehv9hdm4s",
    className: "object-cover w-full h-full object-left",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/nd6cpvhwcysfmindkleg",
    className: "object-cover w-full h-full object-right-bottom",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/jfdaoehyg6ro3ei6eeqs",
    className: "object-cover w-full h-full object-center-bottom",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/al4bcdkfinrevudk8zeq",
    className: "object-cover w-full h-full object-right",
  },
];

const Slides = () => {
  return <SlidesContainer images={images} />;
};

export default Slides;
