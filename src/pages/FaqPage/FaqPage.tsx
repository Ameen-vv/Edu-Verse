import FaqItems from "../../components/FaqItems/FaqItems"
import { useTranslation } from 'react-i18next';

const FaqPage:React.FC = () => {

  const { t } = useTranslation('translation',{keyPrefix:'faq'}) 

  return (
    <section className="relative  overflow-hidden bg-blue-50 pt-20 pb-12 lg:pt-10 lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                {t('title')}
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
              {t('subTitle')}
              </h2>
              
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <FaqItems
              header={t('qstn1.qstn')}
              text={t('qstn1.ans')}
            />
            <FaqItems
              header={t('qstn2.qstn')}
              text={t('qstn2.ans')}
            />
            <FaqItems
              header={t('qstn3.qstn')}
              text={t('qstn3.ans')}
            />
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <FaqItems
              header={t('qstn4.qstn')}
              text={t('qstn4.ans')}
            />
            <FaqItems
              header={t('qstn5.qstn')}
              text={t('qstn5.ans')}
            />
            <FaqItems
              header={t('qstn6.qstn')}
              text={t('qstn6.ans')}
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}

export default FaqPage
