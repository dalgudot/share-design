import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const H1TitleLarge = ({
  text,
  marginTop,
}: {
  text: any;
  marginTop?: string;
}) => {
  const themeContext = useContext(ThemeContext);

  return (
    <TextStyle
      type="h1"
      text={useSetLanguage(text)}
      textSize="h1TitleLarge"
      weight={fontWeight[700]}
      color={themeContext.gray1}
      lineHeight={1.3}
      marginTop={marginTop}
    />
  );
};

export default H1TitleLarge;
