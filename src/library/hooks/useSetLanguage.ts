import { useRouter } from 'next/router';

export const useSetLanguage = (t: any): string => {
  const router = useRouter();
  const locale = router.locale;

  return locale === 'ko' ? t.k : t.e;
};
