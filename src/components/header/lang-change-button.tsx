import styled from 'styled-components';
import TextStyle from '../../elements/typography/atoms/text-style';
import { fontWeight } from '../../elements/typography/atoms/font';
import { useRef } from 'react';
import { t } from '../../data/index/t';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useRouter } from 'next/router';
import { useMyRipple } from '../../lib/hooks/useMyRipple';

const LangChangeButton = () => {
  const themeContext = useContext(ThemeContext);

  const router = useRouter();
  const locale = router.locale;
  const setLanguageChange = () => {
    locale === 'ko'
      ? router.push(router.pathname, router.pathname, { locale: 'en' })
      : router.push(router.pathname, router.pathname, { locale: 'ko' });
  };

  const btnRef = useRef(null);
  useMyRipple(btnRef);

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
          text={useSetLanguage(t.shareDesign)}
          textSize="small"
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
  border-radius: ${({ theme }) => theme.borderRadius.Primary};
  background-color: ${({ theme }) => theme.gray7};
`;
