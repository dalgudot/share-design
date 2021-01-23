import TextStyle from './atoms/text-style';
import { fontWeight } from './atoms/font';
import { useSetLanguage } from '../../lib/hooks/useSetLanguage';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const H2TitleMedium = ({
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
      textSize="h2TitleMedium"
      weight={fontWeight[700]}
      color={themeContext.gray1}
      lineHeight={1.4}
      marginTop={marginTop}
    />
  );
};

export default H2TitleMedium;
