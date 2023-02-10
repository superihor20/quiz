import { ComponentWithChildren } from '../../types/component-with-children';

type FormProps = ComponentWithChildren<{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}>;

export const Form: FormProps = ({ children, onSubmit }) => {
  return (
    <form className="flex gap-3 flex-col" onSubmit={onSubmit}>
      {children}
    </form>
  );
};
