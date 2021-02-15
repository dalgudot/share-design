import { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { t } from '../../../data/index/t';
import PMedium400 from '../../../elements/typography/p-medium-400';
import PMedium700 from '../../../elements/typography/p-medium-700';
import { mediaBreakPoint } from '../../../styles/common';

const AboutArea = () => {
  const themeContext = useContext(ThemeContext);
  const aboutData = t.contact.about;

  return (
    <AboutDiv>
      {/* 인생 목표 */}
      <PMedium400
        text={aboutData.lifeGoal.title}
        color={themeContext.gray4}
        marginTop="24px"
      />
      {/* term 없음 */}
      <PMedium400
        text={aboutData.lifeGoal.contents}
        color={themeContext.gray1}
        marginTop="8px"
      />

      {/* 경력 */}
      <PMedium400
        text={aboutData.career.title}
        color={themeContext.gray4}
        marginTop="72px"
      />
      <PMedium700
        text={aboutData.career.contentsArray[0].term}
        color={themeContext.gray2}
        marginTop="8px"
      />
      <PMedium400
        text={aboutData.career.contentsArray[0].contents}
        color={themeContext.gray1}
      />
      <PMedium700
        text={aboutData.career.contentsArray[1].term}
        color={themeContext.gray2}
        marginTop="24px"
      />
      <PMedium400
        text={aboutData.career.contentsArray[1].contents}
        color={themeContext.gray1}
      />
      <PMedium700
        text={aboutData.career.contentsArray[2].term}
        color={themeContext.gray2}
        marginTop="24px"
      />
      <PMedium400
        text={aboutData.career.contentsArray[2].contents}
        color={themeContext.gray1}
      />

      {/* 개인 프로젝트 */}
      <PMedium400
        text={aboutData.personalProject.title}
        color={themeContext.gray4}
        marginTop="72px"
      />
      <PMedium700
        text={aboutData.personalProject.contentsArray[0].term}
        color={themeContext.gray2}
        marginTop="8px"
      />
      <PMedium400
        text={aboutData.personalProject.contentsArray[0].contents}
        color={themeContext.gray1}
      />
      <PMedium700
        text={aboutData.personalProject.contentsArray[1].term}
        color={themeContext.gray2}
        marginTop="24px"
      />
      <PMedium400
        text={aboutData.personalProject.contentsArray[1].contents}
        color={themeContext.gray1}
      />

      {/* 강연 */}
      <PMedium400
        text={aboutData.lecture.title}
        color={themeContext.gray4}
        marginTop="72px"
      />
      <PMedium700
        text={aboutData.lecture.contentsArray[0].term}
        color={themeContext.gray2}
        marginTop="8px"
      />
      <PMedium400
        text={aboutData.lecture.contentsArray[0].contents}
        color={themeContext.gray1}
      />
    </AboutDiv>
  );
};

export default AboutArea;

const AboutDiv = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth.Paragraph};
  background-color: rgba(28, 28, 30, 0.4);
  border-radius: ${({ theme }) => theme.borderRadius.Primary};

  // 바뀌는 속성
  margin-top: 24px;
  padding: 24px 48px 48px;

  @media all and (max-width: ${mediaBreakPoint.first}) {
    margin-top: 16px;
    padding: 12px 20px 24px;
  }
`;
