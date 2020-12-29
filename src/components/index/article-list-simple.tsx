import styled from 'styled-components';
import Link from 'next/link';
import H1 from '../typo/h1';
import P from '../typo/p';
import { fontSize, fontWeight } from '../typo/font';
import { mediaBreakPoint } from '../../styles/common';
import { motion } from 'framer-motion';
import { BtnStyle } from '../index/common-elements';
import { t } from '../index/lang/t';
import languageFunc from '../func/language-func';
import SVGShareDesignEn from '../svg/share-design-en';
import SVGShareDesignKo from '../svg/share-design-ko';

const ArticleListSimple = ({
  href,
  theme,
  order,
  title,
}: ArticleListPropTypes) => {
  return (
    <Li>
      {/* <WrapRelative> */}
      <ListSection>
        <H1
          text={order}
          mobileSize={fontSize.headline.mobile}
          tabletSize={fontSize.headline.tablet}
          desktopSize={fontSize.headline.desktop}
          weight={fontWeight[700]}
          lineHeight={1.2}
          letterSpacing="-0.3px"
        />
        <H1
          text={title}
          mobileSize={fontSize.headline.mobile}
          tabletSize={fontSize.headline.tablet}
          desktopSize={fontSize.headline.desktop}
          weight={fontWeight[700]}
          lineHeight={1.2}
          marginTop="12px"
          letterSpacing="-0.3px"
        />

        <BtnStyle>
          <Link href={href}>
            <a>
              <P
                text={languageFunc(t.article1.titleSimpleBtn)}
                mobileSize={fontSize.body.mobile}
                tabletSize={fontSize.body.tablet}
                desktopSize={fontSize.body.desktop}
                weight={fontWeight[400]}
                lineHeight={1.2}
              />
            </a>
          </Link>
        </BtnStyle>
      </ListSection>

      <TextDecoration>
        <SVGShareDesignKo color="#232324" />
        <SVGShareDesignEn color="#232324" />
      </TextDecoration>
      {/* </WrapRelative> */}
    </Li>
  );
};

export default ArticleListSimple;

const Li = styled.li`
  /* max-width: 580px; */
  margin: 0 auto;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translateX(-50%);
  min-width: 100vw;
  max-width: 100vw;
`;

const WrapRelative = styled.div`
  position: static;
  width: 100%;
  height: 100%;
`;

const ListSection = styled.section`
  position: absolute;
  transform: translateY(20%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 100%;
  overflow-x: hidden;
`;

const TextDecoration = styled.figure`
  position: absolute;
  top: -25%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  overflow-x: hidden;

  svg {
    mask-image: linear-gradient(0deg, transparent 3%, #000 90%);
    -webkit-mask-image: linear-gradient(0deg, transparent 3%, #000 90%);
  }
`;

// type
interface ArticleListPropTypes {
  theme?: any;
  href: string;
  order: string;
  title: string;
}
