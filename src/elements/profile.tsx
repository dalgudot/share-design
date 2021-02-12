import Router from 'next/router';
import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import PSmall400 from './typography/p-small-400';
import { useSetLanguage } from '../lib/hooks/useSetLanguage';
import { t } from '../components/page/index/text/t';

const Profile = () => {
  const themeContext = useContext(ThemeContext);
  const goToContact = () => {
    Router.push('/contact');
  };

  return (
    <Author onClick={goToContact}>
      <img
        src="/images/profile.jpg"
        alt={useSetLanguage(t.contact.profileAlt)}
      />
      <PSmall400 text={t.myName} color={themeContext.gray1} />
      <Dot />
      <PSmall400 text={t.myJob} color={themeContext.gray1} />
    </Author>
  );
};

export default Profile;

const Author = styled.a`
  margin-top: 16px;
  display: flex;
  align-items: center;

  img {
    width: 28px;
    height: 28px;
    border: solid 2px ${({ theme }) => theme.gray1};
    border-radius: 50%;
    margin-right: 6px;
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
`;
