import { ComponentWithChildren } from '../../../types/component-with-children';

type FormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export const Form: ComponentWithChildren<FormProps> = ({ children, onSubmit }) => {
  return (
    <form className="flex gap-3 flex-col" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
