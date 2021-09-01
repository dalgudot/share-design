import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import PSmall from '../../../foundation/typography/p-small';
import PMedium from '../../../foundation/typography/p-medium';

const LangChangeButton = ({
  text,
  setfirstToggle,
}: {
  text:
    | {
        k: string;
        e: string;
      }
    | string;
  setfirstToggle: Function;
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

    setfirstToggle(true);
  };

  return (
    <MotionButton
      onClick={setLanguageChange}
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{ scale: 0.97 }}
    >
      <PMedium text={text} color="gray1" weight={700} />
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
  background-color: ${({ theme }) => theme.gray6};
`;
