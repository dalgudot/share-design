import styled from "styled-components";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <Left>
        <h1>KyungHwan Kim</h1>
        <h2>UX Designer</h2>
      </Left>
      <LineHoverWrap>
        <Link href="/">
          <LineHover>About</LineHover>
        </Link>
      </LineHoverWrap>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  padding: 3.5rem 16.66667% 0;
  display: flex;
  justify-content: space-between;

  @media all and (max-width: 768px) {
    padding: 3.5rem 6% 0;
  }
`;

const Left = styled.div`
  h1 {
    font-size: 2.1rem;
    font-weight: 700;
    letter-spacing: 1px;
  }

  h2 {
    font-size: 1.7rem;
    font-weight: 100;
    letter-spacing: 1px;
    margin-top: -1px;
  }
`;

const LineHoverWrap = styled.div`
  position: relative;
  display: block;
  padding-bottom: 3px;
  height: 2.4rem;
`;

const LineHover = styled.a`
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--white);

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -10px;
    left: 0;
    background-color: var(--white);
    transform: scaleX(0);
    transform-origin: bottom right;
    transition: transform 0.3s;
  }

  &:hover {
    &:after {
      transform-origin: bottom left;
      transform: scaleX(1);
    }
  }
`;
