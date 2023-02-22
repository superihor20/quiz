import { forwardRef, PropsWithChildren } from 'react';

import {
  ContentInnerWrapper,
  ContentOuterWrapper,
  ContentOuterWrapperProps,
} from './content.styled';

type ContentProps = PropsWithChildren<ContentOuterWrapperProps>;

export const Content = forwardRef<HTMLDivElement, ContentProps>(({ children, height }, ref) => {
  return (
    <ContentOuterWrapper height={height}>
      <ContentInnerWrapper ref={ref}>{children}</ContentInnerWrapper>
    </ContentOuterWrapper>
  );
});
