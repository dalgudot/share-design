import styled from 'styled-components';

export const LeftRightContainer = styled.main`
  padding: 0 6vw;

  @media all and (min-width: 960px) {
    padding: 0 16vw;
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
