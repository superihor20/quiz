import { ComponentWithChildren } from '@/types/component-with-children';
import { Header } from '@/ui/header';
import { PaperForUserPages } from '@/ui/paper';

export const UserPagesLayout: ComponentWithChildren = ({ children }) => {
  return (
    <>
      <Header />
      <PaperForUserPages>{children}</PaperForUserPages>
    </>
  );
};
