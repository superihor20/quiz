import { LinkProps } from 'next/link';

import { LinkStyled } from './gradient-link.styled';

import { ComponentWithChildren } from '@/types/component-with-children';

export const GradientLink: ComponentWithChildren<LinkProps> = ({ children, href }) => {
  return <LinkStyled href={href}>{children}</LinkStyled>;
};
