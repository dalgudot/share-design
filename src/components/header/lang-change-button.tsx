import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { uiUxDesign } from '../../data/article/ui-ux-design/1';
import PSmall700 from '../../elements/typography/p-small-700';
import { useRef } from 'react';
import { useMyRipple } from '../../lib/hooks/useMyRipple';

const LangChangeButton = ({ text }: { text: object }) => {
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
  };

  // const buttonRef = useRef(null);
  // useMyRipple(buttonRef);

  return (
    <MotionButton
      // ref={buttonRef}
      onClick={setLanguageChange}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.97 }}
    >
      <PSmall700 text={text} color="gray1" />
    </MotionButton>
  );
};

export default LangChangeButton;

const MotionButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 30px;
  margin: 0 auto;
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  background-color: ${({ theme }) => theme.gray6__30};
`;
