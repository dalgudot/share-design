import styled from 'styled-components';
import { mediaBreakPoint } from '../../styles/common';

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
  /* background-color: ${({ theme }) => theme.gray5}; */
  background: linear-gradient(to bottom, #323232 0%, #3f3f3f 40%, #1c1c1c 150%),
    linear-gradient(
      to top,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(0, 0, 0, 0.25) 200%
    );
  background-blend-mode: multiply;
`;
