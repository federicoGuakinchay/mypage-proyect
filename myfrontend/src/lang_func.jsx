import { useTranslation } from 'react-i18next';
const LangFunc = (( value ) => {
  const { t } = useTranslation();
  const translatedText = t(value);
  return translatedText;
});
export default (LangFunc)