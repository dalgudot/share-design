import styled from 'styled-components';
import { t } from '../../data/index/t';
import { motion } from 'framer-motion';
import { useContext, useEffect } from 'react';
import { ThemeContext } from 'styled-components';
import IconLanguage24 from '../../foundation/svg/icon_language_24';
import PMedium700 from '../../foundation/typography/p-medium-700';
import { useWindowWidth } from '../../library/hooks/useWindowWidth';
import { useRouter } from 'next/router';
import useScrollPosition from '../../library/hooks/useScrollPosition';

const LangChangeToggle = ({
  setFinalToggle,
}: {
  setFinalToggle?: Function;
}) => {
  const themeContext = useContext(ThemeContext);
  const router = useRouter();
  const locale = router.locale;
  const setLanguageChange = () => {
    if (router.query === {}) {
      locale === 'ko'
        ? router.push(router.pathname, router.pathname, { locale: 'en' })
        : router.push(router.pathname, router.pathname, { locale: 'ko' });
    } else if (router.query !== {}) {
      // dynamic routing 고려한 조건
      locale === 'ko'
        ? router.push(router.asPath, router.asPath, { locale: 'en' })
        : router.push(router.asPath, router.asPath, { locale: 'ko' });
    }

    // ui-ux article 1 본문 중 2번째 언어 전환 토글 눌렀을 때 작동
    setFinalToggle && setFinalToggle(true);
  };

  // 768을 기준으로 토글 글씨의 크기가 바뀌고, 그에 따라 글씨의 너비가 바뀌기 때문에 움직이는 x 좌표의 거리도 바뀐다.
  const width: number = useWindowWidth();

  // Header에서 언어 전환 토글로 언어 전환했을 때 스크롤 유지
  const ScrollY = useScrollPosition();
  useEffect(() => {
    window.scrollTo(0, ScrollY);
  }, [locale]);

  return (
    <ButtonContainer onClick={setLanguageChange}>
      <IconLanguage24 color={themeContext.gray2} />
      <motion.div //
        variants={koVariants(width)}
        initial={false} // en으로 접속했을 때 애니메이션 작동 안 하도록 initial 설정
        animate={locale === 'ko' ? 'on' : 'off'}
      >
        <PMedium700
          text={t.header.langChangeToggleKo}
          color={locale === 'ko' ? 'gray2' : 'gray5'}
        />
      </motion.div>
      <Divider />
      <motion.div //
        variants={enVariants(width)}
        initial={false} // en으로 접속했을 때 애니메이션 작동 안 하도록 initial 설정
        animate={locale === 'en' ? 'on' : 'off'}
      >
        <PMedium700
          text={t.header.langChangeToggleEn}
          color={locale === 'en' ? 'gray2' : 'gray5'}
        />
      </motion.div>
    </ButtonContainer>
  );
};

export default LangChangeToggle;

const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 0 12px 12px; // 터치 영역

  div {
    margin-bottom: 2px;
    margin-left: 6px;
  }
`;

const Divider = styled.span`
  height: 12px;
  width: 1px;
  margin-top: 2px;
  background-color: ${({ theme }) => theme.gray6};
  margin-left: 6px;
`;

// Framer Motion
const koVariants = (width: number) => {
  if (width < 768) {
    return {
      on: { x: 0 },
      off: { x: 33 },
    };
  } else {
    return {
      on: { x: 0 },
      off: { x: 37 },
    };
  }
};

const enVariants = (width: number) => {
  if (width < 768) {
    return {
      on: { x: -33 },
      off: { x: 0 },
    };
  } else {
    return {
      on: { x: -37 },
      off: { x: 0 },
    };
  }
};
