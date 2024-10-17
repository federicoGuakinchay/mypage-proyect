import React from 'react';
import { useTranslation } from 'react-i18next';

// Language Component use react.memo to optimize 
const Language = React.memo(({ value }) => {
  const { t } = useTranslation();
  const translatedText = t(value);
  return <>{translatedText}</>;
});

export default Language