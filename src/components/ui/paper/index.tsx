import { ComponentWithChildren } from '@/types/component-with-children';

import { PaperStyled, PaperStyledProps } from './paper.styled';

export type PaperProps = ComponentWithChildren<PaperStyledProps>;

export const Paper: PaperProps = ({ children, ...props }) => {
  return <PaperStyled {...props}>{children}</PaperStyled>;
};
