import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import PSmall from '../../../foundation/typography/p-small';
import Link from 'next/link';
import { useEffect } from 'react';
import firebase from 'firebase/app';
import { useState } from 'react';
import { getDate } from '../../../lib/functions/get-date';
import LoadingSkeletonRect from '../../../foundation/framer-motion/loading-skeleton-rect';
import { useWindowWidth } from '../../../lib/hooks/useWindowWidth';
import React from 'react';

const Footer = () => {
  const [loading, setLoading] = useState(true);
  const date = getDate();
  const [today, setToday] = useState('');
  const [total, setTotal] = useState('');

  useEffect(() => {
    // 새롭게 추가되는 값까지 받기 위해 once 대신 on 메소드 활용
    firebase
      .database()
      .ref(`Number of Visitors/${date.year}/${date.month}`)
      .on('value', (snapshot) => {
        const objData = snapshot.val();
        const data = objData && Object.values(objData);
        // The last value in the array is the current date
        data[data.length - 1] && setToday(data[data.length - 1]);
        // setLoading(false);
      });

    firebase
      .database()
      .ref('Number of Visitors/Total Visitors')
      .on('value', (snapshot) => {
        const objData = snapshot.val();
        const data = objData && Object.values(objData);
        // data[0] is Total All
        data[0] && setTotal(data[0]);
        setLoading(false);
      });
    // CleanUp Function
    return () => {
      // console.log('I am in cleanup function');
      // setLoading(true);
    };
  }, []);

  const width: number = useWindowWidth();
  const stringMediaBreakPoint = mediaBreakPoint.first.replace('px', '');
  const numberMediaBreakPoint = Number(stringMediaBreakPoint);

  if (width <= numberMediaBreakPoint) {
    return <></>;
  } else {
    return (
      <>
        <FooterContainer>
          {/*  */}
          <Left>
            <Statistics>
              {loading === true ? (
                <LoadingSkeletonRect width="61px" height="21px" />
              ) : (
                <PSmall text={`TODAY ${today}`} color="gray4" weight={700} />
              )}
              <Divider />
              {loading === true ? (
                <LoadingSkeletonRect width="85px" height="21px" />
              ) : (
                <PSmall text={`TOTAL ${total}`} color="gray4" weight={700} />
              )}
            </Statistics>
          </Left>

          <Right>
            <Social>
              <a href="https://brunch.co.kr/@dalgudot" target="_blank">
                <PSmall text="Brunch" color="gray0" weight={700} />
              </a>
              <Divider />
              <a href="https://www.facebook.com/dalgudot" target="_blank">
                <PSmall text="Facebook" color="gray0" weight={700} />
              </a>
              <Divider />
              <a href="https://www.linkedin.com/in/dalgudot" target="_blank">
                <PSmall text="LinkedIn" color="gray0" weight={700} />
              </a>
            </Social>
            <Link href="/contact">
              <a>
                <PSmall
                  text="ⓒ KyungHwan Kim. All rights reserved"
                  color="gray4"
                />
              </a>
            </Link>
          </Right>
          {/*  */}
        </FooterContainer>
      </>
    );
  }
};

export default React.memo(Footer);

const FooterContainer = styled.footer`
  padding: ${({ theme }) => theme.padding.LeftRightPadding};
  display: flex;
  justify-content: space-between;

  // property that chage
  position: fixed;
  bottom: 48px;
  left: 0;
  right: 0;
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  margin-left: 2px; // Visual Correction
`;

const Statistics = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div``;

const Social = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 1px; // Visual Correction
  margin-bottom: 10px;
`;

const Divider = styled.span`
  width: 1px;
  height: 10px;
  background-color: ${({ theme }) => theme.gray5};
  margin: 1px 8px 0 8px;
`;
