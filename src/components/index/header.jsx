import styled from 'styled-components';
import Link from 'next/link';
import H3Text from '../typo/h3';
import { fontSize, fontWeight } from '../typo/font';

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <Left>
          <H3Text
            text="KyungHwan Kim"
            mobileSize={fontSize.font18}
            tabletSize={fontSize.font21}
            desktopSize={fontSize.font25}
            weight={fontWeight.bold}
          />
          <H3Text
            text="UI/UX Designer"
            mobileSize={fontSize.font14}
            tabletSize={fontSize.font18}
            desktopSize={fontSize.font21}
            weight={fontWeight.light}
            letterSpacing="0.5px"
            marginTop="-2px"
            opacity={0.8}
          />
        </Left>
      </Link>

      <HamburgerMenuLine>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMenuLine>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 4vh 0;
`;

const Left = styled.a``;

const HamburgerMenuLine = styled.div`
  width: 20px;
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 8px;

  @media all and (min-width: 1440px) {
    width: 26px;
    height: 18px;
  }

  span {
    height: 2px;
    background-color: ${({ theme }) => theme.gray1};
  }
`;
