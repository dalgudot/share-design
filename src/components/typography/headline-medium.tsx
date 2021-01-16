import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const H2HeadlineMedium = ({
  text,
  marginTop,
}: {
  text: any;
  marginTop?: string;
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <TextStyle
      type="h2"
      text={useSetLanguage(text)}
      textSize="headlineMedium"
      weight={fontWeight[700]}
      color={themeContext.gray0}
      lineHeight={1.4}
      marginTop={marginTop}
    />
  );
};

export default H2HeadlineMedium;
