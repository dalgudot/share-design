import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconShareFacebook24 from '../../../../foundation/svg/icon_share_facebook_24';
import IconShareLinkedin24 from '../../../../foundation/svg/icon_share_linkedin_24';
import IconShareTwitter24 from '../../../../foundation/svg/icon_share_twitter_24';
import IconShareCopyURL24 from '../../../../foundation/svg/icon_share_copyURL_24';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mediaBreakPoint } from '../../../../styles/common';
import { t } from '../../../../data/index/t-index';
import PLarge from '../../../../foundation/typography/p-large';
import {
  listUp,
  stagger,
  buttonVariants,
  ModalScaleEffect,
} from '../../../../foundation/framer-motion/variants';
import { useToast } from '../../toast/useToast';
import { useModal } from '../useModal';
import PMedium from '../../../../foundation/typography/p-medium';

const ShareModal = () => {
  const url = window.location.href; // current URL
  const { showToast } = useToast();
  const { closeModal } = useModal();

  return (
    <>
      <MotionContainer
        variants={ModalScaleEffect}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <MotionUl
          variants={stagger}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <FacebookShareButton url={url}>
            <MotionLi variants={listUp}>
              <IconShareFacebook24 />
              <motion.div //
                variants={buttonVariants}
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <PLarge
                  text={t.shareModal.facebook}
                  color="gray1"
                  weight={700}
                />
              </motion.div>
            </MotionLi>
          </FacebookShareButton>

          <LinkedinShareButton url={url}>
            <MotionLi variants={listUp}>
              <IconShareLinkedin24 />
              <motion.div //
                variants={buttonVariants}
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <PLarge
                  text={t.shareModal.linkedin}
                  color="gray1"
                  weight={700}
                />
              </motion.div>
            </MotionLi>
          </LinkedinShareButton>

          <TwitterShareButton url={url}>
            <MotionLi variants={listUp}>
              <IconShareTwitter24 />
              <motion.div //
                variants={buttonVariants}
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <PLarge
                  text={t.shareModal.twitter}
                  color="gray1"
                  weight={700}
                />
              </motion.div>
            </MotionLi>
          </TwitterShareButton>

          <CopyToClipboard
            text={url}
            onCopy={() => showToast(t.shareModal.toastMessage)}
          >
            <MotionLi variants={listUp}>
              <IconShareCopyURL24 />
              <motion.div //
                variants={buttonVariants}
                whileHover="whileHover"
                whileTap="whileTap"
              >
                <PLarge
                  text={t.shareModal.copyURL}
                  color="gray1"
                  weight={700}
                />
              </motion.div>
            </MotionLi>
          </CopyToClipboard>

          <MotionCloseButton
            onClick={() => closeModal()}
            variants={buttonVariants}
            whileHover="whileHover"
            whileTap="whileTap"
          >
            <PMedium text={t.closeButton} color="gray2" weight={700} />
          </MotionCloseButton>
        </MotionUl>
      </MotionContainer>
    </>
  );
};

export default ShareModal;

const MotionContainer = styled(motion.div)`
  z-index: ${({ theme }) => theme.zIndex.Modal};
  position: fixed;
  top: 23%;
  left: 0;
  right: 0;
  justify-content: center;
  min-width: 420px;
  max-width: 420px;
  margin: 0 auto;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    min-width: 40vw;
    max-width: 420px;
    top: 15vh;
    padding: ${({ theme }) => theme.padding.LeftRightPadding};
  }
`;

const MotionUl = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  background-color: ${({ theme }) => theme.gray8};
  border: solid 1px ${({ theme }) => theme.gray7};
  padding: 20px 40px 28px; // top은 20px + 16px(Li margin-top)

  button {
    width: 100%;
    height: 100%;
  }
`;

const MotionLi = styled(motion.li)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: solid 1px ${({ theme }) => theme.gray7};
  display: flex;
  align-items: center;

  p {
    margin-left: 16px;
  }
`;

const MotionCloseButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.gray7};
  padding: 18px 28px;

  max-width: 72px;
  border-radius: 23px;
  margin-top: 36px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    max-width: 48px;
    border-radius: 21px;
    margin-top: 28px;
  }
`;
