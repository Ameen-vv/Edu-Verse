import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const HeroSection: React.FC = () => {
  const { t } = useTranslation("translation", { keyPrefix: "heroSection" });
  const Navigate = useNavigate();

  return (
    <div className="relative py-16 lg:pt-0">
      <div className="lg:flex lg:flex-row-reverse lg:items-center">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src="images/bg-2.jpg"
            alt=""
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl lg:flex-col">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-blue-950 sm:text-4xl sm:leading-none">
              {t("heroTitle")}
            </h2>

            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              {t("heroDesc")}
            </p>
            <div className="flex items-center">
              <a className="inline-flex items-center justify-center   p-2 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-950 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none hover:bg-blue-400 cursor-pointer" onClick={()=>Navigate('/about')}>
                {t("button1")}
              </a>
              <a
                aria-label=""
                className="inline-flex items-center font-semibold bg-blue-400 px-5 p-2 rounded text-white transition-colors duration-200 hover:bg-blue-950 cursor-pointer"
                onClick={()=>Navigate('/faq')}
              >
                {t("button2")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
