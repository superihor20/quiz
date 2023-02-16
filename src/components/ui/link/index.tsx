import { LinkProps } from 'next/link';

import { ComponentWithChildren } from '../../../types/component-with-children';

import { LinkStyled } from './link.styled';

export const Link: ComponentWithChildren<LinkProps> = ({ children, href }) => {
  return <LinkStyled href={href}>{children}</LinkStyled>;
};
