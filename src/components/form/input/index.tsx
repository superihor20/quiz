import { InputProps as InputAntdProps } from 'antd';
import { ControllerRenderProps, FieldPath, FieldValues } from 'react-hook-form';

import { ErrorText, InputStyled, InputWrapper } from './input.styled';

type InputProps<TForm extends FieldValues, TName extends FieldPath<TForm>> = {
  error?: string;
  field: ControllerRenderProps<TForm, TName>;
} & InputAntdProps;

export const Input = <TForm extends FieldValues, TName extends FieldPath<TForm>>({
  error,
  field,
  ...antdInputProps
}: InputProps<TForm, TName>) => {
  return (
    <InputWrapper>
      <InputStyled status={error ? 'error' : ''} {...antdInputProps} {...field} />
      {error ? <ErrorText>{error}</ErrorText> : null}
    </InputWrapper>
  );
};
