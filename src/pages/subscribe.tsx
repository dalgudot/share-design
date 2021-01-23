import H2HeadlineMedium from '../components/typography/h2-title-medium';
import { t } from '../components/index/lang/t';
import ThemeChangeButton from '../components/button/theme-change-button';

const Subscribe = () => {
  return (
    <>
      {/* 유튜브 알림을 설정해 놓으셨다면 유튜브 구독을 */}
      {/* 로그인 및 구독을 하게 하려면 상당히 많은 시간과 서버 비용 들 듯 */}
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
