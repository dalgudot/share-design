import Link from 'next/link';
import styled from 'styled-components';
import TextStyle from '../../typography/text-style';
import { fontWeight } from '../../typography/font';
import { useSetLanguage } from '../../../lib/custom-hook/useSetLanguage';
import { t } from '../lang/t';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useWindowHeight } from '../../../lib/custom-hook/useWindowHeight';
import Router from 'next/router';

const Menu = () => {
  const themeContext = useContext(ThemeContext);
  const height = useWindowHeight();

  return (
    <Ul height={height}>
      <li>
        <Button onClick={() => Router.push('/b')}>
          <TextStyle
            type="p"
            text={useSetLanguage(t.footerDesktop.greetings)}
            textSize="headlineBig"
            weight={fontWeight[700]}
            color={themeContext.whitePrimary}
          />
        </Button>
      </li>

      <li>
        <Button onClick={() => Router.push('/b')}>
          <TextStyle
            type="p"
            text={useSetLanguage(t.footerDesktop.contact)}
            textSize="headlineBig"
            weight={fontWeight[700]}
            color={themeContext.whitePrimary}
          />
        </Button>
      </li>
    </Ul>
  );
};

export default Menu;

const Ul = styled.ul<UlTypes>`
  width: 100%;
  height: ${({ height }) => height}px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;

  li:nth-child(2) {
    margin-top: 72px;
  }
`;

const Button = styled.button``;

interface UlTypes {
  height: number;
}
