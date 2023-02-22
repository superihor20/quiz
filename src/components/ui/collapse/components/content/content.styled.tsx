import styled from 'styled-components';

export type ContentOuterWrapperProps = {
  height: number;
};

export const ContentOuterWrapper = styled.div<ContentOuterWrapperProps>`
  overflow: hidden;
  height: ${({ height }) => `${height}px`};
  transition: 0.3s;
`;

export const ContentInnerWrapper = styled.div`
  padding: 1rem;
  max-height: 40vh;
  overflow: auto;
`;
