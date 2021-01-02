import styled from 'styled-components';
import TextStyle from '../../typography/text-style';
import { fontWeight } from '../../typography/font';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';
import { t } from '../lang/t';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useWindowHeight } from '../../../lib/hooks/useWindowHeight';
import Router from 'next/router';

const Menu = () => {
  const themeContext = useContext(ThemeContext);
  const height: number = useWindowHeight();

  return (
    <Ul height={height}>
      <li>
        <Button onClick={() => Router.push('/b')}>
          <TextStyle
            type="p"
            text={useSetLanguage(t.subNavBar.welcome)}
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
            text={useSetLanguage(t.subNavBar.contact)}
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
  padding-bottom: 20px;

  li:nth-child(2) {
    margin-top: 72px;
  }
`;

const Button = styled.button``;

interface UlTypes {
  height: number;
}
