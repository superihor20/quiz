import { ComponentWithChildren } from '@/types/component-with-children';
import { Header } from '@/ui/header';
import { PaperForUserPages } from '@/ui/paper';
import { Title } from '@/ui/title';

export type UserPagesLayoutProps = ComponentWithChildren<{
  title?: string;
}>;

export const UserPagesLayout: UserPagesLayoutProps = ({ children, title }) => {
  return (
    <>
      <Header />
      <PaperForUserPages>
        {title && <Title>{title}</Title>}
        {children}
      </PaperForUserPages>
    </>
  );
};
