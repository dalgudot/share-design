import Link from 'next/link';
import styled from 'styled-components';
import { useSetLanguage } from '../lib/custom-hook/useSetLanguage';
import { fontWeight } from '../components/typography/font';
import TextStyle from '../components/typography/text-style';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { t } from '../components/index/lang/t';
import Header from '../components/index/header';
import { useQuery } from 'react-query';

const Welcome = () => {
  const themeContext = useContext(ThemeContext);
  console.log(useQuery);

  return (
    <>
      <Header />
      <Container>
        <TextStyle
          type="p"
          text={useSetLanguage(t.welcome1)}
          textSize="body"
          weight={fontWeight[400]}
          color={themeContext.whitePrimary}
        />
        <TextStyle
          type="p"
          text={useSetLanguage(t.welcome2)}
          textSize="body"
          weight={fontWeight[400]}
          color={themeContext.whitePrimary}
        />
        <TextStyle
          type="p"
          text={useSetLanguage(t.welcome3)}
          textSize="body"
          weight={fontWeight[400]}
          color={themeContext.whitePrimary}
        />
      </Container>
    </>
  );
};

export default Welcome;

const Container = styled.section`
  margin-top: 100px;
`;
