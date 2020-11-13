import styled from 'styled-components';
import Link from 'next/link';

const Header = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <Left>
          <h5>KyungHwan Kim</h5>
          <h6>UI/UX Designer</h6>
        </Left>
      </Link>
      <HamburgerMenuLine>
        <span></span>
        <span></span>
        <span></span>
      </HamburgerMenuLine>
      {/* <LineHoverWrap>
        <LineHover>about</LineHover>
        <LineHover>contact</LineHover>
      </LineHoverWrap> */}
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.a`
  h5 {
    font-weight: 700;
  }

  h6 {
    font-weight: 100;
    letter-spacing: 1px;
    margin-top: -2px;
  }
`;

const LineHoverWrap = styled.a`
  display: flex;
  padding-bottom: 3px;
`;

const LineHover = styled.p`
  font-size: 2rem;
  font-weight: 700;
  margin-left: 2vw;
`;

const HamburgerMenuLine = styled.div`
  width: 20px;
  height: 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 8px;
  /* border: solid 2px ${({ theme }) => theme.gray1};
  padding: 12px; */

  @media all and (min-width: 1440px) {
    width: 26px;
    height: 18px;
  }

  span {
    height: 2px;
    background-color: ${({ theme }) => theme.gray1};
  }
`;

// const LineHoverWrap = styled.div`
//   position: relative;
//   display: block;
//   padding-bottom: 3px;
//   height: 2.4rem;
// `;

// const LineHover = styled.a`
//   font-size: 2rem;
//   font-weight: 700;
//   margin-left: 36px;

//   &:after {
//     content: '';
//     position: absolute;
//     width: 100%;
//     height: 3px;
//     bottom: -10px;
//     left: 0;
//     background-color: ${({ theme }) => theme.gray1};
//     transform: scaleX(0);
//     transform-origin: bottom right;
//     transition: transform 0.3s;
//   }

//   &:hover {
//     &:after {
//       transform-origin: bottom left;
//       transform: scaleX(1);
//     }
//   }
// `;
