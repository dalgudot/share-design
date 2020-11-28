import { useSelector } from 'react-redux';

const languageFunc = (t) => {
  const lang = useSelector((state) => state.language);

  return `${lang}` === 'ko' ? t.k : t.e;
};

export default languageFunc;
