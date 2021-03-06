import styled from 'styled-components';
import { t } from '../../../data/index/t';
import H3Title700 from '../../../foundation/typography/h3-title-700';
import PSmall400 from '../../../foundation/typography/p-small-400';
import { useSetLanguage } from '../../../library/hooks/useSetLanguage';
import { mediaBreakPoint } from '../../../styles/common';

const ProfileArea = () => {
  return (
    <ProfileDiv>
      <img
        src="/images/profile-photo@3x.jpg"
        alt={useSetLanguage(t.contact.profileAlt)}
      />
      <H3Title700 text={t.myName} color="gray1" marginTop="8px" />
      <PSmall400 text={t.myJob} color="gray3" />
    </ProfileDiv>
  );
};

export default ProfileArea;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 96px;
    height: 96px;
    border: solid 2px ${({ theme }) => theme.gray7};
    border-radius: 50%;
    -webkit-transition: 1s ease-in-out;
    transition: 1s ease-in-out;

    @media all and (max-width: ${mediaBreakPoint.first}) {
      width: 72px;
      height: 72px;
    }
  }
`;
