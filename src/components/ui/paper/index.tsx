import { PaperStyled } from './paper.styled';

import { ComponentWithChildren } from '@/types/component-with-children';

export const Paper: ComponentWithChildren = ({ children }) => {
  return <PaperStyled>{children}</PaperStyled>;
};
