import styled from 'styled-components';
import { t } from '../../../data/index/t-index';
import H3Title from '../../../foundation/typography/h2-title';
import PMedium from '../../../foundation/typography/p-medium';
import { useSetLanguage } from '../../../foundation/typography/useSetLanguage';
import { mediaBreakPoint } from '../../../styles/common';

const ProfileArea = () => {
  return (
    <ProfileDiv>
      <ProfileImage
        src="/images/profile-photo@3x.jpg"
        alt={useSetLanguage(t.contact.profileAlt)}
      />
      <H3Title text={t.myName} color="gray0" marginTop="12px" />
      <PMedium text={t.myJob} color="gray3" marginTop="6px" />
    </ProfileDiv>
  );
};

export default ProfileArea;

const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 72px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 48px;
  }
`;

const ProfileImage = styled.img`
  border: solid 2px ${({ theme }) => theme.gray7};
  border-radius: 50%;

  // properties that change
  width: 96px;
  height: 96px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    width: 72px;
    height: 72px;
  }
`;
