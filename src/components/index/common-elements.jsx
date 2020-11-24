import styled from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';

export const LeftRightMargin = styled.main`
  @media screen and (max-width: ${mediaBreakPoint.first}) {
    padding: 0 4vw;
  }

  @media screen and (min-width: ${mediaBreakPoint.second}) and (max-width: ${mediaBreakPoint.third}) {
    padding: 0 12vw;
  }

  @media screen and (min-width: ${mediaBreakPoint.fourth}) {
    padding: 0 16.6667%;
  }
`;

export const HorizontalLine = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.gray1};
  opacity: 0.7;
`;

export const VerticalLine = styled.div`
  width: 1px;
  height: 49px;
  background-color: ${({ theme }) => theme.gray1};
  opacity: 0.7;
  margin: 16px auto;
`;

export const BtnStyle = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 142px;
  height: 40px;
  border-radius: 13px;
  background-color: ${({ theme }) => theme.gray5};
`;
