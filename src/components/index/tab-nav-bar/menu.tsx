import styled from 'styled-components';
import TextStyle from '../../typography/text-style';
import { fontWeight } from '../../typography/font';
import { useSetLanguage } from '../../../lib/hooks/useSetLanguage';
import { t } from '../lang/t';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useWindowHeight } from '../../../lib/hooks/useWindowHeight';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

const Menu = () => {
  const themeContext = useContext(ThemeContext);
  const height: number = useWindowHeight();

  // welcome / contact 어떤 버튼을 눌렀느냐에 따라 상태 다르게 바꾸기
  const subNavToggle = useSelector((state: any) => state.subNavBar);
  const dispatch = useDispatch();
  const SUB_NAV_CHANGE = () =>
    dispatch({
      type: 'SUB_NAV_CHANGE',
    });

  const goWelcome = () => {
    subNavToggle === 'contact' && SUB_NAV_CHANGE();
    Router.push('/b');
  };

  const goContact = () => {
    subNavToggle === 'welcome' && SUB_NAV_CHANGE();
    Router.push('/b');
  };

  return (
    <Ul height={height}>
      <li>
        <Button onClick={() => goWelcome()}>
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
        <Button onClick={() => goContact()}>
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
