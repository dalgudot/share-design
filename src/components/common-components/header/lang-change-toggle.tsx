import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import IconLanguage24 from '../../../foundation/svg/icon_language_24';
import { useWindowWidth } from '../../../lib/hooks/useWindowWidth';
import { useRouter } from 'next/router';
import useScrollPosition from '../../../lib/hooks/useScrollPosition';
import { mediaBreakPoint } from '../../../styles/common';
import PMedium from '../../../foundation/typography/p-medium';

const LangChangeToggle = ({
  setFinalToggle,
}: {
  setFinalToggle?: Function;
}) => {
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

  // mediaBreakPoint.first를 기준으로 토글 글씨의 크기가 바뀌고, 그에 따라 글씨의 너비가 바뀌기 때문에 움직이는 x 좌표의 거리도 바뀐다.
  const width: number = useWindowWidth();
  const stringMediaBreakPoint = mediaBreakPoint.first.replace('px', '');
  const numberMediaBreakPoint = Number(stringMediaBreakPoint);

  // Header에서 언어 전환 토글로 언어 전환했을 때 스크롤 유지
  const ScrollY = useScrollPosition();
  useEffect(() => {
    window.scrollTo(0, ScrollY);
  }, [locale]);

  return (
    <ButtonContainer onClick={setLanguageChange}>
      <IconLanguage24 />
      <motion.div //
        variants={koVariants(width, numberMediaBreakPoint)}
        initial={false} // en으로 접속했을 때 애니메이션 작동 안 하도록 initial 설정
        animate={locale === 'ko' ? 'on' : 'off'}
        className="korean-width"
      >
        <PMedium
          text="Korean"
          color={locale === 'ko' ? 'gray0' : 'gray4'}
          weight={700}
        />
      </motion.div>
      <Divider />
      <motion.div //
        variants={enVariants(width, numberMediaBreakPoint)}
        initial={false} // en으로 접속했을 때 애니메이션 작동 안 하도록 initial 설정
        animate={locale === 'en' ? 'on' : 'off'}
        className="english-width"
      >
        <PMedium
          text="English"
          color={locale === 'en' ? 'gray0' : 'gray4'}
          weight={700}
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
  padding: 12px 0; // touch area
  margin-right: 24px;

  div {
    margin-bottom: 2px;
    margin-left: 6px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      display: none;
    }
  }

  .korean-width {
    width: 60px; // 58 + 2
  }

  .english-width {
    width: 60px;
  }
`;

const Divider = styled.div`
  height: 12px;
  width: 1px;
  margin-top: 2px;
  background-color: ${({ theme }) => theme.gray5};
`;

// Framer Motion
const koVariants = (width: number, numberMediaBreakPoint: number) => {
  // if (width <= numberMediaBreakPoint) {
  //   return {
  //     on: { x: 0 },
  //     off: { x: 33 },
  //   };
  // } else {
  return {
    on: { x: 1 },
    off: { x: 73 }, // 60 + 6 + 1 + 6
  };
  // }
};

const enVariants = (width: number, numberMediaBreakPoint: number) => {
  // if (width <= numberMediaBreakPoint) {
  //   return {
  //     on: { x: -33 },
  //     off: { x: 0 },
  //   };
  // } else {
  return {
    on: { x: -73 }, //
    off: { x: 0 },
  };
  // }
};
