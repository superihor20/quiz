import Link from 'next/link';

import { pages } from '@/constants/links';

import { Logo } from './components/logo';
import { Menu } from './components/menu';
import { HeaderWrapper } from './header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Link href={pages.dashboard}>
        <Logo />
      </Link>
      <Menu />
    </HeaderWrapper>
  );
};
