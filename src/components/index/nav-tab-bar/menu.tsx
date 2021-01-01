import Link from 'next/link';
import styled from 'styled-components';
import TextStyle from '../../typography/text-style';
import { fontWeight } from '../../typography/font';
import languageFunc from '../../func/language-func';
import { t } from '../lang/t';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Menu = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <Ul>
      <Link href="/welcome">
        <a>
          <li>
            <TextStyle
              type="p"
              text={languageFunc(t.footerDesktop.greetings)}
              textSize="headlineBig"
              weight={fontWeight[700]}
              color={themeContext.whitePrimary}
            />
          </li>
        </a>
      </Link>

      <Link href="/welcome">
        <a>
          <li>
            <TextStyle
              type="p"
              text={languageFunc(t.footerDesktop.contact)}
              textSize="headlineBig"
              weight={fontWeight[700]}
              color={themeContext.whitePrimary}
            />
          </li>
        </a>
      </Link>
    </Ul>
  );
};

export default Menu;

const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  height: 47vh;

  a:nth-child(2) {
    margin-top: 48px;
  }
`;
