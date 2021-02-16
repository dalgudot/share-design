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
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { mediaBreakPoint } from '../../../../styles/common';
import AloneButton from '../../../button/alone-button';
import { t } from '../../../../data/index/t';
import PMedium700 from '../../../../elements/typography/p-medium-700';
import { fadeInOut } from '../../../../elements/framer-motion/variants';
import { useDispatch, useSelector } from 'react-redux';

const ShareModal = ({ showToast }: { showToast: Function }) => {
  const router = useRouter();
  const routerPathName: string = router.pathname;

  const routerLocale = router.route;
  console.log(`routerLocale: ${routerLocale}`);

  const url: string = `https://share-design.kr${routerPathName}`;
  const openModal = useSelector((state: any) => state.openModal);
  const modalZIndexHandler = useSelector(
    (state: any) => state.modalZIndexHandler
  );
  console.log(`openModal: ${openModal}`);
  console.log(`modalZIndexHandler: ${modalZIndexHandler}`);

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
    OPEN_MODAL();
    setTimeout(() => MODAL_Z_INDEX_HANDLER(), 400); // 사라지는 애니메이션 위한 시간, Framer Varianst와 시간 통일
  };

  return (
    <>
      <BackgroundBlurMotion
        variants={fadeInOut}
        initial={false}
        animate={openModal === true ? 'animate' : 'initial'}
        openModal={openModal}
        modalZIndexHandler={modalZIndexHandler}
      />
      <DivMotion
        variants={fadeInOut}
        initial={false}
        animate={openModal === true ? 'animate' : 'initial'}
        openModal={openModal}
        modalZIndexHandler={modalZIndexHandler}
      >
        <UlMotion>
          <LiMotion>
            <FacebookShareButton url={url} className="list__common">
              <IconShareFacebook24 />
              <PMedium700 text={t.shareModal.facebook} color="gray1" />
            </FacebookShareButton>
          </LiMotion>

          <LiMotion>
            <LinkedinShareButton url={url} className="list__common">
              <IconShareLinkedin24 />
              <PMedium700 text={t.shareModal.linkedin} color="gray1" />
            </LinkedinShareButton>
          </LiMotion>

          <LiMotion>
            <TwitterShareButton url={url} className="list__common">
              <IconShareTwitter24 />
              <PMedium700 text={t.shareModal.twitter} color="gray1" />
            </TwitterShareButton>
          </LiMotion>

          {/* CopyToClipboard 밑에는 자식 컴포넌트 1개만 가능 */}
          <LiMotion>
            <CopyToClipboard
              text={url}
              onCopy={() => showToast(t.shareModal.toastMessage)}
            >
              <CopyURLWrap className="list__common">
                <IconShareCopyURL24 />
                <PMedium700 text={t.shareModal.copyURL} color="gray1" />
              </CopyURLWrap>
            </CopyToClipboard>
          </LiMotion>

          <button onClick={closeModal}>
            <AloneButton
              size="small"
              btnText={t.closeButton}
              marginTop="36px"
            />
          </button>
        </UlMotion>
      </DivMotion>
    </>
  );
};

export default ShareModal;

type modalHandlerType = {
  openModal: boolean;
  modalZIndexHandler: boolean;
};

const BackgroundBlurMotion = styled(motion.div)<modalHandlerType>`
  // 사라지는 애니메이션에서 z-index 조건 순서가 중요
  z-index: ${({ openModal, modalZIndexHandler, theme }) =>
    modalZIndexHandler === false && openModal === false
      ? -2
      : theme.zIndex.ModalBackgroundBlur};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  color: ${({ theme }) => theme.gray8};
  -webkit-backdrop-filter: blur(80px) saturate(120%) brightness(95%)
    hue-rotate(10deg);
  backdrop-filter: blur(80px) saturate(120%) brightness(95%) hue-rotate(10deg);
`;

const DivMotion = styled(motion.div)<modalHandlerType>`
  // 사라지는 애니메이션에서 z-index 조건 순서가 중요
  z-index: ${({ openModal, modalZIndexHandler, theme }) =>
    modalZIndexHandler === false && openModal === false
      ? -2
      : theme.zIndex.Modal};
  position: absolute;
  top: 50%;
  transform: translateY(-52%);
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
  padding: 20px 36px 24px; // top은 20px + 16px(Li margin-top)

  .list__common {
    display: flex;
    align-items: center;
  }
`;

const LiMotion = styled(motion.li)`
  cursor: pointer;
  width: 100%;
  padding-top: 24px;
  padding-bottom: 24px;
  border-bottom: solid 1px ${({ theme }) => theme.gray7};

  button {
    width: 100%;
    height: 100%;
  }

  p {
    margin-left: 16px;
  }
`;

const CopyURLWrap = styled.div``;
