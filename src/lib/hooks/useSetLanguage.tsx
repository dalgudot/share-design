import { useSelector } from 'react-redux';

export const useSetLanguage = (t: any) => {
  const lang = useSelector((state: any) => state.language);

  return `${lang}` === 'ko' ? t.k : t.e;
};
