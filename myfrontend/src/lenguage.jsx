import { useTranslation , Trans } from 'react-i18next';

//Lenguage Change 
function Lenguage({ value }) {
  const { t } = useTranslation();
  return ( <>{t(value)}</>);
}

export default Lenguage