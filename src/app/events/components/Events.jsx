"use client";
import React from "react";
import { useTranslation } from "react-i18next";

const Events = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col justify-start items-start gap-5 px-5 lg:px-10">
      <h1 className="text-[20px] tracking-wider lg:text-[28px] lg:leading-[38px] leading-[36px] text-secondary font-eiko font-thin text-justify">
        {t("events.title")}
      </h1>
      <p className="text-[13px] lg:text-[15px] leading-[24.5px] text-justify text-primary">
        {t("events.content")}
      </p>
    </div>
  );
};

export default Events;
