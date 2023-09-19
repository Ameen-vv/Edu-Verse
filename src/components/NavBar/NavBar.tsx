import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const {t,i18n} = useTranslation();
  const Navigate = useNavigate();

  const toggleDropdown = ():void => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = ():void => {
    setIsOpen(false);
  };

  const toggleMenu = ():void => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguage = (lang:string):void =>{
    i18n.changeLanguage(lang);
    closeDropdown();
  };

  const getCurrentLang = ():string => {
    switch (i18n.language) {
        case 'en':
            return 'English';
        case 'hn':
            return 'हिंदी';
        case'mal':
            return 'മലയാളം';
    
        default:
            return 'English';
    }
  }

  return (
    <div>
      
      <nav className="relative px-4 py-4 flex justify-between items-center bg-white">
        <a
          className="text-3xl font-bold leading-none p-2 flex items-center"
          href="#"
        >
          <img src="images/Logo.png" alt="" className="h-9 w-9" />
          <span className="text-lg font-bold ms-2 text-blue-900">{t('title')}</span>
        </a>
        <div className="lg:hidden">
          <button
            className="navbar-burger flex items-center text-blue-600 p-3"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2  lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6 ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500 cursor-pointer" onClick={()=>Navigate('/')}>
              {t('navBar.home')}
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500 cursor-pointer" onClick={()=>Navigate('/about')}>
            {t('navBar.about')}
            </a>
          </li>
          <li>
            <a className="text-sm text-gray-400 hover:text-gray-500 cursor-pointer" onClick={()=>Navigate('/faq')}>
            {t('navBar.faq')}
            </a>
          </li>
        </ul>
        {/*dropdown button*/}
        <div className="relative hidden lg:inline-block text-left" >
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
                {getCurrentLang()}
              <svg
                className={`-mr-1 h-5 w-5 text-gray-400 transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div
              className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                <button
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer w-full p-2 hover:bg-gray-200"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                  onClick={()=>handleLanguage('en')}
                >
                  English
                </button>
                <button
                  className="text-gray-700 block px-4 py-2 text-sm w-full p-2  hover:bg-gray-200"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                  onClick={()=>handleLanguage('hn')}
                >
                  हिंदी
                </button>
                <button
                  className="text-gray-700 block px-4 py-2 text-sm w-full p-2  hover:bg-gray-200"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                  onClick={()=>handleLanguage('mal')}
                >
                  മലയാളം
                </button>
              </div>
              
              
              
            </div>
          )}
        </div>
      </nav>
      {isMenuOpen && (
        <div className="navbar-menu relative z-50">
          <div
            className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
            onClick={toggleMenu}
          ></div>
          <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                {/* Your Logo */}
              </a>
              <button className="navbar-close" onClick={toggleMenu}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    onClick={()=>Navigate('/')}
                  >
                    {t('navBar.home')}
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    onClick={()=>Navigate('/about')}
                  >
                   {t('navBar.about')}
                  </a>
                </li>
                <li className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    onClick={()=>Navigate('/faq')}
                  >
                   {t('navBar.faq')}
                  </a>
                </li>
                {/* Add other menu items here */}
              </ul>
            </div>
            <div className="mt-auto">
            <div className="relative inline-block text-left" >
          <div>
            <button
              type="button"
              className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
              id="menu-button"
              aria-expanded={isOpen}
              aria-haspopup="true"
              onClick={toggleDropdown}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                />
              </svg>
                {getCurrentLang()}
              <svg
                className={`-mr-1 h-5 w-5 text-gray-400 transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {isOpen && (
            <div
              className="absolute left-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabIndex={-1}
            >
              <div className="py-1" role="none">
                <a
                  className="text-gray-700 block px-4 py-2 text-sm w-full p-2 hover:bg-gray-200"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-0"
                  onClick={()=>handleLanguage('en')}
                >
                  English<a
                  className="text-gray-700 block px-4 py-2 text-sm w-full p-2 hover:bg-gray-200"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                  onClick={()=>handleLanguage('hn')}
                >
                  हिंदी
                </a>
                </a>
                <a
                  className="text-gray-700 block px-4 py-2 text-sm w-full p-2 hover:bg-gray-200"
                  role="menuitem"
                  tabIndex={-1}
                  id="menu-item-1"
                  onClick={()=>handleLanguage('mal')}
                >
                  മലയാളം
                </a>
                
              </div>
              
              
              
            </div>
          )}
        </div>
             
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

export default Navbar;
