import styled from 'styled-components';
import TextStyle from '../typography/atoms/text-style';
import { fontWeight } from '../typography/atoms/font';
import { useRipple } from 'react-use-ripple';
import { useRef } from 'react';
import { t } from '../index/lang/t';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';

const LangChangeButton = () => {
  const themeContext = useContext(ThemeContext);

  const router = useRouter();
  const locale = router.locale;
  const setLanguageChange = () => {
    locale === 'ko'
      ? router.push(router.pathname, router.pathname, { locale: 'en' })
      : router.push(router.pathname, router.pathname, { locale: 'ko' });
  };

  // useRipple
  const btnRef = useRef(null);
  useRipple(btnRef, {
    rippleColor: 'rgba(0, 0, 0, 0.3)',
    animationLength: 600,
    rippleSize: 2000,
  });

  return (
    <motion.button
      onClick={setLanguageChange}
      ref={btnRef}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.1 },
      }}
    >
      <BtnStyle>
        <TextStyle
          type="p"
          text={useSetLanguage(t.langChagneButton)}
          textSize="single14"
          weight={fontWeight[700]}
          color={themeContext.gray1}
        />
      </BtnStyle>
    </motion.button>
  );
};

export default LangChangeButton;

const BtnStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 128px;
  height: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.PrimaryBorderRadius};
  background-color: ${({ theme }) => theme.gray7};
`;
