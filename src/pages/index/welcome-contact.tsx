import Link from 'next/link';
import styled from 'styled-components';
import languageFunc from '../../components/func/language-func';
import { fontWeight } from '../../components/typography/font';
import TextStyle from '../../components/typography/text-style';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { t } from '../../components/index/lang/t';
import Header from '../../components/index/header';
import SwipeableViews from 'react-swipeable-views';

const WelcomeContact = () => {
  const themeContext = useContext(ThemeContext);

  return (
    <>
      <Header />
      <Container>
        <SwipeableViews>
          <TextStyle
            type="p"
            text={languageFunc(t.welcome1)}
            textSize="body"
            weight={fontWeight[400]}
            color={themeContext.whitePrimary}
          />
          <TextStyle
            type="p"
            text={languageFunc(t.welcome2)}
            textSize="body"
            weight={fontWeight[400]}
            color={themeContext.whitePrimary}
          />
          <TextStyle
            type="p"
            text={languageFunc(t.welcome3)}
            textSize="body"
            weight={fontWeight[400]}
            color={themeContext.whitePrimary}
          />
        </SwipeableViews>
      </Container>
    </>
  );
};

export default WelcomeContact;

const Container = styled.div`
  margin-top: 100px;
`;
