import H2HeadlineMedium from '../components/typography/headline-medium';
import { t } from '../components/index/lang/t';

const Subscribe = () => {
  return (
    <>
      {/* 유튜브 알림을 설정해 놓으셨다면 유튜브 구독을 */}
      <a
        href="https://www.youtube.com/channel/UCp0yRLYV6wl33i2-XBgGa2g?sub_confirmation=1"
        target="_blank"
      >
        <H2HeadlineMedium text={t.shareDesign} marginTop="24px" />
      </a>

      {/* 유튜브 알림을 설정해놓지 않으셨다면 스티비 구독을 */}
      <a href="https://page.stibee.com/subscriptions/96987" target="_blank">
        <H2HeadlineMedium text={t.shareDesign} marginTop="24px" />
      </a>
    </>
  );
};

export default Subscribe;
