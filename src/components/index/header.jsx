import styled from 'styled-components';
import Link from 'next/link';
import H3Text from '../typo/h3';
import { fontSize, fontWeight } from '../typo/font';
import LangChangeButton from '../button/lang-change-button';
import { t } from './lang/t';
import languageFunc from '../func/language-func';

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <Link href="/">
          <Left>
            <H3Text
              text={languageFunc(t.myname)}
              mobileSize={fontSize[18]}
              tabletSize={fontSize[20]}
              desktopSize={fontSize[20]}
              weight={fontWeight[700]}
            />
            <H3Text
              text={languageFunc(t.myjob)}
              mobileSize={fontSize[15]}
              tabletSize={fontSize[17]}
              desktopSize={fontSize[17]}
              weight={fontWeight[300]}
              letterSpacing="0.5px"
              marginTop="-2px"
              opacity={0.8}
            />
          </Left>
        </Link>

        <LangChangeButton />
      </HeaderContainer>
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3vh 4vw;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  border-bottom: solid 1px ${({ theme }) => theme.gray5};
`;

const Left = styled.a``;
