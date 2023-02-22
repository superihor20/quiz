import { ComponentWithChildren } from '@/types/component-with-children';

import { HeaderStyled } from './header.styled';

type HeaderProps = ComponentWithChildren<{
  onClick: () => void;
}>;

export const Header: HeaderProps = ({ children, onClick }) => {
  return <HeaderStyled onClick={onClick}>{children}</HeaderStyled>;
};
