import styled from 'styled-components';
import Link from 'next/link';

const IndexHeader = () => {
  return (
    <HeaderContainer>
      <Link href="/">
        <Left>
          <h4>KyungHwan Kim</h4>
          <h5>UI/UX Designer</h5>
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

export default IndexHeader;

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
`;

const Left = styled.a`
  h4 {
    font-weight: 700;
  }

  h5 {
    font-weight: 100;
    letter-spacing: 1px;
    margin-top: -2px;
  }

  @media all and (max-width: 767px) {
    h4 {
      font-size: 1.7rem;
    }

    h5 {
      font-size: 1.4rem;
    }
  }
`;

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
