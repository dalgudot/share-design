import { useRouter } from 'next/router';
import { tType } from '../../../type';

// Static Type Checking
// https://stackoverflow.com/questions/43338763/typescript-property-does-not-exist-on-type-object

// 2021.05.08 k, e 모두 입력할 필요 없도록 변경
export const useSetLanguage = (t: tType): string => {
  const router = useRouter();
  const locale = router.locale;
  const returnString =
    typeof t === 'object' ? (locale === 'ko' ? t.k : t.e) : t;

  return returnString;
};
