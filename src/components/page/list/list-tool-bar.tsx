import Router from 'next/router';
import styled from 'styled-components';
import IconHome24 from '../../../elements/svg/icon_home_24';

const ListToolBar = ({
  backgroundGradient,
}: {
  backgroundGradient: string;
}) => {
  return (
    <HomeButton //
      onClick={() => Router.push('/')}
      backgroundGradient={backgroundGradient}
    >
      <IconHome24 />
    </HomeButton>
  );
};

export default ListToolBar;

const HomeButton = styled.button<{ backgroundGradient: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    ${({ backgroundGradient }) => backgroundGradient}
  );
  max-width: 500px;
  margin: 0 auto;
  left: 0;
  right: 0; // margin: 0 auto, left: 0, right: 0 모두 해줘야 fixed 중앙정렬됨.

  position: fixed;
  height: 48px;

  /* 바뀌는 요소 */
  bottom: 24px;
  width: 100vw;
  border-radius: ${({ theme }) => theme.borderRadius.Primary};

  @media all and (max-width: 500px) {
    bottom: 0;
    width: 100vw;
    border-radius: 0;
  }
`;
