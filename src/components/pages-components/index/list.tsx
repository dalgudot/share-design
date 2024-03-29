import Link from 'next/link';
import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import H3Title from '../../../foundation/typography/h2-title';
import PSmall from '../../../foundation/typography/p-small';
import { motion } from 'framer-motion';
import { listVariants } from '../../../foundation/framer-motion/variants';
import { tType } from '../../../../type';

export type ListType = {
  type: 'share-design' | 'brunch';
  url: string;
  category: tType;
  date: tType;
  dateTime: string;
  title: tType;
  hashTags: tType;
};

const List: React.FC<ListType> = ({
  type,
  url,
  category,
  date,
  dateTime,
  title,
  hashTags,
}) => {
  const contents = () => {
    if (type === 'share-design') {
      return (
        <ListNextLink url={url}>
          <ListContents
            category={category}
            date={date}
            dateTime={dateTime}
            title={title}
            hashTags={hashTags}
          />
        </ListNextLink>
      );
    } else {
      return (
        <ListExternalLink url={url}>
          <ListContents
            category={category}
            date={date}
            dateTime={dateTime}
            title={title}
            hashTags={hashTags}
          />
        </ListExternalLink>
      );
    }
  };

  return (
    <Li //
      variants={listVariants}
      whileHover='whileHover'
      whileTap='whileTap'
    >
      {contents()}
    </Li>
  );
};

export default List;

type LinkType = {
  url: string;
  children: JSX.Element;
};

const ListNextLink: React.FC<LinkType> = ({ url, children }) => {
  return (
    <Link href={url}>
      <a>{children}</a>
    </Link>
  );
};

const ListExternalLink: React.FC<LinkType> = ({ url, children }) => {
  return (
    <a href={url} target='_blank'>
      {children}
    </a>
  );
};

const ListContents = ({
  category,
  date,
  dateTime,
  title,
  hashTags,
}: {
  category: tType;
  date: tType;
  dateTime: string;
  title: tType;
  hashTags: tType;
}) => {
  return (
    <>
      <CategoryDateArea>
        <PSmall text={category} color='gray4' />
        <Divider />
        <time dateTime={dateTime}>
          <PSmall text={date} color='gray4' />
        </time>
      </CategoryDateArea>
      <H3Title //
        text={title}
        color='gray1'
        marginTop='8px'
      />
      <PSmall text={hashTags} color='gray4' marginTop='24px' />
    </>
  );
};

const Li = styled(motion.li)<{ marginTop?: string }>`
  width: 100%; /* 원하는 너비 */
  margin: 0 auto;
  border-bottom: solid 1px ${({ theme }) => theme.gray7};

  p:nth-child(1) {
    margin-left: 2px;
  }

  p:nth-child(3) {
    margin-left: 2px;
  }

  // 바뀌는 속성
  padding: 72px 0; // 목록 사이의 간격
  max-width: ${({ theme }) => theme.maxWidth.DesktopList};

  @media all and (max-width: ${mediaBreakPoint.first}) {
    padding: 48px 0;
    max-width: ${({ theme }) => theme.maxWidth.MobileList};

    p {
      font-size: 14px; // 모바일에서도 14px 유지
    }
  }
`;

const CategoryDateArea = styled.div`
  display: flex;
  align-items: center;
`;

const Divider = styled.span`
  width: 1px;
  background-color: ${({ theme }) => theme.gray4};
  height: 10px;
  margin: 0 4px 0 6px; // 시각 보정

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin: 1px 3px 0 5px; // 모바일 시각 보정
  }
`;
