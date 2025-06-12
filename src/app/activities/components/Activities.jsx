"use client";
import Link from "next/link";
import Accordion from "./Accordion";
import { useTranslation } from "react-i18next";

const Activities = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full h-full flex flex-col justify-start items-center gap-1 text-center  px-5 lg:px-10">
      <h1 className="text-[20px] tracking-wider lg:text-[28px] lg:leading-[38px] leading-[36px] text-secondary font-eiko font-thin  mb-5">
        {t("activities.title")}
      </h1>
      <Accordion />
      <Link
        href="/custom-booking"
        className="mt-8 py-2 px-8 w-full uppercase tracking-widest border border-secondary text-secondary rounded-lg text-[12px] leading-[34px] hover:bg-secondary hover:text-white duration-200 transition-all ease-out"
      >
        {t("activities.book_experience")}
      </Link>
    </div>
  );
};

export default Activities;
