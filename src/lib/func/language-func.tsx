import { useSelector } from 'react-redux';

const languageFunc = (t: any) => {
  const lang = useSelector((state: any) => state.language);

  return `${lang}` === 'ko' ? t.k : t.e;
};

export default languageFunc;
