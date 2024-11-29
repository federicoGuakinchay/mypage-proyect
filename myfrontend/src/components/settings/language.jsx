import React from 'react';
import { useTranslation } from 'react-i18next';

//  this function  return a uatomatict  translate for a  html  component
export const TranlateComponent = React.memo(({ value }) => {
  const { t } = useTranslation();
  const translatedText = t(value);
  return <>{translatedText}</>;
});

//  this function  return a uatomatict  translate for save this in a var 
export const TranslateValue = (( value ) => {
  const { t } = useTranslation();
  const translatedText = t(value);
  return translatedText;
});