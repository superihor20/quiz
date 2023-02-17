import { LinkProps } from 'next/link';

import { ComponentWithChildren } from '../../../types/component-with-children';

import { LinkStyled } from './gradient-link.styled';

export const GradientLink: ComponentWithChildren<LinkProps> = ({ children, href }) => {
  return <LinkStyled href={href}>{children}</LinkStyled>;
};
