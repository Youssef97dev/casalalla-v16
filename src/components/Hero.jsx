"use client";
import Image from "next/image";

const Hero = () => {
  //const { t } = useTranslation();
  return (
    <div id="hero" className="relative w-full h-screen">
      <div className="w-full h-full block lg:hidden">
        <video className="object-cover h-full w-full" autoPlay loop muted>
          <source src="/hero_video-2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="w-full h-full hidden lg:block lead">
        <Image
          src="/images/gallery-2.jpeg"
          alt="casa lalla takerkoust testaurant"
          height={2000}
          width={2000}
          className="object-cover h-full w-full rounded-md"
        />
      </div>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-30 hidden lg:block"></div>

      <div className="absolute opacity-60 lg:opacity-100 top-20 left-1/2 transform -translate-x-1/2 text-white z-40">
        <Image
          src={"/logo-2.png"}
          width={1000}
          height={1000}
          alt="casalalla tekerkoust"
          className={`w-32 lg:w-40`}
        />
      </div>
    </div>
  );
};

export default Hero;
