import styled from 'styled-components';
import { t } from '../page/index/text/t';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import IconLanguage24 from '../../elements/svg/icon_language_24';
import PMedium700 from '../../elements/typography/p-medium-700';
import { useWindowWidth } from '../../lib/hooks/useWindowWidth';
import { useRouter } from 'next/router';

const LangChangeToggle = () => {
  const themeContext = useContext(ThemeContext);

  const router = useRouter();
  const locale = router.locale;
  const setLanguageChange = () => {
    locale === 'ko'
      ? router.push(router.pathname, router.pathname, { locale: 'en' })
      : router.push(router.pathname, router.pathname, { locale: 'ko' });
  };

  // 768을 기준으로 토글 글씨의 크기가 바뀌고, 그에 따라 글씨의 너비가 바뀌기 때문에 움직이는 x 좌표의 거리도 바뀐다.
  const width: number = useWindowWidth();

  return (
    <Container onClick={setLanguageChange}>
      <IconLanguage24 color={themeContext.gray2} />
      <motion.div //
        variants={koVariants(width)}
        animate={locale === 'ko' ? 'on' : 'off'}
      >
        <PMedium700
          text={t.header.langChangeToggleKo}
          color={locale === 'ko' ? themeContext.gray2 : themeContext.gray5}
        />
      </motion.div>
      <Divider />
      <motion.div //
        variants={enVariants(width)}
        animate={locale === 'en' ? 'on' : 'off'}
      >
        <PMedium700
          text={t.header.langChangeToggleEn}
          color={locale === 'en' ? themeContext.gray2 : themeContext.gray5}
        />
      </motion.div>
    </Container>
  );
};

export default LangChangeToggle;

// Framer Motion
const koVariants = (width: number) => {
  if (width < 768) {
    return {
      on: { x: 0 },
      off: { x: 32 },
    };
  } else {
    return {
      on: { x: 0 },
      off: { x: 35 },
    };
  }
};

const enVariants = (width: number) => {
  if (width < 768) {
    return {
      on: { x: -32 },
      off: { x: 0 },
    };
  } else {
    return {
      on: { x: -35 },
      off: { x: 0 },
    };
  }
};

const Container = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0 12px 12px;
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};

  div {
    margin-left: 6px;
    margin-bottom: 2px;
  }
`;

const Divider = styled.span`
  height: 12px;
  width: 1px;
  margin-top: 2px;
  margin-left: 6px;
  background-color: ${({ theme }) => theme.gray6};
`;
