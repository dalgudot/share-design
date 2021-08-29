import styled from 'styled-components';
import { mediaBreakPoint } from '../../../styles/common';
import PSmall from '../../../foundation/typography/p-small';
import Link from 'next/link';
import { useEffect } from 'react';
import firebase from 'firebase/app';
import { useState } from 'react';
import { useDate } from '../../../library/hooks/useDate';

const Footer = () => {
  const [today, setToday] = useState('');
  const [total, setTotal] = useState('');

  useEffect(() => {
    const date = useDate();

    // 새롭게 추가되는 값까지 받기 위해 once 대신 on 메소드 활용
    firebase
      .database()
      .ref(`Number of Visitors/${date.year}/${date.month}`)
      .on('value', (snapshot) => {
        const objData = snapshot.val();
        const data = objData && Object.values(objData);
        // The last value in the array is the current date
        data[data.length - 1] && setToday(data[data.length - 1]);
        // setResponseLoading(false);
      });
  }, []);

  useEffect(() => {
    firebase
      .database()
      .ref('Number of Visitors/Total Visitors')
      .on('value', (snapshot) => {
        const objData = snapshot.val();
        const data = objData && Object.values(objData);
        // data[0] is Total All
        data[0] && setTotal(data[0]);
        // setResponseLoading(false);
      });
  }, []);

  return (
    <>
      <FooterContainer>
        {/*  */}
        <Left>
          <Statistics>
            <PSmall text={`TODAY ${today}`} color="gray4" weight={700} />
            <Divider />
            <PSmall text={`TOTAL ${total}`} color="gray4" weight={700} />
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
};

export default Footer;

const FooterContainer = styled.footer`
  padding: ${({ theme }) => theme.padding.LeftRightPadding};
  display: flex;
  justify-content: space-between;

  // property that chage
  position: fixed;
  bottom: 48px;
  left: 0;
  right: 0;

  @media all and (max-width: ${mediaBreakPoint.first}) {
  }

  // iOS bottom safe area
  padding-bottom: calc(env(safe-area-inset-bottom));
`;

const Left = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
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
