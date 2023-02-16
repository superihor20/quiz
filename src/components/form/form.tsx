import { ComponentWithChildren } from '../../types/component-with-children';

type FormProps = ComponentWithChildren<{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}>;

export const Form: FormProps = ({ children, onSubmit }) => {
  return <form onSubmit={onSubmit}>{children}</form>;
};
