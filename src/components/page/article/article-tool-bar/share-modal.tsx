import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
} from 'react-share';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import IconShareFacebook24 from '../../../../elements/svg/icon_share_facebook_24';
import IconShareLinkedin24 from '../../../../elements/svg/icon_share_linkedin_24';
import IconShareTwitter24 from '../../../../elements/svg/icon_share_twitter_24';
import IconShareCopyURL24 from '../../../../elements/svg/icon_share_copyURL_24';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mediaBreakPoint } from '../../../../styles/common';
import AloneButton from '../../../button/alone-button';
import { t } from '../../../../data/index/t';
import PMedium700 from '../../../../elements/typography/p-medium-700';
import {
  btnHoverTap,
  fadeInOut,
  listUp,
  stagger,
  ScaleDownInUpOut,
} from '../../../../elements/framer-motion/variants';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useRef } from 'react';
import { useMyRipple } from '../../../../lib/hooks/useMyRipple';
import { useRouter } from 'next/router';

const ShareModal = ({ showToast }: { showToast: Function }) => {
  const url = window.location.href; // 현재 URL
  // console.log(url);

  const openModal = useSelector((state: any) => state.openModal);
  const modalZIndexHandler = useSelector(
    (state: any) => state.modalZIndexHandler
  );
  // console.log(`openModal: ${openModal}`);
  // console.log(`modalZIndexHandler: ${modalZIndexHandler}`);

  const dispatch = useDispatch();
  const OPEN_MODAL = () =>
    dispatch({
      type: 'OPEN_MODAL',
    });
  const MODAL_Z_INDEX_HANDLER = () =>
    dispatch({
      type: 'MODAL_Z_INDEX_HANDLER',
    });

  const closeModal = () => {
    OPEN_MODAL(); // to false
    setTimeout(() => MODAL_Z_INDEX_HANDLER(), 400); // 사라지는 애니메이션 위한 시간, Framer Varianst와 시간 통일
  };

  // Modal 켜져 있는데 화면 이동하면 Modal 종료
  const router = useRouter();
  useEffect(() => {
    if (modalZIndexHandler === true && openModal === true) {
      OPEN_MODAL();
      MODAL_Z_INDEX_HANDLER();
    }
  }, [router.pathname]);

  const facebookRef = useRef(null);
  const linkedinRef = useRef(null);
  const twitterRef = useRef(null);
  const copyURLRef = useRef(null);
  useMyRipple(facebookRef);
  useMyRipple(linkedinRef);
  useMyRipple(twitterRef);
  useMyRipple(copyURLRef);

  return (
    <>
      <BackgroundBlurMotion
        variants={fadeInOut}
        initial={false}
        animate={openModal === true ? 'animate' : 'initial'}
        openModal={openModal}
        modalZIndexHandler={modalZIndexHandler}
        onClick={closeModal}
      />
      <DivMotion
        variants={ScaleDownInUpOut}
        initial="initial"
        animate={openModal === true ? 'animate' : 'initial'}
        openModal={openModal}
        modalZIndexHandler={modalZIndexHandler}
      >
        <UlMotion //
          variants={stagger}
          initial={false}
          animate={openModal === true ? 'animate' : 'initial'}
        >
          <FacebookShareButton url={url} className="list__common">
            <LiMotion ref={facebookRef}>
              <IconShareFacebook24 />
              <motion.div //
                variants={btnHoverTap}
                whileHover="whileHover"
              >
                <PMedium700 text={t.shareModal.facebook} color="gray1" />
              </motion.div>
            </LiMotion>
          </FacebookShareButton>

          <LinkedinShareButton url={url} className="list__common">
            <LiMotion ref={linkedinRef} variants={listUp}>
              <IconShareLinkedin24 />
              <motion.div //
                variants={btnHoverTap}
                whileHover="whileHover"
              >
                <PMedium700 text={t.shareModal.linkedin} color="gray1" />
              </motion.div>
            </LiMotion>
          </LinkedinShareButton>

          <TwitterShareButton url={url} className="list__common">
            <LiMotion ref={twitterRef} variants={listUp}>
              <IconShareTwitter24 />
              <motion.div //
                variants={btnHoverTap}
                whileHover="whileHover"
              >
                <PMedium700 text={t.shareModal.twitter} color="gray1" />
              </motion.div>
            </LiMotion>
          </TwitterShareButton>

          {/* CopyToClipboard 밑에는 자식 컴포넌트 1개만 가능 */}
          <CopyToClipboard
            text={url}
            onCopy={() => showToast(t.shareModal.toastMessage)}
          >
            <LiMotion ref={copyURLRef} variants={listUp}>
              <IconShareCopyURL24 />
              <motion.div //
                variants={btnHoverTap}
                whileHover="whileHover"
              >
                <PMedium700 text={t.shareModal.copyURL} color="gray1" />
              </motion.div>
            </LiMotion>
          </CopyToClipboard>

          <motion.button onClick={closeModal} variants={listUp}>
            <AloneButton
              size="small"
              btnText={t.closeButton}
              marginTop="36px"
            />
          </motion.button>
        </UlMotion>
      </DivMotion>
    </>
  );
};

export default React.memo(ShareModal);

type modalHandlerType = {
  openModal: boolean;
  modalZIndexHandler: boolean;
};

const BackgroundBlurMotion = styled(motion.div)<modalHandlerType>`
  overflow-x: hidden;
  overflow-y: hidden;
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

const DivMotion = styled(motion.div)<modalHandlerType>`
  overflow-x: hidden;
  overflow-y: hidden;
  // 사라지는 애니메이션에서 z-index 조건 순서가 중요
  z-index: ${({ openModal, modalZIndexHandler, theme }) =>
    modalZIndexHandler === false && openModal === false
      ? -2
      : theme.zIndex.Modal};
  display: ${({ openModal, modalZIndexHandler }) =>
    modalZIndexHandler === false && openModal === false ? 'none' : 'block'};
  position: absolute;
  top: 50%;
  transform: translateY(-50%); // framer-motion에 영향
  left: 0;
  right: 0;
  margin: 0 auto;
  max-width: 400px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: ${({ theme }) => theme.padding.MobileWrap};
  }
`;

const UlMotion = styled(motion.ul)`
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

const LiMotion = styled(motion.li)`
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