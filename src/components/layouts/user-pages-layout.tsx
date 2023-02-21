import { ComponentWithChildren } from '@/types/component-with-children';
import { Header } from '@/ui/header';
import { PaperForUserPage } from '@/ui/paper';
import { Title } from '@/ui/title';

export type UserPageLayoutProps = ComponentWithChildren<{
  title?: string;
}>;

export const UserPageLayout: UserPageLayoutProps = ({ children, title }) => {
  return (
    <>
      <Header />
      <PaperForUserPage>
        {title && <Title>{title}</Title>}
        {children}
      </PaperForUserPage>
    </>
  );
};
