import React from "react";
import { useTranslation } from 'react-i18next';

const AboutPage: React.FC = () => {

  const { t } = useTranslation('translation',{keyPrefix:'aboutUs'})  

  const customStyle: React.CSSProperties = {
    backgroundImage: "url('images/bg-1.jpg')",
    backgroundPosition: "center center",
    backgroundBlendMode: "multiply",
    backgroundSize: "cover",
  };

  return (
    <div className=" text-blue-950">
      <div className="container grid grid-cols-12 mx-auto">
        <div
          className="flex flex-col justify-center col-span-12 align-middle bg-no-repeat bg-cover  lg:col-span-6 lg:h-auto"
          style={customStyle}
        >
          <div className="flex flex-col items-center p-8 py-12 text-center text-white">
            <h1 className="py-4 text-5xl font-bold">{t('title')}</h1>
            <p className="pb-6 font-semibold">
            {t('subTitle')}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-7 h-7"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col col-span-12 p-6 divide-y lg:col-span-6 lg:p-10 divide-gray-700">
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold">{t('mission.title')}</h1>
            <p>
            {t('mission.desc')}
            </p>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold">{t('whatSetUsApart.title')}</h1>
            <p>
            {t('whatSetUsApart.desc')}
            </p>
          </div>
          <div className="pt-6 pb-4 space-y-2">
            <h1 className="text-3xl font-bold">{t('joinUs.title')}</h1>
            <p>
            {t('joinUs.desc')}
            </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
