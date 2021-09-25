import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconShareFacebook24 from '../../../foundation/svg/icon_share_facebook_24';
import IconShareLinkedin24 from '../../../foundation/svg/icon_share_linkedin_24';
import IconShareTwitter24 from '../../../foundation/svg/icon_share_twitter_24';
import IconShareCopyURL24 from '../../../foundation/svg/icon_share_copyURL_24';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mediaBreakPoint } from '../../../styles/common';
import AloneButton from '../button/alone-button';
import { t } from '../../../data/index/t-index';
import PLarge from '../../../foundation/typography/p-large';
import {
  btnHoverTap,
  fadeInOut,
  listUp,
  stagger,
  ScaleDownInUpOut,
} from '../../../foundation/framer-motion/variants';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '../../../lib/hooks/useToast';

const ShareModal = () => {
  const url = window.location.href; // 현재 URL
  const { showToast } = useToast();

  // Modal 켜져 있는데 화면 이동하면 Modal 종료
  // const router = useRouter();
  // useEffect(() => {
  //   if (modalZIndexHandler === true && openModal === true) {
  //     OPEN_MODAL();
  //     MODAL_Z_INDEX_HANDLER();
  //   }
  // }, [router.pathname]);

  return (
    <>
      <MotionBackgroundBlur
        variants={fadeInOut}
        initial={false}
        animate={openModal === true ? 'animate' : 'initial'}
        openModal={openModal}
        modalZIndexHandler={modalZIndexHandler}
        onClick={closeModal}
      />
      <Wrap openModal={openModal} modalZIndexHandler={modalZIndexHandler}>
        <MotionDiv
          variants={ScaleDownInUpOut}
          initial={false}
          animate={openModal === true ? 'animate' : 'initial'}
          openModal={openModal}
          modalZIndexHandler={modalZIndexHandler}
        >
          <MotionUl //
            variants={stagger}
            initial={false}
            animate={openModal === true ? 'animate' : 'initial'}
          >
            <FacebookShareButton url={url} className="list__common">
              <MotionLi variants={listUp}>
                <IconShareFacebook24 />
                <motion.div //
                  variants={btnHoverTap}
                  whileHover="whileHover"
                >
                  <PLarge text={t.shareModal.facebook} color="gray1" />
                </motion.div>
              </MotionLi>
            </FacebookShareButton>

            <LinkedinShareButton url={url} className="list__common">
              <MotionLi variants={listUp}>
                <IconShareLinkedin24 />
                <motion.div //
                  variants={btnHoverTap}
                  whileHover="whileHover"
                >
                  <PLarge text={t.shareModal.linkedin} color="gray1" />
                </motion.div>
              </MotionLi>
            </LinkedinShareButton>

            <TwitterShareButton url={url} className="list__common">
              <MotionLi variants={listUp}>
                <IconShareTwitter24 />
                <motion.div //
                  variants={btnHoverTap}
                  whileHover="whileHover"
                >
                  <PLarge text={t.shareModal.twitter} color="gray1" />
                </motion.div>
              </MotionLi>
            </TwitterShareButton>

            {/* CopyToClipboard 밑에는 자식 컴포넌트 1개만 가능 */}
            <CopyToClipboard
              text={url}
              onCopy={() => showToast(t.shareModal.toastMessage)}
            >
              <MotionLi variants={listUp}>
                <IconShareCopyURL24 />
                <motion.div //
                  variants={btnHoverTap}
                  whileHover="whileHover"
                >
                  <PLarge text={t.shareModal.copyURL} color="gray1" />
                </motion.div>
              </MotionLi>
            </CopyToClipboard>

            <motion.button onClick={closeModal} variants={listUp}>
              <AloneButton btnText={t.closeButton} marginTop="36px" />
            </motion.button>
          </MotionUl>
        </MotionDiv>
      </Wrap>
    </>
  );
};

export default React.memo(ShareModal);

type MotionBackgroundBlurType = {
  openModal: boolean;
  modalZIndexHandler: boolean;
};

const MotionBackgroundBlur = styled(motion.div)<MotionBackgroundBlurType>`
  // 사라지는 애니메이션에서 z-index 조건 순서가 중요
  z-index: ${({ openModal, modalZIndexHandler, theme }) =>
    modalZIndexHandler === false && openModal === false
      ? -2
      : theme.zIndex.ModalBackgroundBlur};
  display: ${({ openModal, modalZIndexHandler }) =>
    modalZIndexHandler === false && openModal === false ? 'none' : 'block'};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.gray8};
  -webkit-backdrop-filter: blur(60px) saturate(120%) brightness(105%)
    hue-rotate(10deg);
  backdrop-filter: blur(60px) saturate(120%) brightness(105%) hue-rotate(10deg);
`;

type modalHandlerType = {
  openModal: boolean;
  modalZIndexHandler: boolean;
};

const Wrap = styled.div<MotionBackgroundBlurType>`
  // 사라지는 애니메이션에서 z-index 조건 순서가 중요
  z-index: ${({ openModal, modalZIndexHandler, theme }) =>
    modalZIndexHandler === false && openModal === false
      ? -2
      : theme.zIndex.Modal};

  // z-index가 -2더라도 위에 z-index가 높은 요소가 위에 없으면 눌리는 현상 발생
  // display 'none'으로 해결
  display: ${({ openModal, modalZIndexHandler }) =>
    modalZIndexHandler === false && openModal === false ? 'none' : 'flex'};

  position: fixed;
  top: 48%; // 세로 중앙정렬 시각 보정
  transform: translateY(-50%);
  left: 0;
  right: 0;
  justify-content: center;
`;

const MotionDiv = styled(motion.div)<modalHandlerType>`
  width: 100%;
  max-width: 400px;

  // 바뀌는 속성
  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: ${({ theme }) => theme.padding.LeftRightPadding};
  }
`;

const MotionUl = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.R13};
  background-color: ${({ theme }) => theme.gray8};
  padding: 20px 36px 28px; // top은 20px + 16px(Li margin-top)

  .list__common {
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
