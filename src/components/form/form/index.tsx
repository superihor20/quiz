import { FormStyled } from './form.styled';

import { ComponentWithChildren } from '@/types/component-with-children';

type FormProps = ComponentWithChildren<{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}>;

export const Form: FormProps = ({ children, onSubmit }) => {
  return <FormStyled onSubmit={onSubmit}>{children}</FormStyled>;
};
