import { ComponentWithChildren } from '../../../types/component-with-children';

export const Form: ComponentWithChildren = ({ children }) => {
  return <form className="flex gap-2 flex-col">{children}</form>;
};
