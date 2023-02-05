import { ComponentWithChildren } from '../../../types/component-with-children';

export const Form: ComponentWithChildren = ({ children }) => {
  return <form className="flex gap-3 flex-col">{children}</form>;
};
