"use client";
import SlidesContainer from "@/components/SlidesContainer";

const images = [
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/drefbaza84g3qdz1gkwj",
    className: "object-cover w-full h-full",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/ufl2ch4ywyaomin9gaf5",
    className: "object-cover w-full h-full",
  },
  {
    src: "https://res.cloudinary.com/dz7wroord/image/upload/f_auto,q_auto/v1/CasaLalla-VNor/gqv9wtwifxewduw2bkxl",
    className: "object-cover w-full h-full",
  },
];

const Slides = () => {
  return <SlidesContainer images={images} />;
};

export default Slides;
