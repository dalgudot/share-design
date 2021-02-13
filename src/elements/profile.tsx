import Router from 'next/router';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PSmall400 from './typography/p-small-400';
import { useSetLanguage } from '../lib/hooks/useSetLanguage';
import { t } from '../data/index/t';
import { mediaBreakPoint } from '../styles/common';

const Profile = ({ marginTop }: { marginTop: string }) => {
  const themeContext = useContext(ThemeContext);
  const goToContact = () => {
    Router.push('/contact');
  };

  return (
    // 버튼 inline-block으로 만들기 위해 wrap 필요
    <AuthorWrap>
      <Author onClick={goToContact} marginTop={marginTop}>
        <img
          src="/images/profile.jpg"
          alt={useSetLanguage(t.contact.profileAlt)}
        />
        <PSmall400 text={t.myName} color={themeContext.gray1} />
        <Dot />
        <PSmall400 text={t.myJob} color={themeContext.gray1} />
      </Author>
    </AuthorWrap>
  );
};

export default Profile;

const AuthorWrap = styled.span``;

const Author = styled.button<{ marginTop: string }>`
  display: flex;
  align-items: center;
  margin-top: ${({ marginTop }) => marginTop};

  img {
    border: solid 2px ${({ theme }) => theme.gray1};
    border-radius: 50%;

    // 바뀌는 속성
    width: 32px;
    height: 32px;
    margin-right: 8px;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      width: 28px;
      height: 28px;
      margin-right: 6px;
    }
  }

  p {
    padding-bottom: 1px; // 시각 보정
  }
`;

const Dot = styled.span`
  height: 2px;
  width: 2px;
  background-color: ${({ theme }) => theme.gray1};
  border-radius: 50%;
  margin-left: 4px;
  margin-right: 4px;
  margin-top: 3px;

  margin-bottom: 2px; // 시각 보정
`;
