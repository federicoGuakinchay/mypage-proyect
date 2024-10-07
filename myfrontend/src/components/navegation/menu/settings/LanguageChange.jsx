//have to change this and put it in the navBar
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import argL from '../../../../assets/images/flag/arg/mid.webp' 
import usL from '../../../../assets/images/flag/us/mid.webp' 
function LanguageChange () {
  const { i18n } = useTranslation();
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang)
  };

  useEffect(() => {
    if (i18n.language === 'en') {
      document.querySelector('.us').classList.add('active');
      document.querySelector('.arg').classList.remove('active');
    } else {
      document.querySelector('.us').classList.remove('active');
      document.querySelector('.arg').classList.add('active');
    }
  }, [i18n.language]);

  return (
    <div className='flag-button-content' >
      <button onClick={() => {changeLanguage('en')}} className='flag-button' alt="change lenguage to english ">
        <img src={usL} alt="US Flag" className='flag us'/> 
      </button>
      <button onClick={() => {changeLanguage('es')}} className='flag-button' alt="cambiar lenguage al español">
      <img src={argL} alt="ARG Flag" className='flag arg'/>
      </button>
    </div>
  );
}

export default LanguageChange;