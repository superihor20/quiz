import { ComponentWithChildren } from '@/types/component-with-children';

import { PaperStyled } from './paper.styled';

export const Paper: ComponentWithChildren = ({ children }) => {
  return <PaperStyled>{children}</PaperStyled>;
};
