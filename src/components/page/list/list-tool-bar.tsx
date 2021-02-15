import Router from 'next/router';
import styled from 'styled-components';
import IconHome24 from '../../../elements/svg/icon_home_24';
import { mediaBreakPoint } from '../../../styles/common';

const ListToolBar = ({
  backgroundGradient,
}: {
  backgroundGradient: string;
}) => {
  return (
    <HomeNav //
      onClick={() => Router.push('/')}
      backgroundGradient={backgroundGradient}
    >
      <IconHome24 />
    </HomeNav>
  );
};

export default ListToolBar;

const HomeNav = styled.nav<{ backgroundGradient: string }>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    ${({ backgroundGradient }) => backgroundGradient}
  );
  /* max-width: 500px; */
  margin: 0 auto;
  position: fixed;
  left: 0;
  right: 0; // margin: 0 auto, left: 0, right: 0 모두 해줘야 fixed 중앙정렬됨.
  bottom: 0;
  width: 100vw;

  /* 바뀌는 요소 */
  height: 56px;
  /* bottom: 24px; */
  /* border-radius: ${({ theme }) => theme.borderRadius.Primary}; */

  @media all and (max-width: ${mediaBreakPoint.first}) {
    height: 48px;
    /* border-radius: 0; */
  }
`;
