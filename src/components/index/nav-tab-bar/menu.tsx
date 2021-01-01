import Link from 'next/link';
import styled from 'styled-components';
import TextStyle from '../../typography/text-style';
import { fontWeight } from '../../typography/font';
import languageFunc from '../../../lib/func/language-func';
import { t } from '../lang/t';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useWindowHeight } from '../../../lib/custom-hook/useWindowHeight';

const Menu = () => {
  const themeContext = useContext(ThemeContext);
  const height = useWindowHeight();

  return (
    <Ul height={height}>
      <li>
        <Link href="/b">
          <a>
            <TextStyle
              type="p"
              text={languageFunc(t.footerDesktop.greetings)}
              textSize="headlineBig"
              weight={fontWeight[700]}
              color={themeContext.whitePrimary}
            />
          </a>
        </Link>
      </li>

      <li>
        <Link href="/b">
          <a>
            <TextStyle
              type="p"
              text={languageFunc(t.footerDesktop.contact)}
              textSize="headlineBig"
              weight={fontWeight[700]}
              color={themeContext.whitePrimary}
            />
          </a>
        </Link>
      </li>
    </Ul>
  );
};

export default Menu;

const Ul = styled.ul<UlTypes>`
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center; */

  /* position: relative; */
  /* top: 50%;
  transform: translateY(-50%);
  left: 0; */
  width: 100%;
  height: ${({ height }) => height}px;
  text-align: center;

  /* li:nth-child(2) {
    margin-top: 48px;
  } */
`;

interface UlTypes {
  height: number;
}
