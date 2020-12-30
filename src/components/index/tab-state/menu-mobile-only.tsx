import Link from 'next/link';
import styled from 'styled-components';
import TextStyle from '../../typography/text-style';
import { fontWeight } from '../../typography/font';
import languageFunc from '../../func/language-func';
import { t } from '../../index/lang/t';

const MenuMobileOnly = ({ theme }: any) => {
  return (
    <Container>
      <Link href="/index/greetings">
        <a>
          <li>
            <TextStyle
              type="p"
              text={languageFunc(t.footerDesktop.greetings)}
              textSize="headline"
              weight={fontWeight[700]}
              color={theme.whitePrimary}
            />
          </li>
        </a>
      </Link>

      <Link href="/index/contact">
        <a>
          <li>
            <TextStyle
              type="p"
              text={languageFunc(t.footerDesktop.contact)}
              textSize="headline"
              weight={fontWeight[700]}
              color={theme.whitePrimary}
            />
          </li>
        </a>
      </Link>
    </Container>
  );
};

export default MenuMobileOnly;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 48vh;

  a:nth-child(2) {
    margin-top: 72px;
  }
`;
